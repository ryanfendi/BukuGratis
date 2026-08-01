import express from "express";

import { getPage } from "../controllers/pagesController.js";

const router = express.Router();

router.get("/:bookId/:page",getPage);

export default router;
