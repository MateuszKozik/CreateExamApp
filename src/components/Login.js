import React, { Component } from "react";
import { TextField, Grid, Typography, Button } from "@material-ui/core";
class Login extends Component {
	render() {
		return (
			<Grid container style={{ textAlign: "center", marginTop: 10 }}>
				<Grid item xs={12}>
					<Typography variant="h3">Logowanie</Typography>
				</Grid>

				<Grid item xs={12} style={{ marginTop: 20 }}>
					<TextField
						placeholder="Wpisz email"
						id="email"
						name="email"
						type="email"
						label="Email"
						variant="outlined"
					/>
				</Grid>

				<Grid item xs={12} style={{ marginTop: 20 }}>
					<TextField
						type="password"
						id="password"
						name="password"
						label="Hasło"
						placeholder="Wpisz hasło"
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={12} style={{ marginTop: 20 }}>
					<Button variant="contained" color="primary">
						Zaloguj
					</Button>
				</Grid>
			</Grid>
		);
	}
}

export default Login;
