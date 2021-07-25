/* eslint-disable no-console */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log("hola");
	return <div>HAAAA</div>;
};

Single.propTypes = {
	match: PropTypes.object
};
