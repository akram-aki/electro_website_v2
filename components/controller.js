import pool from "../db.js";
import queries from "./queries.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { response } from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });

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
  try {
    if (!cookie) return res.status(400).json;
    jwt.verify(cookie, process.env.jwtSecret, (err, result) => {
      if (result) return res.json(result);
      res.status(500).json("failed to verify token");
    });
  } catch (err) {
    res.status(500).json("failed to verify token");
  }
};
const addEvent = (req, res) => {
  const { title, subtitle, description, date, img, id } = req.body;
  const userId = id;
  const values = [title, subtitle, description, date, img, userId];
  try {
    if (!title || !subtitle || !description || !date || !img || !id)
      return res.status(400).json({ fail: "missing data" });

    pool.query(queries.addEventQuery, values, (err, result) => {
      if (err) return res.status(400).json({ fail: "failed to add event" });
      res.json({ msg: "event added" });
    });
  } catch (err) {
    res.status(500).json({ fail: "failed to add event" });
  }
};
const fetchEvents = (req, res) => {
  pool.query(queries.fetchEventsQuery, (error, result) => {
    if (error) res.status(500).json("didnt work");
    else {
      res.status(200).json(result.rows);
    }
  });
};
const addProject = (req, res) => {
  const { title, description, img, id } = req.body;
  console.log(req.body);
  const userId = id;
  const values = [title, description, img, userId];
  try {
    if (!title || !description || !img || !id)
      return res.status(400).json({ fail: "missing data" });

    pool.query(queries.addProjectQuery, values, (err, result) => {
      if (err) return res.status(400).json({ fail: "failed to add project" });
      res.json({ msg: "project added" });
    });
  } catch (err) {
    res.status(500).json({ fail: "failed to add project" });
  }
};
const fetchProjects = (req, res) => {
  pool.query(queries.fetchProjectsQuery, (error, result) => {
    if (error) res.status(500).json("didnt work");
    else {
      res.status(200).json(result.rows);
    }
  });
};
const searchEvents = (req, res) => {
  const { search } = req.query;
  try {
    if (!search) return res.status(400).json({ fail: "missing data" });
    const values = [search, search];
    pool.query(queries.searchEventQuery, values, (err, result) => {
      if (err) return res.status(400).json({ fail: "failed to search" });
      res.json(result.rows);
    });
  } catch (err) {
    res.status(500).json({ fail: "failed to search" });
  }
};
const deleteEvent = (req, res) => {
  const { title } = req.body;
  const values = [title];
  try {
    if (!title) return res.status(400).json({ fail: "missing data" });
    pool.query(queries.deleteEventQuery, values, (err, result) => {
      if (err) return res.status(400).json({ fail: "failed to delete" });
      res.json({ msg: "deleted" });
    });
  } catch (err) {
    res.status(500).json({ fail: "failed to delete" });
  }
};
const searchProjects = (req, res) => {
  const { search } = req.query;
  try {
    if (!search) return res.status(400).json({ fail: "missing data" });
    const values = [search, search];
    pool.query(queries.searchProjectQuery, values, (err, result) => {
      if (err) return res.status(400).json({ fail: "failed to search" });
      res.json(result.rows);
    });
  } catch (err) {
    res.status(500).json({ fail: "failed to search" });
  }
};
const deleteProject = (req, res) => {
  const { title } = req.body;
  const values = [title];
  try {
    if (!title) return res.status(400).json({ fail: "missing data" });
    pool.query(queries.deleteEventQuery, values, (err, result) => {
      if (err) return res.status(400).json({ fail: "failed to delete" });
      res.json({ msg: "deleted" });
    });
  } catch (err) {
    res.status(500).json({ fail: "failed to delete" });
  }
};
export {
  addUser,
  searchProjects,
  deleteEvent,
  deleteProject,
  loginUser,
  getUser,
  addEvent,
  fetchEvents,
  addProject,
  fetchProjects,
  searchEvents,
};
