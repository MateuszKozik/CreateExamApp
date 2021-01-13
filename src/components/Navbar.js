import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { logout } from "../actions/userActions";
import { Link } from "react-router-dom";
import { Home } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

export default function Navbar() {
	const handleLogout = () => {
		logout();
	};

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
						onClick={() => {
							window.location.href = "/home";
						}}
					>
						<Home />
					</IconButton>
					<Typography className={classes.title}>
						<Link
							to="/courses"
							style={{
								fontWeight: 700,
								textDecoration: "none",
								color: "#fff",
								marginLeft: 5
							}}
						>
							{" "}
							Przedmioty
						</Link>
					</Typography>
					<Button onClick={handleLogout} color="inherit">
						Wyloguj
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
