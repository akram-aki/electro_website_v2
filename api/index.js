import express from "express";
import routes from "./components/routes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Get __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

// Serve static files from the front/electro_website/dist directory
app.use(express.static(path.join(__dirname, '../front/electro_website/dist')));

// Serve the index.html file for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../front/electro_website/dist/index.html'));
});

app.use("/", routes);

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
