import axios from "axios";
import setJWTToken from "../security/setJWTToken";

export const register = (user) => {
	axios.post("/api/Auth/Register", user).then(
		(response) => {
			return response;
		},
		(error) => {
			console.log(error);
		}
	);
};

export const login = async (user) => {
	try {
		const res = await axios.post("/api/Auth/Login", user);

		const token = res.data.message;

		// Set the token in the header
		setJWTToken(token);

		return res;
	} catch (error) {
		console.log(error);
	}
};

export const logout = () => {
	setJWTToken(false);
	window.location.href = "/";
};
