import React from 'react';
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';

class Gamepage extends React.Component {
  constructor(props) {
    super(props);
    this.fetchDB = this.fetchDB.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescricao = this.onChangeDescricao.bind(this);

    this.insertDB = this.insertDB.bind(this);
    this.state = {
      games: [],
      nome: "",
      descricao: ""
    }
  }

  fetchDB(e) {
    const url = 'http://localhost/loja-de-jogos/api/jogos';

    console.log("Incio fetch")
    fetch(url, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        console.log('data', data);
        this.setState({ games: data });
      })
      .catch(err => {
        // trata se alguma das promises falhar
        console.error('Falha no retorno da informação', err);
      });

  }

  insertDB(e) {
    const url = 'http://localhost/loja-de-jogos/api/jogos';

    console.log("Incio fetch")
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        nome: this.state.nome,
        descricao: this.state.descricao,
        preco: 50,
        capa: 'dqddqwdqwdqw'
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log('data', data);
      })
      .catch(err => {
        // trata se alguma das promises falhar
        console.error('Falha no retorno da informação', err);
      });

  }

  onChangeName(e) {
    console.log('Nome entrou?');
    //this.setState({[e.target.name]: e.target.value});
    this.setState({ nome: e.target.value });
  }
  onChangeDescricao(e) {
    console.log('Descricao entrou?');
    //this.setState({[e.target.name]: e.target.value});
    this.setState({ descricao: e.target.value });
  }

  render() {
    const gamesList = (this.state.games || []).map(function(game, index) {
      return <li key={index} className="">
        {game.nome}
      </li>;
    });

    return (
      <div className="is-full">

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">A tua loja</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Jogos <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Exemplo</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Mais opções
        </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">1</a>
                  <a className="dropdown-item" href="#">2</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">3</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Outros</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Procurar na loja" aria-label="Search"></input>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
            </form>
          </div>

        </nav>

        <p id="paragrafo"></p>
        <ul id="lista">
          {gamesList}
        </ul>

        <div>
          <button onClick={this.fetchDB}>Buscar dados no banco</button>
        </div>

        <div>
          <form>
            <input type="text" name="nome" value={this.state.nome} onChange={(e) => this.onChangeName(e)}></input>
            <input type="text" name="descricao" value={this.state.descricao} onChange={(e) => this.onChangeDescricao(e)}></input>
            <button type="button" onClick={this.insertDB}>INserir dados no banco</button>

          </form>
        </div>
      </div>
    );
  }

}
export default Gamepage;