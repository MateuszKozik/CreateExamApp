import React, { Component } from "react";
import Navbar from "./Navbar";
import { getExams, deleteExam, passExam } from "../actions/examActions";
import {
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Tooltip,
	Typography,
	Grid,
	Button
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

class Exams extends Component {
	state = {
		exams: ""
	};

	componentDidMount() {
		const { courseId } = this.props.match.params;
		getExams(courseId).then((res) => {
			if (res && res.status === 200) {
				this.setState({ exams: res.data.records });
			}
		});
	}

	render() {
		const { exams } = this.state;
		const { courseId } = this.props.match.params;
		return (
			<>
				<Navbar />
				<Grid
					container
					spacing={1}
					style={{ textAlign: "center", marginTop: 10 }}
				>
					<Grid item xs={12}>
						<Typography variant="h5">Egzaminy</Typography>
					</Grid>
					<Grid item xs={12} style={{ textAlign: "left", marginLeft: 10 }}>
						<Button
							variant="contained"
							color="primary"
							onClick={() =>
								this.props.history.push(`/exams/${courseId}/addExam`)
							}
						>
							Dodaj egzamin
						</Button>
					</Grid>
					<Grid item xs={12}>
						<TableContainer>
							<Table>
								<TableHead>
									<TableRow>
										<TableCell>
											<Typography>
												<b>Nazwa egzaminu</b>
											</Typography>
										</TableCell>
										<TableCell>
											<Typography align="center">
												<b>Status</b>
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
									{exams
										? exams.map((exam, index) => {
												return (
													<TableRow key={index}>
														<TableCell>
															<Typography>{exam.description}</Typography>
														</TableCell>
														<TableCell>
															<Typography align="center">
																{exam.isPassed === false ? "Niezdany" : "Zdany"}
															</Typography>
														</TableCell>
														<TableCell align="center">
															<Tooltip title="Zalicz egzamin">
																<IconButton
																	color="primary"
																	onClick={() => {
																		passExam(exam.id);
																	}}
																>
																	<CheckCircleIcon />
																</IconButton>
															</Tooltip>
															<Tooltip title="Edytuj">
																<IconButton
																	color="primary"
																	onClick={() => {
																		this.props.history.push(
																			`/exams/${courseId}/${exam.id}`
																		);
																	}}
																>
																	<EditIcon />
																</IconButton>
															</Tooltip>
															<Tooltip title="Usuń">
																<IconButton
																	color="secondary"
																	onClick={() => {
																		deleteExam(exam.id);
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

export default Exams;
