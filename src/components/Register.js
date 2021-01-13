import React, { Component } from "react";
import { TextField, Grid, Typography, Button } from "@material-ui/core";
import { register } from "../actions/userActions";

class Register extends Component {
	state = {
		email: "",
		name: "",
		indexNumber: "",
		password: "",
		confirmPassword: ""
	};

	handleRegisterButtonClick = () => {
		const { email, name, indexNumber, password, confirmPassword } = this.state;
		const user = { email, name, indexNumber, password, confirmPassword };
		register(user).then((res) => {
			if (res && res.status === 200) {
				window.location.href = "/login";
			}
		});
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

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
						onChange={(e) => this.handleChange(e)}
					/>
				</Grid>

				<Grid item xs={12} style={{ marginTop: 20 }}>
					<TextField
						placeholder="Wpisz imię"
						label="Imię"
						id="name"
						name="name"
						variant="outlined"
						onChange={(e) => this.handleChange(e)}
					/>
				</Grid>

				<Grid item xs={12} style={{ marginTop: 20 }}>
					<TextField
						placeholder="Wpisz numer indeksu"
						label="Numer indeksu"
						id="indexNumber"
						name="indexNumber"
						variant="outlined"
						onChange={(e) => this.handleChange(e)}
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
						onChange={(e) => this.handleChange(e)}
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
						onChange={(e) => this.handleChange(e)}
					/>
				</Grid>
				<Grid item xs={12} style={{ marginTop: 20 }}>
					<Button
						variant="contained"
						onClick={this.handleRegisterButtonClick}
						color="primary"
					>
						Zarejestruj
					</Button>
				</Grid>
			</Grid>
		);
	}
}

export default Register;
