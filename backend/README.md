# Backend API
Este é um backend de API desenvolvido em Node.js utilizando Express, Sequelize, MySQL e TSOA para documentação Swagger em TypeScript.

## 📋 Descrição
Este projeto é uma API backend que utiliza Express como framework principal, Sequelize como ORM para manipular banco de dados MySQL, e TSOA para gerar rotas e documentação Swagger automaticamente a partir das anotações no código TypeScript.

## 🛠️ Tecnologias Utilizadas
- **Node.js**: Ambiente de execução JavaScript do lado do servidor.
- **Express**: Framework para construção de APIs RESTful.
- **TypeScript**: Suporte a tipagem estática e melhorias de desenvolvimento.
Sequelize: ORM para facilitar o uso do banco de dados MySQL.
- **MySQL**: Sistema de banco de dados relacional.
- **TSOA**: Para geração automática de rotas e documentação Swagger.
- **Swagger-UI-Express**: Interface para visualizar a documentação da API.

## 🚀 Instalação

1. clone o repositório
```bash
git clone <url_do_repositorio>
cd backend
```

2. Instale as dependências:
```bash
npm install
```

3. Configuração do Banco de Dados:

Certifique-se de que você tem um banco de dados MySQL configurado e ajuste as credenciais de conexão no arquivo apropriado (src/infra/sequelize/db/database.ts).

4. Configuração do TSOA:

As rotas e especificações Swagger são geradas com base nos controladores TypeScript. Os arquivos de configuração tsoa.json já estão preparados.

## 🔄 Scripts

1. Gerar Rotas e Especificações:
```bash
npm run tsoa:routes
npm run tsoa:spec
```

2. Executar em Modo de Desenvolvimento:
```bash
npm run dev
```
Este comando gera as rotas e especificações e, em seguida, executa o servidor usando ts-node.

3. Construir Projeto para Produção:
```
npm run build
```
Compila o TypeScript para JavaScript.

4. Executar em Produção:
```bash
npm start
```
Executa o servidor a partir dos arquivos JavaScript compilados na pasta dist.

## 🗒️ Endpoints da API

A documentação Swagger está disponível para visualizar todos os endpoints da API:

- `Swagger UI`: http://localhost:3000/api-docs

Você pode acessar a documentação e interagir com a API utilizando as rotas /api-docs, /openapi, /docs, ou /swagger.

## 📝 Estrutura do Projeto

- src/app.ts: Configuração do Express, rotas e inicialização do Swagger.
- src/server.ts: Inicialização do servidor.
- src/application: Contém os controllers com endpoints e DTOS 
- src/domain: Contém a lógica de negócios, como os modelos (models) e serviços (services)
- src/infra: Contém a infraestrutura, como configurações do banco de dados e arquivos gerados pelo TSOA (swagger).
- tsoa.json: Arquivo de configuração do TSOA.






