class Api {
	static token = localStorage.getItem("@kenzie-blog:token");
	static userId = localStorage.getItem("@kenzie-blog:userId");

	static base_url = "https://blog-m2.herokuapp.com";
	static headers = {
		"Content-Type": "application/json",
		Authorization: `Bearer ${this.token}`,
	};

	static async createUser(infoUser) {
		return await fetch(this.base_url + "/users/register", {
			method: "POST",
			headers: this.headers,
			body: JSON.stringify(infoUser),
		})
			.then((res) => res.json())
			.catch(() => false);
	}

	static async loginUser(infoUser) {
		return await fetch(this.base_url + "/users/login", {
			method: "POST",
			headers: this.headers,
			body: JSON.stringify(infoUser),
		})
			.then((res) => res.json())
			.then((res) => {
				localStorage.setItem("@kenzie-blog:token", res.token);
				localStorage.setItem("@kenzie-blog:userId", res.userId);
				return res;
			})
			.catch((error) => error);
	}

	static async getInfoUser() {
		return await fetch(`${this.base_url}/users/${this.userId}`, {
			method: "GET",
			headers: this.headers,
		})
			.then((res) => res.json())
			.then((res) => {
				return res;
			})
			.catch((error) => error);
	}

	static async createPost(textPost) {
		return await fetch(`${this.base_url}/posts`, {
			method: "POST",
			headers: this.headers,
			body: JSON.stringify(textPost),
		})
			.then((res) => res.json())
			.then((res) => res)
			.catch((error) => error);
	}

	static async changePost(textPost, id) {
		return await fetch(`${this.base_url}/posts/${id}`, {
			method: "PATCH",
			headers: this.headers,
			body: JSON.stringify(textPost),
		})
			.then((res) => res.json())
			.then((data) => data)
			.catch((error) => error);
	}

	static async deletePost(id) {
		return await fetch(`${this.base_url}/posts/${id}`, {
			method: "DELETE",
			headers: this.headers,
		})
			.then((res) => res.json())
			.then((res) => res)
			.catch((error) => error);
	}

	static async getAllPosts(pageNumber) {
		return await fetch(`${this.base_url}/posts?page=${pageNumber}`, {
			method: "GET",
			headers: this.headers,
		})
			.then((res) => res.json())
			.then((data) => data)
			.catch((error) => error);
	}

	static async getPostById(id) {
		return await fetch(`${this.base_url}/posts/${id}`, {
			method: "GET",
			headers: this.headers,
		})
			.then((res) => res.json())
			.then((data) => data)
			.catch((error) => error);
	}
}

export { Api };
