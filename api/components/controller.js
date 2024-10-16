import pool from "../db.js";
import queries from "./queries.js";
import jwt from "jsonwebtoken";
const jwtSecret =
  "16144fc50b241f4518fa577bd61ec6c5a19f44c72347d9d354ffc1e13f49f7aff26f1d7a1a51e419141f3077bc80e436393a5a77be602a796b988aa401200005";
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
    result.rows[0];
    if (err) return res.status(400).json({ fail: "err wrong credentials" });
    if (result.rows[0].password === password) {
      jwt.sign(
        { userName: userName, id: result.rows[0].id },
        jwtSecret,
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
  jwt.verify(cookie, jwtSecret, (err, result) => {
    if (result) return res.json(result);
    res.status(500).json("failed to verify token");
  });
};
export { addUser, loginUser, getUser };
