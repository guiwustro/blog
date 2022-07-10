import { User } from "../models/user.js";
import { UserLogin } from "../models/userLogin.js";
import { Api } from "../controllers/api.controllers.js";
import { Modal } from "../models/modal.js";

class Register {
	static getInfoForm() {
		const nome = document.getElementsByName("user")[0].value;
		const email = document.getElementsByName("email")[0].value;
		const picture = document.getElementsByName("picture")[0].value;
		const password = document.getElementsByName("password")[0].value;
		const dataUser = new User(nome, email, picture, password);
		return dataUser;
	}

	static async registerUser() {
		const dataUser = Register.getInfoForm();
		const response = await Api.createUser(dataUser);
		if (
			response.message ===
			"An user with the same username is already registered"
		) {
			Modal.createEventModal(
				"Nome de usuário já cadastrado",
				"O nome de usuário que você inseriu já está cadastrado."
			);
			return;
		} else if (
			response.message === "An user with the same email is already registered"
		) {
			Modal.createEventModal(
				"Email já cadastrado",
				"O email que você inseriu já está cadastrado."
			);
			return;
		}

		const userLoginInfo = new UserLogin(dataUser.email, dataUser.password);
		await Api.loginUser(userLoginInfo);
		window.location.href = "../pages/blog.html";
	}
}

export default Register;
