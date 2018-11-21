# Loja de Jogos :video_game:
Este projeto é para o trabalho de Programação para Internet 2.

O objetivo é desenvolver um web service para ser usado por uma loja online de jogos (tipo Steam).

Clonar repositório dentro do xampp e rodar o comando `composer install` dentro da pasta **api** e `npm install` na pasta **front**

Para iniciar a aplicação usar `npm run start:server` na pasta **front**

## TODO
##### FRONT
- [X] Tela de cadastro de usuário
- [ ] Tela da loja em si (jogos cadastrados)
- [ ] Tela do perfil do usuario
- [X] Navegação entre páginas no front
- [ ] ~~Tratar páginas inexistentes (404)~~

##### BANCO
- [X] Refazer a tabela de usuários adicionando novas colunas
- [ ] Definir a relação das tabelas (FK, Lista de jogos e carrinho)
- [ ] Definir o esquema do caminho das imagens armazenadas no banco
- [X] Arrumar consulta sql da lista de jogos

##### API
- [ ] Mover a pasta composer para o heroku conseguir montar a aplicação
- [ ] Funções de compra de jogos (incrementar quantidade `insert ... qtdJogos = qtdJogos + 1`)
- [ ] Autenticação (já está gerando um token sem informações do usuario)
- [ ] Tratar erros caso a query não insira, delete, etc.
- [X] Validar consultas com resultados nulls (consultas com id sem registro no bd)
- [ ] ~~Planejar melhor a função `atualizar` (pegar id na uri ou no form?)~~
- [ ] ~~Melhorar o dao removendo os construtores com null (isso é necessario?)~~

##### SEGURANÇA
- [ ] Validar inputs
- [ ] Acessar o banco de forma mais segura sem expor as credenciais no código (variável de ambiente)

# Estudos

- Exemplo de login com React http://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example
- Redux https://redux.js.org/
- OAuth2 https://oauth.net/2/
- JWT https://jwt.io/
- Router https://reacttraining.com/react-router/web/guides/quick-start
- Separação de responsabilidades react https://medium.com/reactbrasil/boas-pr%C3%A1ticas-na-cria%C3%A7%C3%A3o-e-separa%C3%A7%C3%A3o-de-responsabilidades-em-componentes-react-8a6921b33b5
- Exemplo login com token https://www.youtube.com/watch?v=Y4NHqDp88lA


# Especificação trabalho 1
Este trabalho consiste no desenvolvimento dos serviços Web (Web Services RESTful) com persistência da nossa aplicação Web. O objetivo deste trabalho é permitir os alunos aplicarem os conceitos e funcionalidades do REST e dos padrões de persistência vistos em aula (PDO e DAO). Nesse trabalho, a ideia é realizar o back-end do trabalho para futuramente unificar com o front-end.

Instruções gerais:

O trabalho possui um tema livre com algumas restrições quanto às funcionalidades, ou seja, o(s) aluno(s) poderá(ão) trabalhar com um domínio de aplicação de seu interesse. No entanto, para isso, o(s) aluno(s) deverá(ão) definir o escopo do trabalho (atividade dada no dia 11/09).

Com base nessa especificação, o(s) aluno(s) (um ou dois alunos) deverá(ão) desenvolver o back-end da aplicação. Para isso, todos os Web Services devem ser implementados e testados - utilizando a ferramenta Postman (vista em aula) - seguindo o tema da especificação. Os Web Services deverão contemplar pelo menos três CRUD de entidades e uma funcionalidade específica, e essas funcionalidades deverão persistir seus dados em um banco de dados utilizando padrões adequados de mercado (no caso de PHP, utilizar PDO, por exemplo).

Caso o aluno não tenha enviado a especificação, o aluno deverá realizar a aplicação biblioteca descrito no anexo A. Nesse caso, o trabalho deverá ser realizado individualmente.

A aplicação desenvolvida deverá contemplar alguns assuntos vistos em aula. Assim, a avaliação será baseada de acordo com as funcionalidades a serem desenvolvidas e com os conceitos de REST e PDO (vistos em aula) empregados para o desenvolvimento dessa aplicação.

##### Avaliação

O conceito desse trabalho será baseado de acordo com as funcionalidades realizadas no trabalho e com os conceitos de Web Services RESTful empregados no trabalho. Abaixo segue a relação de conceitos e features a serem realizadas no trabalho:

**Conceito C**

- [X] Apresentação de forma clara (para o professor);
- [X] Dois Web Services RESTful realizando CRUD funcionando de forma correta com persistência (se o trabalho é em dupla, um para cada aluno);
- [X] Testes dos Web Services corretamente.

**Conceito B**

- [X] Realizar as tarefas para alcançar o conceito C;

- [X] Realizar uma funcionalidade de negócio (ou CRUD) que manipule duas entidades simultaneamente na aplicação como um todo (utilizando Web Services de forma correta e adequada);

- [ ] Utilizar autenticação aplicando técnicas de segurança adequadamente (OAuth e JWT);

- [X] Modelagem apropriada dos Web Services (retorno dos status code correto);

- [X] Aplicação dos conceitos de Orientação a Objetos corretamente.

**Conceito A**

- [ ] Aplicação completa, realizando todas as funcionalidades do conceito B com regras de negócio aplicadas corretamente;

- [X] Utilização de um sistema de controle de versão (ex: git) e de um ambiente de colaboração e gerenciamento de código baseado nesse controle de versão (ex: GitHub, Bitbucket). Caso o trabalho seja em dupla, a colaboração deve estar evidenciada;

- [ ] Tratamento de erros, regras de negócio e exceções;

- [X] Implantar os Web Services em um servidor na nuvem: Heroku, Digital Ocean, etc.

Apresentação e Entrega:

O trabalho deverá ser realizado individualmente ou em dupla. Os alunos deverão estar presentes em aula para apresentar o trabalho. A entrega deverá ser realizada pelo Blackboard da disciplina, anexando o projeto em um arquivo zipado (zip) contendo o código fonte, os testes realizados no Postman (JSON) e todas as bibliotecas extras utilizadas (alinhadas conforme o projeto). Caso o grupo tenha utilizado o GitHub, deverá relacionar o link como comentário na entrega. Caso o grupo tenha implantado a aplicação, relacionar também o link da aplicação implantada no servidor.

Data de entrega e apresentação: 09/10



# Especificação do Trabalho 2
Este trabalho consiste no desenvolvimento de uma aplicação Web multi-arquitetura, integrando o front-end (design e código JavaScript) com serviços Web (Web Services Restful) realizados no Trabalho 1. O objetivo deste trabalho é que os alunos entendam os conceitos do desenvolvimento front-end e acessem os Web Services através do front-end. Ou seja, nesse trabalho, a ideia é realizar o front-end e unificar a aplicação com o back-end.

Instruções gerais:

A proposta desse trabalho é realizar a extensão do trabalho anterior, criando o design da aplicação Web, desenvolvendo as funcionalidades front-end e acessando os serviços Web (Web Services RESTful) desenvolvidos no primeiro trabalho. Ou seja, com base na especificação definida no Trabalho 1, o(s) aluno(s) deverão implementar a aplicação Web, desenvolvendo o front-end da aplicação com HTML, CSS e JavaScript e integrando o front-end aos Web Services.

Os alunos poderão optar em utilizar frameworks CSS (Bootstrap, Materialize, W3CSS, etc) para facilitar o design da aplicação e frameworks ou bibliotecas JS (Angular, React, JQuery, etc) para facilitar o desenvolvimento das funcionalidades front-end.

A aplicação desenvolvida como um todo deverá contemplar alguns assuntos vistos em aula. Assim, a avaliação será baseada de acordo com as funcionalidades a serem desenvolvidas e com os conceitos de front-end e REST vistos em aula empregados no desenvolvimento dessa aplicação.

O aluno deverá manter o tema definido no Trabalho I (exceto em casos especiais). Os alunos poderão realizar o trabalho individualmente ou em dupla (mantendo a dupla do Trabalho I).


##### Avaliação

O conceito desse trabalho será baseado de acordo com as funcionalidades realizadas no trabalho e com os conceitos empregados no trabalho. Abaixo segue a relação de conceitos e features a serem realizadas no trabalho:

**Conceito C**

- [ ] Apresentação de forma clara (para o professor);

- [ ] CRUDs completos (pelo menos um por aluno) na aplicação com utilização de tabela e formulário, acessando os Web Services corretamente;

- [ ] Navegação adequada entre as páginas;

- [ ] Interface Web funcional.

**Conceito B**

- [ ] Realizar as tarefas para alcançar o conceito C;
- [ ] Realizar uma funcionalidade de negócio (ou CRUD) que manipule duas entidades simultaneamente na aplicação como um todo (aplicação front-end acessando os Web Services de forma correta e adequada);
- [X] Acesso aos Web Services de maneira adequada (trabalhando corretamente com os Padrões JavaScript ou do framework utilizado);
- [X] Código JavaScript (ou TypeScript) adequado e modularizado;
- [X] Interface Web adequada utilizando CSS.

**Conceito A**

- [ ] Aplicação completa, realizando todas as funcionalidades do conceito B com regras de negócio aplicadas corretamente;
- [ ] Interface Web adequada e responsiva (sugere-se utilizar Bootstrap ou frameworks semelhantes);
- [ ] Modelagem apropriada dos Web Services e do Mapeamento dos objetos no back-end;
- [X] Utilização de um sistema de controle de versão (ex: git) e de um ambiente de colaboração e gerenciamento de código baseado nesse controle de versão (ex: github, bitbucket). Caso o trabalho seja em dupla, a colaboração deve estar evidenciada;
**Utilizar alguma prática de mercado não vista em aula (uma das opções):**
  - [ ] Utilizar testes unitários aplicados no front-end (JavaScript) e demonstrar testes funcionais nos Web Services (ex: no Postman ou SoapUI);  
  - [X] Aplicar técnicas de segurança não relacionadas em aula (ex: oauth2, JWT) para os Web Services Restful.
  - [ ] Documentar a API seguindo um padrão Open API. Dica: utilizar o Swagger.
  - [ ] Manipulação (upload e download) de imagens e/ou vídeos;
  - [ ] Implantar a aplicação completa em uma plataforma em nuvem: Heroku, OpenShift, DigitalOcean, entre outros.
Outras opções: conversar com o professor.


##### Apresentação e Entrega:

O trabalho deverá ser realizado individualmente ou em dupla. Os alunos deverão estar presentes em aula para apresentar o trabalho. A entrega deverá ser realizada pelo Blackboard da disciplina, anexando os dois projetos (front-end e back-end) em um arquivo zipado (zip), contendo o código-fonte e todas as bibliotecas extras utilizadas (alinhadas conforme o projeto). Caso o grupo tenha utilizado o Github, deverá relacionar o link como comentário na entrega. Caso o grupo tenha implantado a aplicação, relacionar também o link da aplicação implantada no servidor.

**Data de Entrega Final: 11/12**