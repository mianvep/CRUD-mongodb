const User = require("../models/users.models");

const getAllUsers = async () => {
	const data = await User.find();
	return data;
};

const createUser = async (data) => {
	const newUser = await new User({
		firstName: data.firstName,
		lastName: data.lastName,
		email: data.email,
		password: data.password,
		country: data.country,
	});
	await newUser.save();
	return newUser;
};

module.exports = {
	getAllUsers,
	createUser,
};
