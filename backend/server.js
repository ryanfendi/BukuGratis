import express from "express";
import cors from "cors";

import books from "./routes/books.js";
import upload from "./routes/upload.js";
import auth from "./routes/auth.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/books", books);

app.use("/upload", upload);

app.use("/auth", auth);

app.get("/", (req,res)=>{

res.json({

app:"BukuGratis.com",

version:"1.0",

status:"Online"

});

});

const PORT=process.env.PORT||3000;

app.listen(PORT,()=>{

console.log("Server Running");

});
