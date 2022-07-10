import Login from "../controllers/userLogin.controllers.js";

const formLogin = document.querySelector(".login__form");
formLogin.addEventListener("submit", (event) => {
	event.preventDefault();
	Login.loginUser();
});
