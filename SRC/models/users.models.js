const { model, Schema } = require("mongoose");

const UserSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true,
			trim: true,
		},
		lastName: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		country: {
			type: String,
		},
	},
	{ versionKey: false }
);

const User = new model("User", UserSchema);

module.exports = User;
