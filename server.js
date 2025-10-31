/*
create a node/express server side application that 
receives data of books in a library with bookno, titlle 
and price then stores in an array.
*/
const express = require('express');
const cors=require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

let library = []; // Array to store books

// POST endpoint to add a book
app.post('/books', (req, res) => {
  const { bookno, title, price } = req.body;
  if (!bookno || !title || !price) {
    return res.status(400).json({ message: 'All fields required.' });
  }
  library.push({ bookno, title, price });
  res.status(201).json({ message: 'Book added!', library });
});

// GET endpoint to see all books
app.get('/books', (req, res) => {
  res.json(library);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
