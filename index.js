const express = require('express');
const { resolve } = require('path');
const {getAllBooks, getBookById, addBook} = require("./book.js")

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.get("/api/books", (req, res)=>{
  res.json(getAllBooks());
})

app.get("/api/books/:id", (req, res)=>{
  const book = getBookById(parseInt(req.params.id));
  if(book){
    res.json({"book": book});
  }else{
    res.status(404).json({error: "Invalid id! book not found"})
  }
})

app.post("/api/books", (req, res) =>{
  cosnt book = addBook(req.body);
  res.status(201).json(book);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
