import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class RegisterPage extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    // fetch('http://loja-de-jogos-pi2.herokuapp.com/api/usuarios', {
		fetch('http://localhost/loja-de-jogos/api/usuarios', {
			method: 'POST',
			body: data,
		});
  }

  render(){
    // nome, usuario, senha, email, avatar(file)
    return (
      <div className="column is-4 is-offset-4">
        <h3 className="title has-text-grey">Registro</h3>
        <div className="box">
          <form onSubmit={this.handleSubmit}>

            <div className="field">
              <label className="label">Nome</label>
                <div className="control has-icons-left">
                  <input className="form-control" placeholder="Nome completo" name="nome" required autoFocus />
                  
                </div>
            </div>

            <div className="field">
              <label className="label">Usuário</label>
                <div className="control has-icons-left">
                  <input className="form-control" placeholder="Usuário" name="usuario" required />
                  
                </div>
            </div>

            <div className="field">
              <label className="label">Senha</label>
              <div className="control has-icons-left">
                  <input className="form-control" type="password" placeholder="Senha" name="senha" required />
                 
              </div>
            </div>

            <div className="field">
              <label className="label">E-mail</label>
                <div className="control has-icons-left">
                  <input className="form-control" type="email" placeholder="E-mail" name="email" />
                  
                </div>
            </div>

            {/* <div className="field">
              <label className="label">Imagem de perfil</label>
              <input className="file" type="file" name="avatar" accept="image/png, image/jpeg" />
            </div> */}

            <div className="field is-grouped">
              <div className="control linha">
                  <input type="submit" className="btn btn-primary linha" value="Cadastrar" />
              </div>
              <div className="control linha">
								<Link to='/'>
							  	<button className="btn btn-primary">Cancelar</button>
								</Link>
							</div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default RegisterPage;