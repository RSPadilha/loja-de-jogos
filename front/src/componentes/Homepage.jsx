import React from 'react';
import Gamepage from './Gamepage.jsx';
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.fetchDB = this.fetchDB.bind(this);
    this.state = {}
  }
  fetchDB(e) {
    fetch('http://localhost/loja-de-jogos/api/usuarios', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
      <div>
        <Link to='/gamepage'>
          <button>Página de Jogos</button>
        </Link>
        <button onClick={this.fetchDB}>Teste</button>
      </div>
    );
  }
}
export default Homepage;