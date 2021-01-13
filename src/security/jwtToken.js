export const getJWTToken = () => {
	return localStorage.getItem("jwtToken");
};

export const setJWTToken = (token) => {
	if (token) {
		localStorage.setItem("jwtToken", token);
	} else {
		localStorage.removeItem("jwtToken");
	}
};
