import express from "express";

const app = express();
app.use(express.json());
const users = [];

app.get("/", (req, res) => {
	res.send(users);
});

app.post("/register", (req, res) => {
	const user = req.body;
	users.push(user);
	res.send("users has been register");
});

app.post("/login", (req, res) => {
	const user = req.body;
	let isFound = false;

	for (let i = 0; i < users.length; i++) {
		if (user.email == users[i].email && user.password == users[i].password) {
			isFound = true;
		}
	}
	if (isFound == true) {
		res.send("login");
	} else {
		res.send("user not found");
	}
});

app.listen(3000);
