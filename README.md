# Desafio **UpBase**

Este é um projeto de API RESTful desenvolvido para o cadastro de alunos em um sistema de Ensino à Distância (EAD). Abaixo, você encontrará informações sobre as tecnologias utilizadas, a abordagem de desenvolvimento e as etapas para executar o projeto localmente.

### Tecnologias Utilizadas

- Node.js: A plataforma JavaScript usada para construir a API.

- Express: Um framework Node.js para simplificar o desenvolvimento de aplicativos web.

- TypeORM: Uma biblioteca ORM (Object-Relational Mapping) para interagir com o banco de dados.

- MySQL: O banco de dados utilizado para armazenar os dados dos alunos.

- Railway: Plataforma utilizada para fazer o deploy da API e hospedar o banco de dados.

Para obter informações detalhadas sobre as rotas da API, consulte a **_[documentação](https://luiggiabdiellogin-production.up.railway.app/docs/)_**. Você também pode acessar a API em funcionamento no link de **_[deploy](https://luiggiabdiellogin-production.up.railway.app/)_**.

### Desenvolvimento

O projeto foi desenvolvido com base em uma abordagem "Code First", onde os modelos de dados foram criados de acordo com as necessidades do sistema. Aqui estão os principais pontos de desenvolvimento:

1. Modelo de Dados: Foi criado um modelo de dados para representar os usuários, incluindo informações como nome, email, senha, e outros detalhes relevantes.

2. Rotas da API:

- _/users_

- _/users/:id_

- _/register_

3. Integração com o Banco de Dados: O TypeORM foi utilizado para mapear os modelos de dados para tabelas no banco de dados MySQL hospedado no Railway. Isso permite o armazenamento e gerenciamento eficaz dos dados dos alunos.

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

### Conclusão

Este projeto de API para cadastro de alunos foi desenvolvido com tecnologias como Node.js, Express, TypeORM e MySQL, com deploy e hospedagem feitos por meio da plataforma Railway. Ele fornece funcionalidades essenciais para buscar e registrar alunos em um sistema de Ensino à Distância (EAD). Para obter informações detalhadas sobre as rotas e seu funcionamento, consulte a **_[documentação](https://luiggiabdiellogin-production.up.railway.app/docs/)_**.
