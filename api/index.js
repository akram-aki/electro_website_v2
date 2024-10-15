import express from "express";
import routes from "./components/routes.js";

const app = express();

app.use(express.json());

app.use("/", routes);

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
