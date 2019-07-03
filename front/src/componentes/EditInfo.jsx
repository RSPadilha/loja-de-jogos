import React from 'react';
import Header from './Header.jsx';
import { BrowserRouter as Redirect } from 'react-router-dom';

export default class EditInfo extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.alterarDados = this.alterarDados.bind(this);
    this.state = {
      infos: ""
    }
  }

  componentDidMount(e) {
    fetch('http://localhost/loja-de-jogos/api/usuarios/38', {
      method: 'GET',
    })
    .then(response => response.json())
    .then(infos => {
      this.setState({ infos })
    });
  }

  alterarDados(e) {
    e.preventDefault();
		const data = new FormData(e.target);

    fetch('http://localhost/loja-de-jogos/api/usuarios/38', {
      method: 'PUT',
      body: data,
    });
  }

  render() {
    const { infos } = this.state;
    return (
      <div>
        <Header nome={infos.nome}/>
        <div className="has-text-centered">
          <form onSubmit={this.alterarDados}>

          <div className="field">
            <label className="label">Nome</label>
                <input className="input" placeholder={infos.nome} name="nome" />
            </div>
            <div className="field">
              <label className="label">Usuario</label>
                <input className="input" placeholder={infos.usuario} name="usuario" />
            </div>
            <div className="field">
              <label className="label">Senha</label>
                <input className="input" placeholder="Nova senha" name="senha" />
            </div>
            <div className="field">
              <label className="label">Email</label>
                <input className="input" placeholder={infos.email} name="email" />
            </div>

            <div className="control">
              <input type="submit" className="button is-link" value="Alterar" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}