import Register from "./../controllers/register.controllers.js";

const form = document.querySelector("#register-form");
form.addEventListener("submit", (event) => {
	event.preventDefault();
	Register.registerUser();
});
