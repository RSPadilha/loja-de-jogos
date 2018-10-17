# Loja de Jogos :video_game:
Este projeto é para o trabalho de Programação para Internet 2.

O objetivo é desenvolver um web service para ser usado por uma loja online de jogos (tipo Steam).

Clonar repositório dentro do xampp e rodar o comando `composer install`

# TODO

- [ ] Tela de cadastro de usuário
- [X] Refazer a tabela de usuários adicionando novas colunas
- [ ] Definir o esquema do caminho das imagens armazenadas no banco
- [ ] Tela da loja em si (jogos cadastrados)
- [ ] Tela do perfil do usuario
- [ ] Navegação entre páginas no front
- [ ] Definir a relação das tabelas (FK, Lista de jogos e carrinho)
- [ ] Arrumar consulta sql da lista de jogos
- [ ] Funções de compra de jogos
- [ ] Autenticação
- [ ] Planejar melhor a função `atualizar`
- [ ] Melhorar o dao removendo os construtores com null
- [ ] Validar inputs
- [ ] Acessar o banco de forma mais segura sem expor as credenciais no código

# Estudos

- Exemplo de login com React http://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example
- Redux https://redux.js.org/
- OAuth2 https://oauth.net/2/
- JWT https://jwt.io/

**Comando para rodar o server (dentro da pasta public)**
`php -S localhost:8080 index.php` // Não rodar esse comando, rodar em um server na verdade

# Especificação trabalho 1
Este trabalho consiste no desenvolvimento dos serviços Web (Web Services RESTful) com persistência da nossa aplicação Web. O objetivo deste trabalho é permitir os alunos aplicarem os conceitos e funcionalidades do REST e dos padrões de persistência vistos em aula (PDO e DAO). Nesse trabalho, a ideia é realizar o back-end do trabalho para futuramente unificar com o front-end.

Instruções gerais:

O trabalho possui um tema livre com algumas restrições quanto às funcionalidades, ou seja, o(s) aluno(s) poderá(ão) trabalhar com um domínio de aplicação de seu interesse. No entanto, para isso, o(s) aluno(s) deverá(ão) definir o escopo do trabalho (atividade dada no dia 11/09).

Com base nessa especificação, o(s) aluno(s) (um ou dois alunos) deverá(ão) desenvolver o back-end da aplicação. Para isso, todos os Web Services devem ser implementados e testados - utilizando a ferramenta Postman (vista em aula) - seguindo o tema da especificação. Os Web Services deverão contemplar pelo menos três CRUD de entidades e uma funcionalidade específica, e essas funcionalidades deverão persistir seus dados em um banco de dados utilizando padrões adequados de mercado (no caso de PHP, utilizar PDO, por exemplo).

Caso o aluno não tenha enviado a especificação, o aluno deverá realizar a aplicação biblioteca descrito no anexo A. Nesse caso, o trabalho deverá ser realizado individualmente.

A aplicação desenvolvida deverá contemplar alguns assuntos vistos em aula. Assim, a avaliação será baseada de acordo com as funcionalidades a serem desenvolvidas e com os conceitos de REST e PDO (vistos em aula) empregados para o desenvolvimento dessa aplicação.

Avaliação

O conceito desse trabalho será baseado de acordo com as funcionalidades realizadas no trabalho e com os conceitos de Web Services RESTful empregados no trabalho. Abaixo segue a relação de conceitos e features a serem realizadas no trabalho:

Conceito C:

- Apresentação de forma clara (para o professor);

- Dois Web Services RESTful realizando CRUD funcionando de forma correta com persistência (se o trabalho é em dupla, um para cada aluno);

- Testes dos Web Services corretamente.

Conceito B:

- Realizar as tarefas para alcançar o conceito C;

- Realizar uma funcionalidade de negócio (ou CRUD) que manipule duas entidades simultaneamente na aplicação como um todo (utilizando Web Services de forma correta e adequada);

- Utilizar autenticação aplicando técnicas de segurança adequadamente (OAuth e JWT);

- Modelagem apropriada dos Web Services (retorno dos status code correto);

- Aplicação dos conceitos de Orientação a Objetos corretamente.

Conceito A:

- Aplicação completa, realizando todas as funcionalidades do conceito B com regras de negócio aplicadas corretamente;

- Utilização de um sistema de controle de versão (ex: git) e de um ambiente de colaboração e gerenciamento de código baseado nesse controle de versão (ex: GitHub, Bitbucket). Caso o trabalho seja em dupla, a colaboração deve estar evidenciada;

- Tratamento de erros, regras de negócio e exceções;

- Implantar os Web Services em um servidor na nuvem: Heroku, Digital Ocean, etc.

Apresentação e Entrega:

O trabalho deverá ser realizado individualmente ou em dupla. Os alunos deverão estar presentes em aula para apresentar o trabalho. A entrega deverá ser realizada pelo Blackboard da disciplina, anexando o projeto em um arquivo zipado (zip) contendo o código fonte, os testes realizados no Postman (JSON) e todas as bibliotecas extras utilizadas (alinhadas conforme o projeto). Caso o grupo tenha utilizado o GitHub, deverá relacionar o link como comentário na entrega. Caso o grupo tenha implantado a aplicação, relacionar também o link da aplicação implantada no servidor.

Data de entrega e apresentação: 09/10
