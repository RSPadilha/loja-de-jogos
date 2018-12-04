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
      <div className="is-full">
        

 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">A tua loja</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Jogos <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Exemplo</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Mais opções
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">1</a>
          <a className="dropdown-item" href="#">2</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">3</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Outros</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Procurar na loja" aria-label="Search"></input>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
    </form>
  </div>

</nav>



<div id="carouselExampleControls carrosel" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="src/imagens/rd2.jpg" alt="Jogo 1"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="src/imagens/smps4.jpg" alt="Jogo 2"/>
    </div>
    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
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