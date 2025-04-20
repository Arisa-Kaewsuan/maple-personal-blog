import * as pg from 'pg';
const { Pool } = pg.default;

const connectionPool = new Pool({
    connectionString: "postgresql://neondb_owner:npg_fPaSz6iLbX8d@ep-icy-heart-a1aqah87-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
})

export default connectionPool;