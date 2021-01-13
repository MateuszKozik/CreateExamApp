import { Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import Navbar from "./Navbar";
import { getCourses } from "../actions/courseActions";

class Courses extends Component {
	state = {
		courses: ""
	};

	componentDidMount() {
		getCourses().then((res) => {
			console.log(res.data.records);
			this.setState({ courses: res.data.records });
		});
	}

	render() {
		return (
			<>
				<Navbar />
				<Grid container style={{ textAlign: "center", marginTop: 10 }}>
					<Grid item xs={12}>
						<Typography variant="h5">Przedmioty</Typography>
					</Grid>
				</Grid>
			</>
		);
	}
}

export default Courses;
