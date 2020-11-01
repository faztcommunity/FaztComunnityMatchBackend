import { Request, Response } from 'express';
import connect from '../database';
import User from '../interface/IUser';

const conn = connect();

export async function getUsers(req: Request, res: Response): Promise<Response> {
    try {
        const user = await conn.query('SELECT * FROM register');
        return res.json(user[0]);
    } catch (err) {
        return res.send(err);
    }
};

export async function createUser(req: Request, res: Response): Promise<Response> {
    const newUser: User = req.body
    await conn.query('INSERT INTO register SET ?', [newUser]);
    return res.json({
        message: 'Usuario Creado'
    });
};

export async function getUser(req: Request, res: Response): Promise<Response> {
    const id = req.params.postId
    const users = await conn.query('SELECT * FROM register WHERE id = ?', [id]);
    return res.json(users[0]);
};

export async function deleteUser(req: Request, res: Response): Promise<Response> {
    const id = req.params.postId
    await conn.query('DELETE FROM register WHERE id = ?', [id]);
    return res.json({
        message: 'Usuario Eliminado'
    });
};

export async function updateUser(req: Request, res: Response): Promise<Response> {
    const id = req.params.postId;
    const updateUser: User = req.body;
    let updated = await conn.query('UPDATE register set ? WHERE id = ?', [updateUser, id]);
    return res.json({
        message: updated[0]
    });
};
