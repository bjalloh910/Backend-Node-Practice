// this handles the logic of sending the data 
const asyncHandler = require("express-async-handler");
const db = require("../db");

//asyncHandler is just a helper so we don’t have to write try/catch — it automatically catches errors and passes them to Express.
const getAuthorById = asyncHandler(async (req, res) => {
  const { authorId } = req.params; // gets the authorId from the URL through (req.params)

  const author = await db.getAuthorById(Number(authorId)); //calls the getAuthorById() function from db.js to find the matching author 

  if (!author) {
    res.status(404).send("Author not found");
    return;
  }

  res.send(`Author Name: ${author.name}`);
});


module.exports = { getAuthorById };
  
