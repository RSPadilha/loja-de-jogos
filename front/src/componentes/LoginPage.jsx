import React from 'react';
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';

class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { redirect: false };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.target);
		return new Promise((resolve, reject) => {
			fetch('http://localhost/loja-de-jogos/api/usuarios/autentica', {
				method: 'POST',
				body: data,
			})
			// .then((response) => response.json())
			.then((response) => {
				// TRATAR. só redirecionar quando login ficar ok
				this.setState({ redirect:true });
				console.log(response);
				resolve(response);
			})
			.catch((error) => {
				reject(error);
			});

		});
	}

	render() {
		if(this.state.redirect) return <Redirect to='/homepage' />;
		return (
			<div className="column is-4 is-offset-4">
				<h3 className="logintitulo">Login</h3>
				<div className="box">
					<figure className="avatar">
						<img className="senacImagem" src="src/imagens/senac_logo.png" />
					</figure>
					<form className="centralizar" onSubmit={this.handleSubmit}>
						<div className="field espacamentobaixo">
							<label className="label">Usuário</label>
					  		<div className="control has-icons-left">
					    		<input className="form-control" placeholder="Nome de usuário" name="usuario" required autoFocus />
					    		
					  		</div>
						</div>
						<div className="field espacamentobaixo">
							<label className="label">Senha</label>
							<div className="control has-icons-left">
						   		<input className="form-control" type="password" placeholder="Senha" name="senha" required />
						   		
							</div>
						</div>
						<div className="field is-grouped espacamentobaixo">
							<div className="control linha">
						   		<input type="submit" className="btn btn-primary" value="Entrar" />
							</div>
						  	{/*Colocar fora do form*/}
							<div className="control linha">
								<Link to='/register'>
							  	<button className="btn btn-primary">Criar conta</button>
								</Link>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
export default LoginPage;