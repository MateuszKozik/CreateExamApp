import { Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import Navbar from "./Navbar";

class Home extends Component {
	render() {
		return (
			<>
				<Navbar />
				<Grid container style={{ textAlign: "center", marginTop: 10 }}>
					<Grid item xs={12}>
						<Typography variant="h5">Zostałeś pomyślnie zalogowany</Typography>
					</Grid>
				</Grid>
			</>
		);
	}
}

export default Home;
