import React from 'react';

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
      <button onClick={this.fetchDB}>Teste</button>
    );
  }
}
export default Homepage;