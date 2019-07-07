const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const process = require("process");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: true,
    port: 465,
    auth: {
        user: process.env["mailUser"],
        pass: process.env["mailPass"]
    }
});

app.get("/", function (req, res) {
    res.render("home");
})

app.post("/form", function (req, res) {
    let firstName = req.body.peopleName;
    let lastName = req.body.peopleLastName;
    let email = req.body.email;
    let textArea = req.body.imageTextArea;


    let mailOptions = {
        from: "serranodgrafico@gmail.com",
        to: "serranodgrafico@gmail.com",
        subject: "Website Lead",
        text: "Nombre: " + firstName + " " + lastName + " " + email + " " + textArea,
        html: "<h2>Nombre: " + firstName + " " + lastName + " </h2>" + "<br />" + "<h2> Email: " + email + "</h2>" + "<p> <b>Mensaje:</b> <br>" + textArea + "</p>"
    };
    console.log(mailOptions);


    transporter.sendMail(mailOptions, function (error, response) {
        console.log(response.response, error);
    });

    res.render("home");
});

app.get("/nosotros", function (req, res) {
    res.render("nosotros");
});


app.listen(3000, function () {
    console.log("Server started on port 3000")
});