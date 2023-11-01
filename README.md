# Desafio **UpBase**

Este é um projeto de API RESTful para cadastro de alunos em um sistema EAD. Neste README, vou explicar como o projeto foi desenvolvido e apresentar as três principais rotas da API.

### Tecnologias Utilizadas

- Node.js: A plataforma JavaScript usada para construir a API.

- Express: Um framework Node.js para simplificar o desenvolvimento de aplicativos web.

- TypeORM: Uma biblioteca ORM (Object-Relational Mapping) para interagir com o banco de dados.

- MySQL: O banco de dados utilizado para armazenar os dados dos alunos.

### Desenvolvimento

O projeto foi desenvolvido com base em uma abordagem "Code First", onde os modelos de dados foram criados de acordo com as necessidades do sistema. Aqui estão os principais pontos de desenvolvimento:

1. Modelo de Dados: Foi criado um modelo de dados para representar os usuários, incluindo informações como nome, email, senha, e outros detalhes relevantes.

2. Rotas da API:

- /users: Rota para buscar todos os usuários cadastrados.

- /users/:id: Rota para buscar um usuário específico com base em seu ID.

- /register: Rota para registrar um novo usuário no sistema.

3. Integração com o Banco de Dados: O TypeORM foi usado para mapear os modelos de dados para tabelas no banco de dados MySQL. Isso permite que os dados dos alunos sejam armazenados e gerenciados de forma eficaz.

### Como Executar o Projeto

Siga estas etapas para executar o projeto em sua máquina:

1. Certifique-se de ter o Node.js e o MySQL instalados em seu ambiente.

2. Clone este repositório para o seu sistema:

```
  $ git clone <URL_DO_REPOSITÓRIO>
```

3. Navegue até o diretório do projeto:

```
  $ cd <NOME_DO_DIRETÓRIO>
```

4. Instale as dependências usando o npm:

```
  npm install
```

5. Configure as informações de conexão com o banco de dados no arquivo de configuração **'.env.'** Você pode usar o arquivo **'.env_example'** como referência para preencher os detalhes de conexão com o banco de dados.

6. Execute o projeto:

```
  npm run dev:server
```

Agora, a API estará em execução em seu ambiente local e você poderá acessar as rotas especificadas para buscar usuários e registrar novos alunos.

Agora, a API estará em execução em seu ambiente local e você poderá acessar as rotas especificadas para buscar usuários e registrar novos alunos.

### Rotas da API

**`GET /users`**

- Esta rota retorna todos os usuários cadastrados no sistema.
- Método: GET

**`GET /users/:id`**

- Esta rota retorna um usuário específico com base em seu ID.
- Método: GET
- Parâmetros da URL: id (ID do usuário)

**`POST /register`**

- Descrição: Esta rota permite o registro de um novo usuário no sistema.
- Método: POST
- Corpo da Requisição: Os dados do usuário a ser registrado.

### Conclusão

Este projeto de API de cadastro de alunos foi desenvolvido utilizando Node.js, Express e TypeORM, com um banco de dados MySQL. Ele fornece as funcionalidades necessárias para buscar e registrar alunos no sistema EAD.
