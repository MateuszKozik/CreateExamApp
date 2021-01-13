import React, { Component } from "react";
import { createCourse } from "../actions/courseActions";
import { TextField, Grid, Typography, Button } from "@material-ui/core";
import Navbar from "./Navbar";

class AddCourse extends Component {
	state = {
		title: "",
		description: ""
	};

	handleSaveButtonClick = () => {
		const { title, description } = this.state;
		const course = { title, description };
		createCourse(course).then((res) => {
			if (res && res.status === 200) {
				this.props.history.push("/courses");
			}
		});
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<>
				<Navbar />
				<Grid container style={{ textAlign: "center", marginTop: 10 }}>
					<Grid item xs={12}>
						<Typography variant="h3">Dodaj kurs</Typography>
					</Grid>

					<Grid item xs={12} style={{ marginTop: 20 }}>
						<TextField
							onChange={(e) => this.handleChange(e)}
							placeholder="Wpisz tytuł"
							id="title"
							name="title"
							label="Tytuł"
							variant="outlined"
						/>
					</Grid>

					<Grid item xs={12} style={{ marginTop: 20 }}>
						<TextField
							onChange={(e) => this.handleChange(e)}
							id="description"
							name="description"
							label="Opis"
							placeholder="Wpisz opis"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12} style={{ marginTop: 20 }}>
						<Button
							variant="contained"
							onClick={this.handleSaveButtonClick}
							color="primary"
						>
							Zapisz
						</Button>
					</Grid>
				</Grid>
			</>
		);
	}
}

export default AddCourse;
