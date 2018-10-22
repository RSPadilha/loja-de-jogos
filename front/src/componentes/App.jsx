import React from 'react';
import LoginPage from './LoginPage.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<section className="hero is-fullheight">
				<div className="hero-body">
					<div className="container has-text-centered">
						<LoginPage />
					</div>
				</div>
			</section>
		);
	}
}
export default App;
