import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      infos: ""
    }
  }

  logout() {
    if(sessionStorage.getItem('token')) sessionStorage.removeItem('token');
    console.log("token deletado e logout");
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
          </div>

          <div className="navbar-end">
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