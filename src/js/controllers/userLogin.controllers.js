import { Api } from "../Api.js";
import { UserLogin } from "../models/UserLogin.js";
import { Modal } from "../views/Modal.js";
class userLogin {
	static getInfoLogin() {
		const email = document.getElementsByName("email")[0].value;
		const password = document.getElementsByName("password")[0].value;
		const dataUserLogin = new UserLogin(email, password);
		return dataUserLogin;
	}

	static async loginUser() {
		const dataUserLogin = userLogin.getInfoLogin();
		const verifyUser = await Api.loginUser(dataUserLogin);
		console.log(verifyUser);
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
			window.location.href = "./../../../pages/blog.html";
		}
	}
}
export default userLogin;
