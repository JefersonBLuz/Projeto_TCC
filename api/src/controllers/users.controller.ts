/**
 * Arquivo: src/controller/users.controller.ts
 * Descrição: Arquivo responsável pela lógica do CRUD dos usuários.
 * Data: 01/12/2024
 * Autor: Jeferson Braga
 */
import { Request, Response } from "express";
import { db, eq } from "../config/db";
import { address, users } from "../config/model/schema";
import { console } from "inspector";

// * Método responsavél por criar um novo usuário:
const createUser = async (req: Request, res: Response) => {
    const { nameuser, birthday, address, email, cpf, cellphone, password, privileges, active } = req.body;
    try {
        const rows = await db.insert(users).values({
            name: nameuser,
            active: active? active: true,
            address: address,
            birthday: birthday,
            cellphone: cellphone,
            cpf: cpf,
            email: email,
            password: password,
            privileges: privileges
        }).returning();
        res.status(201).send({
            message: 'User added successfully!',
            body: {
                user: {
                    rows
                },
            },           
        });
    } catch (error) {
        console.error('users-view: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            err: error
        });
    }
}
// * Método responsavél listar todos usuários:
const viewUsersAll = async (req: Request, res: Response) => {
    try {
        const rows = await db.select().from(users);
        res.status(200).send(rows);
    } catch (error) {
        console.error('viewUsersAll: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}
// * Método responsavél listar usuário especifico:
const viewUser = async (req: Request, res: Response) => {
    const { name } = req.params;
    try {
        const rows = await db.select().from(users).where(eq(users.name, name)
        );
        res.status(200).send(rows);
    } catch (error) {
        console.log('viewUser: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}
// * Método responsavél listar todos os usuário e seus endereços:
const viewUsersAllWithAddress = async (req: Request, res: Response) => {
    try {
        const rows = await db.select().from(users).innerJoin(address, eq(users.address, address.id));
        res.status(200).send(rows);
    } catch (error) {
        console.log('viewUsersAllWithAddress: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}
// * Método responsavél listar usuário específico e seu endereço:
const viewUsersWithAddress = async (req: Request, res: Response) => {
    const { name } = req.params
    try {
        const rows = await db.select().from(users).where(eq(users.name, name)).innerJoin(address, eq(users.address, address.id));
        res.status(200).send(rows);
    } catch (error) {
        console.error('viewUsersWithAddress: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}
// * Método responsavél listar usuário específico e seu endereço:
const viewUsersWithAddressId = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const rows = await db.select().from(users).where(eq(users.id, Number(id))).innerJoin(address, eq(users.address, address.id));
        res.status(200).send(rows);
    } catch (error) {
        console.error('viewUsersWithAddress: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}
// * Método responsavél por atualizar dados do usuário:
const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params
    const { nameuser, birthday, address, email, cpf, cellphone, password, privileges, active } = req.body;
    try {
        const rows = await db.update(users).set({
            name: nameuser,
            active: active? active: true,
            address: address,
            birthday: birthday,
            cellphone: cellphone,
            cpf: cpf,
            email: email,
            password: password,
            privileges: privileges
        }).where(eq(users.id, Number(id)));
        res.status(200).send({ message: 'Usuário atualizado com sucesso!',
            row: rows
         })
    } catch (error) {
        console.error('updateUser: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        })
    }
}
// * Método responsável por deletar um determinado usuário por Id:
const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const rows = await db.delete(users).where(eq(users.id, Number(id)));
        res.status(200).send({ message: 'Usuário excluído com sucesso!',
            row: rows
         });
    } catch (error) {
        console.error('deleteUser: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

export default { viewUsersAll, createUser, viewUser, viewUsersAllWithAddress, viewUsersWithAddress, updateUser, deleteUser, viewUsersWithAddressId }