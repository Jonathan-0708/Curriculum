import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bar mb-3 container-fluid">
			<div className="container">
				<div className="row justify-content-start">
					<div className="col-4">
						<Link to="/">
							<img
								className="imagen"
								src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"
								width="50px"
							/>
						</Link>
					</div>
				</div>
				<div className="row justify-content-end ">
					<div className="col ">
						<Dropdown />
					</div>
				</div>
			</div>
		</nav>
	);
};
