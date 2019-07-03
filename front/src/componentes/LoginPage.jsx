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
		// Used for ... ?
		e.persist();
		const data = new FormData(e.target);

		return new Promise((resolve, reject) => {
			fetch('http://localhost/loja-de-jogos/api/usuarios/autentica', {
				method: 'POST',
				body: data,
			})
			.then((response) => response.json())
			.then((response) => {
				resolve(response);
			})
			.catch((error) => {
				reject(error);
			});
		})
		.then((result) => {
			let responseToken = result;
			if(responseToken.userData) {
				localStorage.setItem('token', JSON.stringify(responseToken.userData));
				localStorage.setItem('idUser', JSON.stringify(responseToken.idUser));
				this.setState({ redirect:true });
			} else {
				console.log("usuario errado")
			}
		});
	}

	render() {
		if(this.state.redirect) return (<Redirect to='/homepage' />);
		return (
			<div className="column is-4 is-offset-4">
				{/* <h3 className="title has-text-grey">Login</h3> */}
				<div className="box">
					<figure className="avatar">
						<img src="src/imagens/senac_logo.png" />
					</figure>
					<form onSubmit={this.handleSubmit}>
						<div className="field">
							<label className="label">Usuário</label>
					  		<div className="control has-icons-left">
					    		<input className="input" placeholder="Nome de usuário" name="usuario" required autoFocus />
					    		<span className="icon is-small is-left">
					      		<i className="fas fa-user"></i>
					    		</span>
					  		</div>
						</div>
						<div className="field">
							<label className="label">Senha</label>
							<div className="control has-icons-left">
						   		<input className="input" type="password" placeholder="Senha" name="senha" required />
						   		<span className="icon is-small is-left">
						   			<i className="fas fa-lock"></i>
						   		</span>
							</div>
						</div>
						<div className="field" id="passwordError" hidden>
							<div className="has-text-danger">Usuário ou senha estão incorretos</div>
						</div>
						<div className="field is-grouped">
							<div className="control">
						   		<input type="submit" className="button is-link" value="Entrar" />
							</div>
						  	{/*Colocar fora do form*/}
							<div className="control">
								<Link to='/register'>
							  	<button className="button is-text">Criar conta</button>
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