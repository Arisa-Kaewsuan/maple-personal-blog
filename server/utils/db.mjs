import * as pg from 'pg';
const { Pool } = pg.default;
import dotenv from 'dotenv';
dotenv.config();

const connectionPool = new Pool({
    connectionString: process.env.DB_CONNECTION_STRING,
})

export default connectionPool;