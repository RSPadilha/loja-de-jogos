import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.fetchDB = this.fetchDB.bind(this);
    this.state = {
      id: "",
      nome: "",
      usuario: "",
      qtdJogos: ""
    }
  }
  fetchDB(e) {
    fetch('http://localhost/loja-de-jogos/api/usuarios/48', {
      method: 'GET',
    })
    .then(response => response.json())
    .then(response => {
      this.setState({ [response.id] : response.value })
    });
  }

  render() {
    return (
      <div>
        <p>
          <label>Id: {this.state.id}</label>
        </p>
        <p>
          <label>Nome: {this.state.nome}</label>
        </p>
        <p>
          <label>Usuario: {this.state.usuario}</label>
        </p>
        <p>
          <label>Jogos: {this.state.qtdJogos}</label>
        </p>

        <button onClick={this.fetchDB}>Carregar usuario</button>
      </div>
    );
  }
}
export default Homepage;