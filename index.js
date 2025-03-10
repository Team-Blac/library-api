import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

const app = express();

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log ('Database connected'))
.catch(err => console.log('error'))

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
