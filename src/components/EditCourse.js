import React, { Component } from "react";
import { TextField, Grid, Typography, Button } from "@material-ui/core";
import Navbar from "./Navbar";
import { getCourse, updateCourse } from "../actions/courseActions";

export class EditCourse extends Component {
	state = {
		id: "",
		title: "",
		description: ""
	};

	componentDidMount() {
		const { courseId } = this.props.match.params;
		getCourse(courseId).then((res) => {
			if (res && res.status === 200) {
				const { id, title, description } = res.data.record;

				this.setState({
					id: id,
					title: title,
					description: description
				});
			}
		});
	}

	handleUpdateButtonClick = () => {
		const { id, title, description } = this.state;
		const course = { id, title, description };

		updateCourse(course).then((res) => {
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
						<Typography variant="h3">Aktualizuj kurs</Typography>
					</Grid>

					<Grid item xs={12} style={{ marginTop: 20 }}>
						<TextField
							onChange={(e) => this.handleChange(e)}
							placeholder="Wpisz tytuł"
							id="title"
							name="title"
							label="Tytuł"
							value={this.state.title || ""}
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
							value={this.state.description || ""}
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12} style={{ marginTop: 20 }}>
						<Button
							variant="contained"
							onClick={this.handleUpdateButtonClick}
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

export default EditCourse;
