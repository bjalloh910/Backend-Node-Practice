const express = require("express"); // import express 
const authorRouter = require("./routes/authorRouter");
const path = require("node:path");


const app = express(); // initialize the app variable (app is our sever)

// Mount the router on the /authors path
app.use("/authors", authorRouter);
app.use(express.urlencoded({extended: true}));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
})


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const messageRouter = require("./routes/messages");
app.use("/", messageRouter )

