const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

const courses = require("./data/courses.json")

app.get("/", (req, res) => {
    res.send("Welcome to my Educational server");
});

app.get("/courses", (req, res) => {
    res.send(courses);
});
app.get("/courses/:id", (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find((course) => course.id === id);
    res.send(selectedCourse)
});

app.listen(port, () => {
    console.log(`My server is running on port ${port}`);
})