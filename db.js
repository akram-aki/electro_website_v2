import pg from "pg";
const { Pool } = pg;
import dotenv from "dotenv";

const devConfig = {
  user: process.env.user,
  host: process.env.host,
  database: process.env.database,
  password: process.env.password,
  port: process.env.port,
};

const pool = new Pool(devConfig);

export default pool;
