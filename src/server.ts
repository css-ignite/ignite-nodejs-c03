import express from "express";

import { router } from "./routes";

const app = express();
const port = 3333;

app.use(express.json());
app.use("/v1", router);

app.listen(port, () => {
    console.log("Server is running on port", port);
});
