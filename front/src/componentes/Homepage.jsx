import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.fetchDB = this.fetchDB.bind(this);
  }
  fetchDB(e) {
    fetch('http://loja-de-jogos-pi2.herokuapp.com/api/usuarios', {
      method: 'GET',
    }).then();
  }

  render() {
    return (
      // Fetch from db and loop all results
      renderizar = ({id, nome}){
        <input value={nome} />
      }
      {query.map(this.renderizar)}


      while (true) {
        <div className="box">
          <label className="label">{this.props.nome}</label>
        </div>
      }
    );
  }
}
export default Homepage;