/**
 * Arquivo: src/controller/auth.controller.ts
 * Descrição: Arquivo responsável pela lógica do CRUD dos usuários.
 * Data: 01/12/2024
 * Autor: Jeferson Braga
 */
import bcrypt from 'bcrypt';
import { Request, Response } from "express";
import { db, eq } from "../config/db";
import { users } from "../config/model/schema";


const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!username || !password) return res.status(400).send({ message: 'Invalid data.' });
    try {
        const user: any = await db.select().from(users).where(eq(users.email, username));

        if (!user) return res.status(404).send({ message: 'User not found.' });

        if (await bcrypt.compare(password, user.password)) {
            return res.status(200).json({
                message: 'Login successful.',
                token: 'token-ficticio',
                user: {
                    name: user[0].name,
                    privileges: user[0].privileges,
                    id: user[0].id
                }
            })
        } else {
            return res.status(401).send({ message: 'Invalid password.' })
        }
    } catch (error) {
        console.error('login: ', error);
        return res.status(500).send({ message: 'An error occurred.', error });
    }
}