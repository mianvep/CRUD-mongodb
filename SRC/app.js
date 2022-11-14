const express = require("express");
const mongoose = require("mongoose");
const { port, db } = require("./config");
const url = `mongodb://${db.host}/${db.dbName}`;
const userRouter = require("./users/router");

const app = express();

app.use(express.json());

mongoose
	.connect(url, {})
	.then(() => console.log("Database is conected"))
	.catch((e) => console.log("El error es: " + e));

app.use("/api", userRouter);

app.get("/", (req, res) => {
	res.status(200).json({ message: "server is ok" });
});

app.listen(port, () => {
	console.log(`Serer listening in port ${port}`);
});
