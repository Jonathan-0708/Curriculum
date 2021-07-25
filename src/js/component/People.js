/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import "../../styles/demo.scss";
import PropTypes from "prop-types";
import queryString from "query-string";

const PERSONS_UID = "PERSONS_UID";
const urlBase = `https://www.swapi.tech/api/people/${PERSONS_UID}`;

export const People = () => {
	const [people, setPeople] = useState({});
	let currentPersonsUid = queryString.parse(location.search).uid;

	const getPeople = () => {
		fetch(urlBase.replace(PERSONS_UID, currentPersonsUid))
			.then(respuesta => respuesta.json())
			.then(data => setPeople(data.result));
	};
	useEffect(() => {
		getPeople();
	}, []);

	return (
		<>
			<div className="container-fluid ml-5 ">
				<div className="row">
					<div className="col-6 mt-2">
						<img
							src="https://estaticos-cdn.elperiodico.com/clip/6ab0bc3e-09ea-47ca-8240-8fddd9668310_alta-libre-aspect-ratio_default_0.jpg"
							width="400px"
						/>
					</div>
					<div className="col-6 text-light text-center">
						<div className="mt-2">
							<h1>{people.hasOwnProperty("properties") ? people.properties.name : ""}</h1>
						</div>
						<div className="mt-5 pt-5"> A person within the Star Wars universe</div>
					</div>
				</div>
			</div>

			<div className="col-12 text-light text-center border-top m-5">
				<div className="row mt-4 ">
					<div className="col-2 mt-4">
						<h5 className="col-12">Name:</h5>
						<div className="Col-12 mt-4">
							{people.hasOwnProperty("properties") ? people.properties.name : ""}
						</div>
					</div>

					<div className="col-2 mt-4">
						<h5 className="col-12">Birth Year:</h5>
						<div className="Col-12 mt-4">
							{people.hasOwnProperty("properties") ? people.properties.birth_year : ""}
						</div>
					</div>

					<div className="col-2 mt-4">
						<h5 className="col-12">Gender:</h5>
						<div className="Col-12 mt-4">
							{people.hasOwnProperty("properties") ? people.properties.gender : ""}
						</div>
					</div>

					<div className="col-2 mt-4">
						<h5 className="col-12">Height:</h5>
						<div className="Col-12 mt-4">
							{people.hasOwnProperty("properties") ? people.properties.height : ""}
						</div>
					</div>

					<div className="col-2 mt-4">
						<h5 className="col-12">Skin Color:</h5>
						<div className="Col-12 mt-4">
							{people.hasOwnProperty("properties") ? people.properties.skin_color : ""}
						</div>
					</div>

					<div className="col-2 mt-4">
						<h5 className="col-12">Eye Color:</h5>
						<div className="Col-12 mt-4">
							{people.hasOwnProperty("properties") ? people.properties.eye_color : ""}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

People.propTypes = {
	element: PropTypes.object,
	image: PropTypes.string
};
