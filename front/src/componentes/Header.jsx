import React from 'react';
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.deletarAcc = this.deletarAcc.bind(this);
    this.state = {
      infos: ""
    }
  }

  logout() {
    if(localStorage.getItem('token')) localStorage.removeItem('token');
    console.log("token deletado e logout");
  }

  deletarAcc() {
    fetch('http://localhost/loja-de-jogos/api/usuarios/38', {
      method: 'DELETE',
    });
  }

render () {
  const { infos } = this.state;
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-menu">
          <div className="navbar-start">
            <label className="navbar-item">
              Seja bem-vindo: {infos.nome}
            </label>

            <a className="navbar-item">
              Informações
            </a>

            <a className="navbar-item">
              Jogos
            </a>

            <a className="navbar-item">
              Loja
            </a>
            <Link to='/editar' className="navbar-item">
                Alterar Dados
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <button className="button is-danger" onClick={this.deletarAcc}>
                Deletar Conta
              </button>
            </div>
            <div className="navbar-item">
              <button className="button is-primary" onClick={this.logout}>
                Sair
              </button>
          </div>
          </div>
        </div>
      </nav>
    </div>
  )}
};