import axios from "axios";

export async function signIn(data) {
	const url = `https://coding-test-voyant.onrender.com/api/auth`;
	const body = {
		user: data.user,
		password: data.password,
	};
	const response = await axios.post(url, body)
	return response;
}