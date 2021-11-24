/* eslint-disable no-console */
import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		margin: "auto",
		maxWidth: 1500
	},
	image: {
		width: "100%",
		height: "100%"
	},
	img: {
		margin: "auto",
		display: "block",
		maxWidth: "100%",
		maxHeight: "100%"
	}
}));

const Cards = props => {
	const { titulo } = props;
	const classes = useStyles();
	const { store, actions } = useContext(Context);

	return (
		<>
			<div>
				<Paper className={classes.paper}>
					<Grid container spacing={2}>
						<Grid item>
							<ButtonBase className={classes.image}>
								<img
									className={classes.img}
									alt="complex"
									src="https://i.postimg.cc/k4FGpKw7/IMG-20210329-120239628-PORTRAIT.jpg"
								/>
							</ButtonBase>
						</Grid>
						<Grid item xs={12} sm container>
							<Grid item xs container direction="column" spacing={2}>
								<Grid item xs>
									<h2 className="letra-negra ">{titulo}</h2>
									<Typography variant="subtitle1">
										Estudiante de Ingeniería Geológica Universidad de Los Andes
									</Typography>

									<Typography variant="subtitle1">
										Consejero Estudiantil Escuela de Ingeniería Geológica ULA
									</Typography>
									<Typography variant="subtitle1">Presidente Capítulo AAPG ULA</Typography>
									<Typography variant="subtitle1">Desarrollador Full Stack </Typography>
									<Typography variant="subtitle1" className="p-3">
										<i className="fas fa-birthday-cake icono p-2"></i>
										<i className="fas icono">07/08/1996</i>
									</Typography>
									<Typography variant="subtitle1" className="p-3">
										<i className="fas fa-mobile-alt icono p-2"></i>
										<i className="fas icono">0414-730-6638</i>
									</Typography>
									<Typography variant="subtitle1" className="p-3">
										<i className="fas fa-envelope icono p-2"></i>
										<i className="fas icono">jonathandc0708@gmail.com</i>
									</Typography>
									<Typography variant="subtitle1" className="p-3">
										<a href="https://www.linkedin.com/in/jonathan-diaz-c-a66255159/" className="a">
											<i className="fab fa-linkedin icono p-2"></i>
											<i className="fas icono">Jonathan Diaz C</i>
										</a>
									</Typography>
									<Typography variant="subtitle1" className="p-3">
										<a href="https://www.instagram.com/jojodiazc/" className="a">
											<i className="fab fa-instagram icono p-2"></i>
											<i className="fas icono">Jojodiazc</i>
										</a>
									</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Paper>
			</div>
		</>
	);
};
Cards.propTypes = {
	image: PropTypes.string,
	titulo: PropTypes.string
};
export default Cards;
