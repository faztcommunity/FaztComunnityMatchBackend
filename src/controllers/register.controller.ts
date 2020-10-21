import {Request, Response} from 'express'
import {connect} from '../database'

export async function getUsers(req: Request, res: Response): Promise<Response>{
    const conn = await connect();
    const register = await conn.query('SELECT * FROM register');
    return res.json(register[0]);
};

