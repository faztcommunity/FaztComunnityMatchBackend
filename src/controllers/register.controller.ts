import {Request, Response} from 'express'
import {connect} from '../database'
import {User} from '../interface/IUser'

export async function getUsers(req: Request, res: Response): Promise<Response>{
    const conn = await connect();
    const register = await conn.query('SELECT * FROM register');
    return res.json(register[0]);
};

export async function createUser(req:Request, res: Response) {
    const newUser: User = req.body;
    return res.json({
        message: 'Usuario Creado'
    });
}