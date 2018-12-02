import React from 'react';
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';

class Gamepage extends React.Component {
  constructor(props) {
    super(props);
    this.fetchDB = this.fetchDB.bind(this);
    this.state = {}
  }
  fetchDB(e) {
    fetch('http://localhost/loja-de-jogos/api/jogos', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
      <div>
        <button onClick={this.fetchDB}>Buscar dados no banco</button>
      </div>
    );
  }
  
}
export default Gamepage;