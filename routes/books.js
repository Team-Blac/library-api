import { Router } from "express";
import { getBooks, getBook, addBook, updateBook, deleteBook } from "../controllers/books.js";



// create books router
const booksRouter = Router();


//Define Routes

booksRouter.post('/books', addBook);

booksRouter.get('/books', getBooks);

booksRouter.get('/books/:id', getBook);

booksRouter.patch('/books/:id', updateBook);

booksRouter.delete('/books/:id', deleteBook);



//export Router
export default booksRouter;