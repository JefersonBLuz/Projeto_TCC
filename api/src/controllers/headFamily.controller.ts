import { Request, Response } from "express";
import { db, eq } from "../config/db";
import { address, headFamily, familyMember, history } from "../config/model/schema";
import { console } from "inspector";

const createHead = async (req: Request, res: Response) => {
    const { name, birthday, address, email, cpf, cellphone, created_by, updated_by } = req.body;
    try {
        const rows = await db.insert(headFamily).values({
            name: name,
            address: address,
            birthday: birthday,
            cellphone: cellphone,
            cpf: cpf,
            email: email,
            created_by: created_by,
            updated_by: updated_by
        }).returning();
        res.status(201).send({
            message: 'Head of the family added successfully!',
            body: {
                head: {
                    rows
                },
            },           
        });
    } catch (error) {
        console.error('createHead: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            err: error
        });
    }
}

const viewHeadAll = async (req: Request, res: Response) => {
    try {
        const rows = await db.select().from(headFamily);
        res.status(200).send(rows);
    } catch (error) {
        console.error('viewHeadAll: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

const viewHead = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const rows = await db.select().from(headFamily).where(eq(headFamily.id, Number(id))
        );
        res.status(200).send(rows);
    } catch (error) {
        console.log('viewHead: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

const viewHeadAllWithAddress = async (req: Request, res: Response) => {
    try {
        const rows = await db.select().from(headFamily).innerJoin(address, eq(headFamily.address, address.id));
        res.status(200).send(rows);
    } catch (error) {
        console.log('viewHeadAllWithAddress: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

const viewHeadWithAddress = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const rows = await db.select().from(headFamily).where(eq(headFamily.id, Number(id))).innerJoin(address, eq(headFamily.address, address.id));
        res.status(200).send(rows);
    } catch (error) {
        console.error('viewHeadWithAddress: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

const viewHeadAllWithMembers = async (req: Request, res: Response) => {
    try {
        const rows = await db.select().from(headFamily).innerJoin(familyMember, eq(headFamily.id, familyMember.head_id));
        res.status(200).send(rows);
    } catch (error) {
        console.log('viewHeadAllWithMembers: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

const viewHeadWithMembers = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const rows = await db.select().from(headFamily).where(eq(headFamily.id, Number(id))).innerJoin(familyMember, eq(headFamily.id, familyMember.head_id));
        res.status(200).send(rows);
    } catch (error) {
        console.error('viewHeadWithMembers: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

const viewHeadAllWithHistory = async (req: Request, res: Response) => {
    try {
        const rows = await db.select().from(headFamily).innerJoin(history, eq(headFamily.id, history.familly_id));
        res.status(200).send(rows);
    } catch (error) {
        console.log('viewHeadAllWithHistory: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

const viewHeadWithHistory = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const rows = await db.select().from(headFamily).where(eq(headFamily.id, Number(id))).innerJoin(history, eq(headFamily.id, history.familly_id));
        res.status(200).send(rows);
    } catch (error) {
        console.error('viewHeadWithHistory: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

const updateHead = async (req: Request, res: Response) => {
    const { id } = req.params
    const { nameuser, birthday, address, email, cpf, cellphone, created_by, updated_by } = req.body;
    try {
        const rows = await db.update(headFamily).set({
            name: nameuser,
            address: address,
            birthday: birthday,
            cellphone: cellphone,
            cpf: cpf,
            email: email,
            created_by: created_by,
            updated_by: updated_by
        }).where(eq(headFamily.id, Number(id)));
        res.status(200).send({ message: 'Responsável atualizado com sucesso!',
            row: rows
         })
    } catch (error) {
        console.error('updateHead: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        })
    }
}

const deleteHead = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const rows = await db.delete(headFamily).where(eq(headFamily.id, Number(id)));
        res.status(200).send({ message: 'Responsável excluído com sucesso!',
            row: rows
         });
    } catch (error) {
        console.error('deleteHead: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

export default { createHead, viewHeadAll, viewHead, viewHeadAllWithAddress, viewHeadWithAddress, viewHeadAllWithMembers, viewHeadWithMembers, viewHeadAllWithHistory, viewHeadWithHistory, updateHead, deleteHead }