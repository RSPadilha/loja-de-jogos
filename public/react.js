class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state =
		{
			usuario: '',
			senha: ''
		};
		this.handleUsuarioChange = this.handleUsuarioChange.bind(this);
		this.handleSenhaChange = this.handleSenhaChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleUsuarioChange(e) {
		this.setState({usuario: event.target.value});
	}

	handleSenhaChange(e) {
		this.setState({senha: event.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.target);

		// fetch('http://localhost/loja-de-jogos/api/usuario', {
		// 	method: 'POST',
		// 	body: data,
		// });
	}

	handleCriar(e) {
		const data = new FormData(e.target);

		fetch('http://localhost/loja-de-jogos/api/usuario', {
			method: 'POST',
			body: data,
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div class="field">
					<label class="label">Usuário</label>
			  		<div class="control has-icons-left">
			    		<input class="input" placeholder="Nome de usuário" value={this.state.usuario} onChange={this.handleUsuarioChange} name='usuario' autofocus="autofocus" />
			    		<span class="icon is-small is-left">
			      			<i class="fas fa-user"></i>
			    		</span>
			  		</div>
				</div>
				<div class="field">
			  		<label class="label">Senha</label>
			  		<div class="control has-icons-left">
			    		<input class="input" type="password" placeholder="Senha" value={this.state.senha} onChange={this.handleSenhaChange} name='senha'/>
			    		<span class="icon is-small is-left">
			      			<i class="fas fa-lock"></i>
			    		</span>
					</div>
				</div>
				<div class="field is-grouped">
			  		<div class="control">
			    		<input type="submit" class="button is-link" value="Entrar" />
			  		</div>
					<div class="control">
			    		<button class="button is-text" onClick={this.handleCriar}>Criar conta</button>
			  		</div>
				</div>
				<label class="label"></label>
			</form>
			);
	}
}

ReactDOM.render(<Form />, document.getElementById('formulario'));