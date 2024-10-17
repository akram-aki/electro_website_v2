import pool from "../db.js";
import queries from "./queries.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const addUser = (req, res) => {
  const { userName, password } = req.body;
  const values = ["aki", "123"];
  pool.query(queries.addUserQuery, values, (err, result) => {
    if (err) console.log(err);
    if (result) res.json({ name: "sex" });
  });
};
const loginUser = (req, res) => {
  const { userName, password } = req.body;
  const values = [userName];

  pool.query(queries.dupNameCheck, values, (err, result) => {
    if (err) return res.status(400).json({ fail: "err wrong credentials" });
    const uspass = result.rows[0].password;
    if (uspass === password) {
      jwt.sign(
        { userName: userName, id: result.rows[0].id },
        process.env.jwtSecret,
        {},
        (err, token) => {
          if (err) res.status(500).json("failed to generate token");

          return res.json(token);
        }
      );
    } else res.status(500).json({ msg: "wrong credentials" });
  });
};
const getUser = (req, res) => {
  const { cookie } = req.query;
  jwt.verify(cookie, process.env.jwtSecret, (err, result) => {
    if (result) return res.json(result);
    res.status(500).json("failed to verify token");
  });
};
export { addUser, loginUser, getUser };
