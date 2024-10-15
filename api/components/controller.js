import pool from "../db.js";
import queries from "./queries.js";
const addUser = (req, res) => {
  const { userName, password } = req.body;
  const values = ["aki", "123"];
  pool.query(queries.addUserQuery, values, (err, result) => {
    if (err) console.log(err);
    if (result) res.json({ name: "sex" });
  });
};
const getUser = (req, res) => {
  const { userName, password } = req.body;
  const values = [userName];

  pool.query(queries.dupNameCheck, values, (err, result) => {
    result.rows[0];
    if (err) return res.status(400).json({ fail: "err wrong credentials" });
    result.rows[0].password === password
      ? res.json({ id: result.rows[0].id, userName })
      : res.status(400).json({ fail: "err wrong credentials" });
  });
};

export { addUser, getUser };
