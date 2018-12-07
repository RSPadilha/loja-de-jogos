import React from 'react';
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';

class Gamepage extends React.Component {
  constructor(props) {
    super(props);
    this.fetchDB = this.fetchDB.bind(this)
    this.state = {}
  }
  fetchDB(e) {
    console.log("Incio fetch")
    fetch('http://localhost/loja-de-jogos/api/jogos', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => console.log(data[0].id));
  }



  render() {
    return (
      <div className="is-full">
        

 



<div id="carouselExampleControls carrosel" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="src/imagens/rd2.jpg" alt="Jogo 1"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="src/imagens/smps4.jpg" alt="Jogo 2"/>
    </div>
    
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>


        <div>
          <button onClick={this.fetchDB}>Buscar dados no banco</button>
        </div>
      </div>
    );
  }

}
export default Gamepage;