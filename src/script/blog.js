import { Blog } from "../controllers/blog.controllers.js";

//Pega as infos da API e coloca no header
Blog.headerInfoUser();

//Pega as infos da API e cria os posts
Blog.getAllPosts();

const form = document.querySelector(".post__form");
form.addEventListener("submit", (event) => {
	event.preventDefault();
	Blog.createNewPost();
});

const logoutButton = document.querySelector(".button__logout");
logoutButton.addEventListener("click", Blog.logoutBlog);

const post = document.querySelector(".post");
post.addEventListener("click", Blog.deletePost);

post.addEventListener("click", Blog.openPostToEdit);
