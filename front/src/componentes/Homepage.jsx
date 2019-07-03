import React from 'react';
import Header from './Header.jsx';
import { BrowserRouter as Redirect } from 'react-router-dom';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {
      infos: "",
      jogos: ""
    }
  }

  componentDidMount(e) {
    fetch('http://localhost/loja-de-jogos/api/usuarios/jogos/38')
    .then(response => response.json())
    .then(jogos => {
      this.setState({jogos})
    });

    fetch('http://localhost/loja-de-jogos/api/usuarios/38', {
      method: 'GET',
    })
    .then(response => response.json())
    .then(infos => {
      this.setState({ infos })
    });
  }

  render() {
    if(localStorage.getItem('token') == false){ return <Redirect to="/" />}
    const { infos } = this.state;
    const { jogos } = this.state;
    return (
      <div>
        <Header nome={infos.nome}/>
        <div className="has-text-centered">
          <h1>Logado com sucesso...</h1>
          <div>
            ID: {infos.id}
          </div>
          <div>
            Nome: {infos.nome}
          </div>
          <div>
            Quantidade de jogos: {infos.qtdJogos}
          </div>
          <div>
            Email: {infos.email}
          </div>
          <div>
            Jogos:
            { jogos ? jogos.map((jogo)=>
              <div key={jogo.id}>{jogo}</div>
            ) : 'Nenhum'}
          </div>
        </div>
      </div>
    );
  }
}
export default Homepage;