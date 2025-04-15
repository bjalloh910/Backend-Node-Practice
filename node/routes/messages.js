// This file connects the URL to the controller:
const express = require('express');
const router = express.Router();
module.exports = router;


const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

// this GET will display all the messages on the index page
router.get("/", (req, res) => {
    console.log("Hitting GET / route");
    console.log("Messages:", messages);
    res.render("index", { messages: messages });
});

// this GET will display the form
router.get("/new", (req, res) => {
    res.render("form");
})

// This POST will post the data from the form to the sever essentially handling form submission
router.post('/new', (req, res) => {
    const { user, text} = req.body;
    console.log(req.body);
    messages.push({text: text, user: user, added: new Date()});
    res.redirect("/") //this will send users back to index page after submitting
})