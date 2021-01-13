import axios from "axios";
import { getJWTToken } from "../security/jwtToken";

export const getCourses = async () => {
	try {
		const token = getJWTToken();
		const res = await axios.get("/api/Course", {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		return res;
	} catch (error) {
		console.log(error);
	}
};

export const createCourse = async (course) => {
	try {
		var bodyFormData = new FormData();
		bodyFormData.append("title", course);
		const token = getJWTToken();
		const res = await axios.post("/api/Course", bodyFormData, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		return res;
	} catch (error) {
		console.log(error);
	}
};

export const updateCourse = async (updatedCourse) => {
	try {
		const token = getJWTToken();
		const res = await axios.put("/api/Course", updatedCourse, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		return res;
	} catch (error) {
		console.log(error);
	}
};

export const deleteCourse = async (courseId) => {
	try {
		const token = getJWTToken();
		const res = await axios.delete(`/api/Course/${courseId}`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		return res;
	} catch (error) {
		console.log(error);
	}
};