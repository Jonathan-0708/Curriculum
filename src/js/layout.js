import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import Academico from "./component/Academico";
import Aapg from "./component/Aapg";
import Trabajos from "./component/Trabajos";
import Certificados from "./component/Certificados";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column fondo">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/ingenieria">
							<Academico />
						</Route>
						<Route exact path="/aapg">
							<Aapg />
						</Route>
						<Route exact path="/trabajos">
							<Trabajos />
						</Route>

						<Route exact path="/certificados">
							<Certificados />
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
