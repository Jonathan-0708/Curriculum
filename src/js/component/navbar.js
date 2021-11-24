import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: -1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

export const Navbar = () => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<div className={classes.root}>
			<Grid item xs={12} sm container>
				<AppBar position="static" style={{ background: "black", width: "99.9%" }}>
					<Grid item>
						<Toolbar>
							<Typography variant="h6" className={classes.title}>
								<Link to="/">
									<p className="letra pl-5 ">Biografía</p>
								</Link>
							</Typography>
							<Typography variant="h6" className={classes.title}>
								<Button onClick={handleClick} style={{ background: "none" }}>
									<p className="letra">Académico</p>
								</Button>
								<Menu
									id="simple-menu"
									anchorEl={anchorEl}
									keepMounted
									open={Boolean(anchorEl)}
									onClose={handleClose}>
									<MenuItem onClick={handleClose}>
										<Link to="/Ingenieria">
											<p className="letra-negra">Ingeniería</p>
										</Link>
									</MenuItem>
									<MenuItem onClick={handleClose}>
										<Link to="/AAPG">
											<p className="letra-negra">AAPG</p>
										</Link>
									</MenuItem>
								</Menu>
							</Typography>
							<Typography variant="h6" className={classes.title}>
								<Link to="/trabajos">
									<p className="letra">Experiencia Laboral</p>
								</Link>
							</Typography>
							<Typography variant="h6" className={classes.title}>
								<Link to="/certificados">
									<p className="letra">Certificados Obtenidos</p>
								</Link>
							</Typography>
						</Toolbar>
					</Grid>
				</AppBar>
			</Grid>
		</div>
	);
};
