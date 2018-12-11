import React from 'react';
import Header from './Header.jsx';

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
        <Header infos={infos}/>
        <div className="has-text-centered">
          <h1>Logado com sucesso... {infos.nome}</h1>
        </div>
      </div>
    );
  }
}
export default Homepage;