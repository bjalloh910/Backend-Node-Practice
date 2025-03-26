//This is a fake database 

const authors = [
    { id: 1, name: "Bryan" },
    { id: 2, name: "Christian" },
    { id: 3, name: "Jason" },
  ];
  
  async function getAuthorById(authorId) { // looks the array and find the matching data
    return authors.find(author => author.id === authorId);
  };
  
  module.exports = { getAuthorById }; //export that function so we can use it in the controller.
  