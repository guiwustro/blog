class Api {
	static token = "";

	static async register(infoUser) {
		return await fetch("https://blog-m2.herokuapp.com/users/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringfy(infoUser),
		});
	}

	static async login(infoUser) {
		const token = await fetch("https://blog-m2.herokuapp.com/users/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringfy(infoUser),
		})
			.then((res) => res.json())
			.then((res) => res)
			.catch((error) => error);

		Api.token = token;

		return token;
	}

	static async getInfoUser() {
		const infoUser = await fetch(
			`https://blog-m2.herokuapp.com/users/${Api.token.id}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${Api.token.token}`,
				},
			}
		)
			.then((res) => res.json())
			.then((data) => data)
			.catch((error) => error);

		return infoUser;
	}
}

export { Api };
