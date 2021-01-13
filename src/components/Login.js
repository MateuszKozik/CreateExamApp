import React, { Component } from "react";
import { TextField, Grid, Typography, Button } from "@material-ui/core";
import { login } from "../actions/userActions";
import { Link } from "react-router-dom";
class Login extends Component {
	state = {
		email: "",
		password: ""
	};

	handleLoginButtonClick = () => {
		const { email, password } = this.state;
		const user = { email, password };
		login(user).then((res) => {
			console.log(res);
			if (res && res.status === 200) {
				window.location.href = "/home";
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
					<Typography variant="h3">Logowanie</Typography>
				</Grid>

				<Grid item xs={12} style={{ marginTop: 20 }}>
					<TextField
						onChange={(e) => this.handleChange(e)}
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
						onChange={(e) => this.handleChange(e)}
						type="password"
						id="password"
						name="password"
						label="Hasło"
						placeholder="Wpisz hasło"
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={12} style={{ marginTop: 20 }}>
					<Button
						variant="contained"
						onClick={this.handleLoginButtonClick}
						color="primary"
					>
						Zaloguj
					</Button>
				</Grid>
				<Grid item xs={12} style={{ marginTop: 20 }}>
					<Typography>
						Nie masz jeszcze konta?
						<Link
							style={{
								fontWeight: 700,
								textDecoration: "none",
								color: "#000",
								marginLeft: 5
							}}
							to="/register"
						>
							Zarejestruj się
						</Link>
					</Typography>
				</Grid>
			</Grid>
		);
	}
}

export default Login;
