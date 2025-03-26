// This file connects the URL to the controller:

const { Router } = require("express");
const { getAuthorById } = require('../controllers/authorController');

const authorRouter = Router();

// It creates a route: GET /authors/:authorId
authorRouter.get("/:authorId", getAuthorById); //:authorId is a dynamic parameter — like /authors/2

module.exports = authorRouter;
/*
🧩 How it All Works Together:

1. User visits 👉 GET /authors/2
2. Express looks at the route /:authorId in authorRouter.js
3. That route calls the controller getAuthorById
4. The controller grabs authorId from the URL
5. It asks the "database" (from db.js) for the author
6. It sends back either:
    "Author Name: Christian" ✅
    Or "Author not found" ❌
*/