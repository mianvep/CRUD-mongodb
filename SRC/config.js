require("dotenv").config();

const config = {
	port: process.env.PORT || 3000,
	nodeEnv: process.env.NODE_ENV || "development",
	db: {
		host: process.env.DB_HOST || "localhost",
		dbName: process.env.DB_NAME,
	},
};
module.exports = config;
