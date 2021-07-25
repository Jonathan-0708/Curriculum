/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import "../../styles/demo.scss";
import PropTypes from "prop-types";
import queryString from "query-string";

const PLANETS_UID = "PLANETS_UID";
const urlBase = `https://www.swapi.tech/api/planets/${PLANETS_UID}`;

export const Planets = () => {
	const [planets, setPlanets] = useState({});
	let currentPlanetUid = queryString.parse(location.search).uid;

	const getPlanets = () => {
		fetch(urlBase.replace(PLANETS_UID, currentPlanetUid))
			.then(respuesta => respuesta.json())
			.then(data => setPlanets(data.result));
	};
	useEffect(() => {
		getPlanets();
	}, []);

	if (planets != null && planets != undefined) {
		return (
			<>
				<div className="container-fluid ml-5 ">
					<div className="row">
						<div className="col-6 mt-2">
							<img
								src="https://i.pinimg.com/originals/ee/1f/11/ee1f11580848b0daf795208a9b43e56f.jpg"
								width="300px"
							/>
						</div>
						<div className="col-6 text-light text-center">
							<div className="mt-2">
								<h1>{planets.hasOwnProperty("properties") ? planets.properties.name : ""}</h1>
							</div>
							<div className="mt-5 pt-5"> A planet</div>
						</div>
					</div>
				</div>

				<div className="col-12 text-light text-center border-top m-5">
					<div className="row mt-4 ">
						<div className="col-2 mt-4">
							<h5 className="col-12">Name:</h5>
							<div className="Col-12 mt-4">
								{planets.hasOwnProperty("properties") ? planets.properties.name : ""}
							</div>
						</div>

						<div className="col-2 mt-4">
							<h5 className="col-12">Climate:</h5>
							<div className="Col-12 mt-4">
								{planets.hasOwnProperty("properties") ? planets.properties.climate : ""}
							</div>
						</div>

						<div className="col-2 mt-4">
							<h5 className="col-12">Population:</h5>
							<div className="Col-12 mt-4">
								{planets.hasOwnProperty("properties") ? planets.properties.population : ""}
							</div>
						</div>

						<div className="col-2 mt-4">
							<h5 className="col-12">Orbital Period:</h5>
							<div className="Col-12 mt-4">
								{planets.hasOwnProperty("properties") ? planets.properties.orbital_period : ""}
							</div>
						</div>

						<div className="col-2 mt-4">
							<h5 className="col-12">Rotation Period:</h5>
							<div className="Col-12 mt-4">
								{planets.hasOwnProperty("properties") ? planets.properties.rotation_period : ""}
							</div>
						</div>

						<div className="col-2 mt-4">
							<h5 className="col-12">Diameter:</h5>
							<div className="Col-12 mt-4">
								{planets.hasOwnProperty("properties") ? planets.properties.diameter : ""}
							</div>
						</div>
					</div>
				</div>
			</>
		);
	} else {
		return null;
	}
};

Planets.propTypes = {
	element: PropTypes.object,
	image: PropTypes.string
};
