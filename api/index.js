import express from "express";
import routes from "./components/routes.js";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.use("/", routes);

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
