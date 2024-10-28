import express from "express";
import routes from "./components/routes.js";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 8000;

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "front/electro_website/dist")));
}

app.use("/", routes);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
