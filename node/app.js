const express = require("express"); // import express 
const authorRouter = require("./routes/authorRouter");

const app = express(); // initialize the app variable (app is our sever)

// Mount the router on the /authors path
app.use("/authors", authorRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
})
