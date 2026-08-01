import express from "express";
import cors from "cors";

import booksRouter from "./routes/books.js";
import uploadRouter from "./routes/upload.js";
import authRouter from "./routes/auth.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/books", booksRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {

    res.json({

        app: "BukuGratis.com",

        status: "Running",

        version: "2.0"

    });

});

export default app;
