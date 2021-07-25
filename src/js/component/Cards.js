/* eslint-disable no-console */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { yellow, grey, blue } from "@material-ui/core/colors";
import { Context } from "../store/appContext";

const ColorButton = withStyles(theme => ({
	root: {
		color: theme.palette.getContrastText(yellow[500]),
		backgroundColor: grey[50],
		"&:hover": {
			backgroundColor: yellow[700]
		},
		border: `1px solid ${yellow[700]}`
	}
}))(Button);

const ColorButton1 = withStyles(theme => ({
	root: {
		color: theme.palette.getContrastText(yellow[500]),
		backgroundColor: grey[50],
		"&:hover": {
			backgroundColor: blue[700]
		},
		border: `1px solid ${blue[700]}`
	}
}))(Button);

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		minWidth: 345
	}
});

const Cards = props => {
	const { element, image, isPeople } = props;
	const classes = useStyles();
	const { store, actions } = useContext(Context);

	const addToFavorites = favorite => {
		actions.setFavorites(favorite);
	};

	const includeElementInFavorites = currentElement => {
		return store.favorites.includes(currentElement);
	};

	return (
		<>
			<div>
				<Card className={classes.root}>
					<CardActionArea>
						<CardMedia component="img" alt="" height="140" image={image} title="" />
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								{element.name}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								Description
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Grid container spacing={4}>
							<Grid container item xs={8}>
								<Link
									to={
										isPeople
											? `/persons-details?uid=${element.uid}`
											: `/planets-details?uid=${element.uid}`
									}>
									<ColorButton1 variant="contained" color="primary" className={classes.margin}>
										Learn more!
									</ColorButton1>
								</Link>
							</Grid>
							<Grid container item xs={4}>
								<ColorButton
									variant="contained"
									color="primary"
									className={classes.margin}
									onClick={() => addToFavorites(element)}>
									{
										<i
											className={
												includeElementInFavorites(element) ? "fas fa-heart" : "far fa-heart p-1"
											}></i>
									}
								</ColorButton>
							</Grid>
						</Grid>
					</CardActions>
				</Card>
			</div>
		</>
	);
};

Cards.defaultProps = {
	isPeople: false
};

Cards.propTypes = {
	element: PropTypes.object,
	image: PropTypes.string,
	isPeople: PropTypes.bool
};

export default Cards;
