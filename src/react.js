class Form extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCriar = this.handleCriar.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.target);
		fetch('http://localhost/loja-de-jogos/api/usuarios', {
			method: 'POST',
			body: data,
		});
		console.log('Usuario criado');
	}

	handleCriar(e) {
		e.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div class="field">
					<label class="label">Usuário</label>
			  		<div class="control has-icons-left">
			    		<input class="input" placeholder="Nome de usuário" name="usuario" autofocus="autofocus" />
			    		<span class="icon is-small is-left">
			      			<i class="fas fa-user"></i>
			    		</span>
			  		</div>
				</div>
				<div class="field">
			  		<label class="label">Senha</label>
			  		<div class="control has-icons-left">
			    		<input class="input" type="password" placeholder="Senha" name="senha" />
			    		<span class="icon is-small is-left">
			      			<i class="fas fa-lock"></i>
			    		</span>
					</div>
				</div>
				<div class="field is-grouped">
			  		<div class="control">
			    		<input type="submit" class="button is-link" value="Entrar" />
			  		</div>
			  	{/*Colocar fora do form*/}
					<div class="control">
			    		<button class="button is-text" onClick={this.handleCriar}>Criar conta</button>
			  		</div>
				</div>
			</form>
		);
	}
}

ReactDOM.render(<Form />, document.getElementById('formulario'));