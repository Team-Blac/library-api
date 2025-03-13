import { Schema, model } from "mongoose";
import normalize from 'normalize-mongoose';


const booksSchema = new Schema({
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    genre: { type: String },
    description: { type: String },
    publishedYear: { type: Number },
    image: { type: String },
    quantityAvailable: { type: Number, required: true, default: 1 },
}, {

    timestamps: true
});

booksSchema.plugin(normalize);

export const booksModel = model('Book', booksSchema);
