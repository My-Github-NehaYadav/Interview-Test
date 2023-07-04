const express = require('express');
const app = express();
const db = require("./db");

app.use(express.json());

app.post("/create-user", async (req, res) => {
    await db.create(req.body);
    res.send({ message: 'new user created successfully !', code: 200 });
});

app.get("/get-users", async (req, res) => {
    let users = await db.find();
    res.send(users)
})

app.listen(4000, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('server is running..........')
    }
})