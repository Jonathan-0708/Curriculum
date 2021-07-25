/* eslint-disable no-console */
import React, { useContext } from "react";
import Cards from "../component/cards";
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
		<div className="container text-primary p-5">
			<h2>Characters</h2>
			<div className={classes.root}>
				{store.people.map((people, index) => {
					return (
						<div key={`people-card-${index}`} className={classes.cardContainer}>
							<Cards
								element={people}
								image={
									"https://estaticos-cdn.elperiodico.com/clip/6ab0bc3e-09ea-47ca-8240-8fddd9668310_alta-libre-aspect-ratio_default_0.jpg"
								}
								isPeople
							/>
						</div>
					);
				})}
			</div>

			<h2 className="pt-3">Planets</h2>
			<div className={classes.root}>
				{store.planets.map((planets, index) => {
					return (
						<div key={`planets-card-${index}`} className={classes.cardContainer}>
							<Cards
								element={planets}
								image={"https://i.pinimg.com/originals/ee/1f/11/ee1f11580848b0daf795208a9b43e56f.jpg"}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};
