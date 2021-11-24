/* eslint-disable no-console */
import React, { useContext } from "react";
import Cards from "../component/Cards";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		display: "inline-flex",
		overflowX: "scroll",
		maxWidth: "100%",
		paddingBottom: "20px"
	},
	cardContainer: {
		paddingRight: "40px"
	}
});

export const Home = () => {
	const classes = useStyles();
	const { store } = useContext(Context);

	return (
		<div className="text-primary p-5">
			<Cards titulo="Jonathan Díaz" />
		</div>
	);
};
