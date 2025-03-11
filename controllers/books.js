// import Model 

import { booksModel } from "../models/books.js";
import { addProductValidator } from "../validators/books.js";

export const getBooks = async (req, res) => {
    const books = await booksModel.find();

    res.status(200).json(books);
}

export const getBook = async(req, res, next) => {
    try {
        const book = await booksModel.findById(req.params.id);
        
        if (book) {
        return res.status(200).json(book);
        }
        
        return res.status(404).send("Book not found");
    } catch (error) {
        next(error);
    }
}

export const addBook = async (req, res) => {
    try {
        const { error, value } = addProductValidator.validate(req.body, { abortEarly: false });
        if (error) {
            return res.status(422).json(error);
        }

        const result = await booksModel.create(value);

        res.status(200).json(result);
    } catch (error) {
        next(error);
    }

    

}

export const updateBook = async (req, res, next) => {
    try {
        const bookId = req.params.id;

        const updatedBook = await booksModel.findByIdAndUpdate(bookId, req.body, { new: true });

        if (!updateBook) {
            return res.status(404).send("Book not available");
        }

        return res.status(200).send("Book updated");
    } catch (error) {
        next(error);
    }

}

export const deleteBook = async (req, res, next) => {
    try {
        const bookId = req.params.id;

        const book = await booksModel.findByIdAndDelete(bookId);

        if (!book) {
            return res.status(404).send("Book not available");
        }

        return res.status(200).send("Book Deleted");
    } catch (error) {
        next(error);
    }
}