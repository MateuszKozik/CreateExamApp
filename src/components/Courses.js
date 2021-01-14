import { Button, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import Navbar from "./Navbar";
import { getCourses, deleteCourse } from "../actions/courseActions";
import {
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Tooltip
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";

class Courses extends Component {
	state = {
		courses: ""
	};

	componentDidMount() {
		getCourses().then((res) => {
			this.setState({ courses: res.data.records });
		});
	}

	render() {
		const { courses } = this.state;
		return (
			<>
				<Navbar />
				<Grid
					container
					spacing={1}
					style={{ textAlign: "center", marginTop: 10 }}
				>
					<Grid item xs={12}>
						<Typography variant="h5">Przedmioty</Typography>
					</Grid>
					<Grid item xs={12} style={{ textAlign: "left", marginLeft: 10 }}>
						<Button
							variant="contained"
							color="primary"
							onClick={() => this.props.history.push("/addCourse")}
						>
							Dodaj przedmiot
						</Button>
					</Grid>
					<Grid item xs={12}>
						<TableContainer>
							<Table>
								<TableHead>
									<TableRow>
										<TableCell>
											<Typography>
												<b>Nazwa przedmiotu</b>
											</Typography>
										</TableCell>
										<TableCell>
											<Typography align="center">
												<b>Opis</b>
											</Typography>
										</TableCell>
										<TableCell>
											<Typography align="center">
												<b>Egzaminy</b>
											</Typography>
										</TableCell>
										<TableCell>
											<Typography align="center">
												<b>Akcje</b>
											</Typography>
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{courses
										? courses.map((course, index) => {
												return (
													<TableRow key={index}>
														<TableCell>
															<Typography>
																<Link
																	to={`/exams/${course.id}`}
																	style={{
																		color: "#000"
																	}}
																>
																	{course.title}{" "}
																</Link>{" "}
															</Typography>
														</TableCell>
														<TableCell>
															<Typography align="center">
																{course.description}
															</Typography>
														</TableCell>
														<TableCell>
															{course.exams &&
																course.exams.map((exam, i) => {
																	return (
																		<div
																			style={{ textAlign: "center" }}
																			key={i}
																		>
																			<Typography>
																				{exam.description}
																			</Typography>
																			<Typography>
																				<b>Status: </b>
																				{exam.isPassed === false
																					? "Niezdany"
																					: "Zdany"}
																			</Typography>
																		</div>
																	);
																})}
														</TableCell>
														<TableCell align="center">
															<Tooltip title="Edytuj">
																<IconButton
																	color="primary"
																	onClick={() =>
																		this.props.history.push(
																			`/editCourse/${course.id}`
																		)
																	}
																>
																	<EditIcon />
																</IconButton>
															</Tooltip>
															<Tooltip title="Usuń">
																<IconButton
																	color="secondary"
																	onClick={() => {
																		deleteCourse(course.id);
																	}}
																>
																	<DeleteIcon />
																</IconButton>
															</Tooltip>
														</TableCell>
													</TableRow>
												);
										  })
										: null}
								</TableBody>
							</Table>
						</TableContainer>
					</Grid>
				</Grid>
			</>
		);
	}
}

export default Courses;
