const controllers = require("./controllers");

const getAllUsers = (req, res) => {
	controllers
		.getAllUsers()
		.then((response) => res.status(200).json(response))
		.catch((e) => res.status(400).json({ msg: e.msg }));
};

const createUser = (req, res) => {
	const { firstName, lastName, email, password, country } = req.body;
	if (firstName && lastName && email && password && country) {
		controllers
			.createUser({ firstName, lastName, email, password, country })
			.then((response) => res.status(201).json(response))
			.catch((e) => res.status(400).json({ msg: e.msg }));
	} else {
		res.status(400).json({
			msg: "all field must be completed",
			field: {
				firstName: "string",
				lastName: "string",
				email: "string",
				password: "string",
				country: "string",
			},
		});
	}
};

module.exports = {
	getAllUsers,
	createUser,
};
