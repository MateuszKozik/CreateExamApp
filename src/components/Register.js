import React, { Component } from "react";
import { TextField, Grid, Typography, Button } from "@material-ui/core";

class Register extends Component {
	render() {
		return (
			<Grid container style={{ textAlign: "center", marginTop: 10 }}>
				<Grid item xs={12}>
					<Typography variant="h3">Rejestracja</Typography>
				</Grid>
				<Grid item xs={12} style={{ marginTop: 20 }}>
					<TextField
						placeholder="Wpisz email"
						type="email"
						id="email"
						name="email"
						label="Email"
						variant="outlined"
					/>
				</Grid>

				<Grid item xs={12} style={{ marginTop: 20 }}>
					<TextField
						placeholder="Wpisz imię"
						label="Imię"
						id="name"
						name="name"
						variant="outlined"
					/>
				</Grid>

				<Grid item xs={12} style={{ marginTop: 20 }}>
					<TextField
						placeholder="Wpisz numer indeksu"
						label="Numer indeksu"
						id="indexNumber"
						name="indexNumber"
						variant="outlined"
					/>
				</Grid>

				<Grid item xs={12} style={{ marginTop: 20 }}>
					<TextField
						type="password"
						placeholder="Wpisz hasło"
						variant="outlined"
						label="Hasło"
						id="password"
						name="password"
					/>
				</Grid>

				<Grid item xs={12} style={{ marginTop: 20 }}>
					<TextField
						type="password"
						placeholder="Wpisz ponownie hasło"
						label="Potwierdzenie hasła"
						name="confirmPassword"
						id="confirmPassword"
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={12} style={{ marginTop: 20 }}>
					<Button variant="contained" color="primary">
						Zarejestruj
					</Button>
				</Grid>
			</Grid>
		);
	}
}

export default Register;
