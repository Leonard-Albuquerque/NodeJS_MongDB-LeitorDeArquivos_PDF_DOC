const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const pdfParse = require('pdf-parse');
const mammoth = require('mammoth');


const Document = require('./models/Document');


mongoose.connect('mongodb://localhost:27017/pdfDocDb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.log('Erro de conexão:', err));

const app = express();
const port = 3000;


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

// Rota para upload de arquivos PDF ou DOC
app.post('/upload', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send('Nenhum arquivo enviado!');
    }

    const filePath = req.file.path;
    const fileType = req.file.mimetype;

    try {
        let content = '';
        // Processar o arquivo com base no tipo
        if (fileType === 'application/pdf') {
            const pdfBuffer = fs.readFileSync(filePath);
            const pdfData = await pdfParse(pdfBuffer);
            content = pdfData.text; // Extrair texto do PDF
        } else if (fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
            const docBuffer = fs.readFileSync(filePath);
            const docData = await mammoth.extractRawText({ buffer: docBuffer });
            content = docData.value; // Extrair texto do DOCX
        } else {
            return res.status(400).send('Formato de arquivo não suportado!');
        }

        // Salvar o conteúdo no MongoDB
        const newDocument = new Document({
            fileName: req.file.originalname,
            content: content,
            filePath: filePath,
        });
        await newDocument.save();

        // Enviar resposta
        res.status(200).send('Arquivo processado e salvo com sucesso!');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao processar o arquivo.');
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
