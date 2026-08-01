import app from "./app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log("Server Running Port", PORT);

});

import pagesRouter from "./routes/pages.js";

app.use("/api/pages",pagesRouter);
