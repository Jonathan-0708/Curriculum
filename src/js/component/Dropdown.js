import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import Button from "@material-ui/core/Button";
import { Context } from "../store/appContext";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
	paper: {
		border: "1px solid",
		padding: theme.spacing(1),
		backgroundColor: theme.palette.background.paper
	},
	margin: {
		margin: theme.spacing(1)
	}
}));
const Dropdown = () => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = event => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popper" : undefined;
	const { store, actions } = useContext(Context);

	const removeFavorite = favoriteIndex => {
		actions.removeFavorite(favoriteIndex);
	};

	return (
		<div>
			<Button className="dropdown-toggle" type="button" variant="contained" color="primary" onClick={handleClick}>
				<div>Favorites</div>
				<div className="px-1 bg-danger mx-2">{store.favorites.length}</div>
			</Button>
			<Popper id={id} open={open} anchorEl={anchorEl}>
				<div className={classes.paper}>
					{store.favorites.length > 0 ? (
						<>
							{store.favorites.map((favorites, index) => {
								return (
									<div key={`favorites-${index}`}>
										<div className="container-fluid">
											<div className="row">
												<div className="col p-2">{favorites.name}</div>
												<div>
													<IconButton
														aria-label="delete"
														className={classes.margin}
														size="small"
														onClick={() => removeFavorite(index)}>
														<i className="col fas fa-trash-alt"></i>
													</IconButton>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</>
					) : (
						<div>Your Favorites</div>
					)}
				</div>
			</Popper>
		</div>
	);
};

export default Dropdown;
