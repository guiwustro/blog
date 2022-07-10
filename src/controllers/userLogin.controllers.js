import { Api } from "./api.controllers.js";
import { UserLogin } from "../models/userLogin.js";
import { Modal } from "../models/modal.js";
class Login {
	static getInfoLogin() {
		const email = document.getElementsByName("email")[0].value;
		const password = document.getElementsByName("password")[0].value;
		const dataUserLogin = new UserLogin(email, password);
		return dataUserLogin;
	}

	static async loginUser() {
		const dataUserLogin = Login.getInfoLogin();
		const verifyUser = await Api.loginUser(dataUserLogin);
		if (verifyUser.message == "Invalid email or password") {
			Modal.createEventModal(
				"Senha ou e-mail incorreto",
				"O email ou a senha que você inseriu está incorreto."
			);
		} else if (verifyUser.message == "User not found") {
			Modal.createEventModal(
				"Usuário não encontrado",
				"O email que você inseriu não está conectado a uma conta."
			);
		} else {
			window.location.href = "../src/pages/blog.html";
		}
	}
}
export default Login;
