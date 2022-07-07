import userLogin from "../controllers/userLogin.controllers.js";

const formLogin = document.querySelector(".login__form");
formLogin.addEventListener("submit", (event) => {
	event.preventDefault();
	userLogin.loginUser();
});
