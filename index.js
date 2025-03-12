import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import booksRouter from "./routes/books.js";
import cors from "cors"

const app = express();

const PORT = process.env.PORT || 3000;

await mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Database connected'))
  .catch(err => console.log('error'))


app.use(cors());
app.use(express.json());

app.use("/api/v1", booksRouter);


app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
