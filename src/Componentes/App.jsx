import { LoginPage } from './LoginPage.jsx';
class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<section class="hero is-fullheight">
				<div class="hero-body">
					<div class="container has-text-centered">
						<LoginPage />
					</div>
				</div>
			</section>
		);
	}
}
ReactDOM.render(<App />, document.getElementById('app'));