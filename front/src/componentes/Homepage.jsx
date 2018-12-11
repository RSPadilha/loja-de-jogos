import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {
      infos: ""
    }
  }
  componentDidMount(e) {
    fetch('http://localhost/loja-de-jogos/api/usuarios/48', {
      method: 'GET',
    })
    .then(response => response.json())
    .then(infos => {
      this.setState({ infos })
    });
  }

  render() {
    const { infos } = this.state;
    return (
      <div>
        <p>
          <label>Id: { infos.id }</label>
        </p>
        <p>
          <label>Nome: { infos.nome }</label>
        </p>
        <p>
          <label>Usuario: { infos.usuario }</label>
        </p>
        <p>
          <label>Jogos: { infos.qtdJogo }</label>
        </p>
      </div>
    );
  }
}
export default Homepage;