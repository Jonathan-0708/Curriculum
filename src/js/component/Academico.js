import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(5),
		margin: "auto",
		maxWidth: 1000
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

const Academico = props => {
	const { titulo } = props;
	const classes = useStyles();
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="p-5">
				<Paper className={classes.paper}>
					<Grid container spacing={3}>
						<Grid item>
							<ButtonBase className={classes.image}>
								<img
									className={classes.img}
									alt="complex"
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwzc2j7hqqqOLY33yeIllkxMzl23wLUNgesQ&usqp=CAU"
								/>
							</ButtonBase>
						</Grid>
						<Grid item xs={12} sm container>
							<Grid item xs container direction="column" spacing={2}>
								<Grid item xs>
									<h2 className="letra-negra ">Ámbito Académico</h2>
									<Typography variant="subtitle1" className="p-2">
										Actualmente cursa el 8vo semestre de Ingeniería Geológica (2014-Presente)
									</Typography>

									<Typography variant="subtitle1" className="p-2">
										Consejero Estudiantil Escuela de Ingeniería Geológica ULA
									</Typography>
									<Typography variant="subtitle1" className="p-2">
										Preparador de materias tales como, Resistencia de Materiales, Mecánica de
										fluidos, Mecánica de suelos, entre otras.
									</Typography>
									<Typography variant="subtitle1" className="p-2">
										Reconocimiento de alto rendimiento en materias tales como Geología Física,
										Mineralogía, Resistencia de Materiales, Mecánica de Fluidos, Petrología,
										Geología Estructural, Mecánica de los suelos, Sedimentología, Estratigrafía,
										entre otras.
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
Academico.propTypes = {
	image: PropTypes.string,
	titulo: PropTypes.string
};
export default Academico;
