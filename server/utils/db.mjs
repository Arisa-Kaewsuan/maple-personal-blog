import * as pg from 'pg';
const { Pool } = pg.default;

const connectionPool = new Pool({
    connectionString: "postgresql://postgres:A0636656586a@localhost:5432/BlogPost"
})

export default connectionPool;