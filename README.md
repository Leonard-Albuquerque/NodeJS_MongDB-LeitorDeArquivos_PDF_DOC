# PDF & DOC to MongoDB - Node.js Application

Esta aplicação foi desenvolvida para realizar a varredura e extração de texto de arquivos PDF e DOCX e importar o conteúdo para um banco de dados MongoDB. A aplicação utiliza **Node.js**, **Express.js**, e **MongoDB**, e é capaz de fazer upload de arquivos, processá-los e armazenar as informações extraídas no banco de dados.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express.js**: Framework para criação de APIs.
- **Mongoose**: ODM para MongoDB, facilitando a interação com o banco de dados.
- **MongoDB**: Banco de dados NoSQL para armazenar o conteúdo dos arquivos.
- **Multer**: Middleware para upload de arquivos.
- **pdf-parse**: Biblioteca para extrair texto de arquivos PDF.
- **mammoth**: Biblioteca para converter documentos DOCX para texto.

## Funcionalidades

- Upload de arquivos PDF e DOCX via API.
- Extração de texto dos arquivos PDF e DOCX.
- Armazenamento do conteúdo extraído no MongoDB.

## Como Executar a Aplicação

### Pré-requisitos

Antes de executar a aplicação, você precisará ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/en/) (v12 ou superior)
- [MongoDB](https://www.mongodb.com/try/download/community) (ou utilizar MongoDB Atlas)

### Passos para Executar

1. **Clone este repositório**:
   ```bash
   git clone https://github.com/Leonard-Albuquerque/NodeJS_MongDB-LeitorDeArquivos_PDF_DOC.git
   cd pdf-doc-to-mongo
   
2. Instale as dependências: Execute o seguinte comando para instalar as dependências necessárias: npm install

3. Inicie o MongoDB: Se você estiver usando o MongoDB localmente, inicie o serviço do MongoDB. Caso contrário, utilize o MongoDB Atlas para configurar seu banco de dados.

4. Configure o banco de dados: No arquivo app.js, altere a URI de conexão com o MongoDB para o seu banco de dados.
   <br> O padrão está configurado para mongodb://localhost:27017/pdfDocDb

5. Execute a aplicação: Execute o comando abaixo para iniciar o servidor: node app.js


6. Teste o upload de arquivos: Você pode testar a API utilizando o Postman ou qualquer outra ferramenta de testes de APIs.

    Método: POST <br>
    URL: http://localhost:3000/upload  <br>
    Body (form-data): Envie um arquivo PDF ou DOCX com o campo file.

