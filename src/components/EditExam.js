import React, { Component } from "react";
import Navbar from "./Navbar";
import { TextField, Grid, Typography, Button } from "@material-ui/core";
import { updateExam } from "../actions/examActions";

class EditExam extends Component {
	state = {
		description: ""
	};

	handleSaveButtonClick = () => {
		const { description } = this.state;
		const { courseId } = this.props.match.params;
		const id = this.props.match.params.examId;
		const updatedExam = { description, courseId, id };
		updateExam(updatedExam).then((res) => {
			if (res && res.status === 200) {
				this.props.history.push(`/exams/${courseId}`);
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
						<Typography variant="h3">Aktualizuj egzamin</Typography>
					</Grid>
					<Grid item xs={12} style={{ marginTop: 20 }}>
						<TextField
							onChange={(e) => this.handleChange(e)}
							id="description"
							name="description"
							label="Nazwa egzaminu"
							placeholder="Wpisz nazwę"
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
export default EditExam;
