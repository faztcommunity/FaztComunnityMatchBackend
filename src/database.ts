import { createPool } from 'mysql2/promise'

export default function connect() {

    const connection = createPool({
        host: 'localhost',
        user: 'root',
        database: 'fazt_match',
        connectionLimit: 10
    });

    return connection;
}