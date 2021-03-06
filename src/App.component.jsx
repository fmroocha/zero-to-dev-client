import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
import Home from "./pages/home/home.component";
import Login from "./pages/login/login.component";
import SignUp from "./pages/sign-up/sign-up.component";
import Authenticated from "./components/authenticated/authenticated.component";
import UserProfile from "./components/user-profile/user-profile.component";
import SideBar from "./components/sidebar/sidebar.component";

import { fetchTopicsStart } from "./redux/topic/topic.actions";
import { checkUserSessionStart } from "./redux/user/user.actions";

import Alert from "./components/alert/alert.component";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTopicsStart());
		dispatch(checkUserSessionStart());
	}, [dispatch]);
	return (
		<Router>
			<Alert>
				<div className="app">
					<Navbar />
					<SideBar />
					<Switch>
						<Redirect exact from="/" to="/home" />
						<Route path="/home" component={Home} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/sign-up" component={SignUp} />
						<Authenticated>
							<Route exact path="/my-profile" component={UserProfile} />
						</Authenticated>
					</Switch>
				</div>
			</Alert>
		</Router>
	);
}

export default App;
