import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginPage from './LoginPage.jsx';
import RegisterPage from './RegisterPage.jsx';
import Homepage from './Homepage.jsx';
import EditInfo from './EditInfo.jsx';

// function PrivateRoute({component: Component}){
// 	return (
// 		<Route
// 	);
// };
class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Router>
				<section className="hero is-fullheight">
				{/* PrivateRoute*/}
				<Route path="/homepage" component={Homepage} />
				<Route path="/editar" component={EditInfo} />
					<div className="hero-body">
						<div className="container has-text-centered">
							<Route exact path="/" component={LoginPage} />
							<Route path="/register" component={RegisterPage} />
						</div>
					</div>
				</section>
			</Router>
		);
	}
}
export default hot(module)(App);