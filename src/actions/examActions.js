import axios from "axios";
import { getJWTToken } from "../security/jwtToken";

export const getExams = async (courseId) => {
	try {
		const token = getJWTToken();

		const res = await axios.get(
			`/api/Exams/course=${courseId}?plan=${courseId}`,
			{
				headers: {
					Authorization: `Bearer ${token}`
				}
			}
		);

		return res;
	} catch (error) {
		console.log(error);
	}
};

export const createExam = async (exam) => {
	try {
		const token = getJWTToken();

		const res = await axios.post("/api/Exams", exam, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		return res;
	} catch (error) {
		console.log(error);
	}
};

export const updateExam = async (updatedExam) => {
	try {
		const token = getJWTToken();

		const res = await axios.put("/api/Exams", updatedExam, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		return res;
	} catch (error) {
		console.log(error);
	}
};

export const passExam = async (examId) => {
	try {
		const token = getJWTToken();

		const res = await axios.put(`/api/Exams/${examId}`, null, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		return res;
	} catch (error) {
		console.log(error);
	}
};

export const deleteExam = async (examId) => {
	try {
		const token = getJWTToken();

		const res = await axios.delete(`/api/Exams/${examId}`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		return res;
	} catch (error) {
		console.log(error);
	}
};
