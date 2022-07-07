import { Api } from "../Api.js";
class Blog {
	static async headerInfoUser() {
		const userData = await Api.getInfoUser();
		const avatar = document.querySelector(".user__img");
		avatar.src = userData.avatarUrl;
		const userName = document.querySelector(".user__name");
		userName.innerText = userData.username;
	}

	static async createNewPost() {
		const postText = document.getElementsByName("post-text")[0].value;
		const objText = { content: postText };
		await Api.createPost(objText);
		//*Atualiza a página de acordo com o elemento inserido na API
		Blog.getAllPosts();
	}

	static createTemplatePost(dataPost) {
		const postList = document.querySelector(".post");
		const post = document.createElement("li");
		post.className = "post__item";
		post.id = `post-${dataPost.id}`;

		const figure = document.createElement("figure");
		figure.className = "post__img";

		const img = document.createElement("img");
		img.src = dataPost.user.avatarUrl;
		img.alt = "user-avatar";
		figure.appendChild(img);

		const username = document.createElement("h1");
		username.className = "post__user-name";
		username.innerText = dataPost.user.username;

		const postText = document.createElement("p");
		postText.className = "post__text";
		postText.innerText = dataPost.content;
		postText.id = `post-content-${dataPost.id}`;

		const buttonsDiv = document.createElement("div");
		buttonsDiv.className = "post__button";
		if (dataPost.user.id == Api.userId) {
			this.createButtonsPost(buttonsDiv, dataPost.id);
		}

		post.append(figure, username, postText, buttonsDiv);

		const postDate = document.createElement("span");
		postDate.className = "post__date";

		postDate.innerText = this.formataData(dataPost.createdAt);

		buttonsDiv.append(postDate);
		postList.appendChild(post);

		return postList;
	}

	static createButtonsPost(buttonsDiv, id) {
		const buttonEdit = document.createElement("button");
		buttonEdit.className = "button_edit";
		buttonEdit.innerText = "Editar";
		buttonEdit.id = "edit" + id;

		const buttonDelete = document.createElement("button");
		buttonDelete.className = "button_delete";
		buttonDelete.innerText = "Apagar";
		buttonDelete.id = "delete" + id;

		buttonsDiv.append(buttonEdit, buttonDelete);

		return buttonsDiv;
	}

	static async getAllPosts() {
		const posts = await Api.getAllPosts(1);
		const postList = document.querySelector(".post");
		postList.innerHTML = "";
		posts.data.forEach((post) => this.createTemplatePost(post));
	}

	static formataData(data) {
		// O retorno de dataPost.createAt é algo assim "2022-07-07T0002032023", por isso foi usado o número 10
		data = data
			.split("")
			.filter((_, i) => i < 10)
			.join("")
			.split("-");
		let ano = data[0];
		let mes = data[1];
		let dia = data[2];
		return `${dia}/${mes}/${ano}`;
	}

	static logoutBlog() {
		localStorage.removeItem("@kenzie-blog:token");
		localStorage.removeItem("@kenzie-blog:userId");
		window.location.href = "../../../index.html";
	}

	static async deletePost(event) {
		if (event.target.id.includes("delete")) {
			const id = event.target.id.match(/\d/g).join("");
			await Api.deletePost(id);
			Blog.getAllPosts();
		}
	}

	static async openPostToEdit(event) {
		if (event.target.id.includes("edit")) {
			const id = event.target.id.match(/\d/g).join("");

			const changeDivTest = document.getElementById(`post__changes-div-${id}`);
			if (changeDivTest != undefined) {
				return;
			}

			const postSelectedDOM = document.getElementById(`post-${id}`);
			const contentSelected = document.getElementById(`post-content-${id}`);

			const postSelected = await Api.getPostById(id);
			const postSelectedContent = postSelected.content;
			console.log(postSelectedContent);

			const changesDiv = document.createElement("div");
			changesDiv.className = "post__changes-div";
			changesDiv.id = `post__changes-div-${id}`;

			const form = document.createElement("form");
			form.className = "post__form-edit";

			const textarea = document.createElement("textarea");
			textarea.className = "post__textarea-edit";
			textarea.value = postSelectedContent;
			textarea.name = "new-content";
			textarea.id = `textarea-${id}`;

			const buttonSave = document.createElement("button");
			buttonSave.className = "post__button-save button";
			buttonSave.innerText = "Salvar alterações";
			form.append(textarea, buttonSave);

			const buttonCancel = document.createElement("button");
			buttonCancel.className = "post__button-cancel button";
			buttonCancel.innerText = "Cancelar";

			changesDiv.append(form, buttonCancel);
			postSelectedDOM.insertBefore(changesDiv, contentSelected);

			contentSelected.style.display = "none";

			form.addEventListener("submit", (event) => {
				event.preventDefault();
				Blog.editPost(event, id);
			});

			buttonCancel.addEventListener("click", (event) => {
				contentSelected.style.display = "block";
				changesDiv.remove();
			});

			await Api.changePost(content, id);
		}
	}

	static async editPost(event, id) {
		const newContent = document.getElementById(`textarea-${id}`).value;
		const contentObj = { content: newContent };
		await Api.changePost(contentObj, id);
		Blog.getAllPosts();
	}
}

export { Blog };
