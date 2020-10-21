import {query, Request, Response} from 'express'
import {connect} from '../database'
import {User} from '../interface/IUser'

export async function getUsers(req: Request, res: Response): Promise<Response>{
    const conn = await connect();
    const user = await conn.query('SELECT * FROM register');
    return res.json(user[0]);
};

export async function createUser(req:Request, res: Response) {
    const newUser: User = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO register SET ?', [newUser]);
    return res.json({
        message: 'Usuario Creado'
    });
}
