import { Request, Response } from "express";
import { db, eq } from "../config/db";
import { address, headFamily, familyMember } from "../config/model/schema";
import { console } from "inspector";

const createMember = async (req: Request, res: Response) => {
    const { name, birthday, address, email, cpf, cellphone, head_id, created_by, updated_by } = req.body;
    try {
        const rows = await db.insert(familyMember).values({
            name: name,
            address: address,
            birthday: birthday,
            cpf: cpf,
            head_id: head_id,
            created_by: created_by,
            updated_by: updated_by
        }).returning();
        res.status(201).send({
            message: 'Member added successfully!',
            body: {
                member: {
                    rows
                },
            },           
        });
    } catch (error) {
        console.error('createMember: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            err: error
        });
    }
}

const viewMembersAll = async (req: Request, res: Response) => {
    try {
        const rows = await db.select().from(familyMember);
        res.status(200).send(rows);
    } catch (error) {
        console.error('viewMembersAll: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

const viewMember = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const rows = await db.select().from(familyMember).where(eq(familyMember.id, Number(id))
        );
        res.status(200).send(rows);
    } catch (error) {
        console.log('viewMember: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

const viewMembersAllWithAddress = async (req: Request, res: Response) => {
    try {
        const rows = await db.select().from(familyMember).innerJoin(address, eq(familyMember.address, address.id));
        res.status(200).send(rows);
    } catch (error) {
        console.log('viewMembersAllWithAddress: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

const viewMemberWithAddress = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const rows = await db.select().from(familyMember).where(eq(familyMember.id, Number(id))).innerJoin(address, eq(familyMember.address, address.id));
        res.status(200).send(rows);
    } catch (error) {
        console.error('viewUsersWithAddress: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

const viewMembersAllWithHead = async (req: Request, res: Response) => {
    try {
        const rows = await db.select().from(familyMember).innerJoin(headFamily, eq(familyMember.head_id, headFamily.id));
        res.status(200).send(rows);
    } catch (error) {
        console.log('viewMembersAllWithHead: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

const viewMemberWithHead = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const rows = await db.select().from(familyMember).where(eq(familyMember.id, Number(id))).innerJoin(headFamily, eq(familyMember.head_id, headFamily.id));
        res.status(200).send(rows);
    } catch (error) {
        console.error('viewMemberWithHead: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

const updateMember = async (req: Request, res: Response) => {
    const { id } = req.params
    const { nameuser, birthday, address, email, cpf, cellphone, head_id, created_by, updated_by } = req.body;
    try {
        const rows = await db.update(familyMember).set({
            name: nameuser,
            address: address,
            birthday: birthday,
            cpf: cpf,
            head_id: head_id,
            created_by: created_by,
            updated_by: updated_by
        }).where(eq(familyMember.id, Number(id)));
        res.status(200).send({ message: 'Membro atualizado com sucesso!',
            row: rows
         })
    } catch (error) {
        console.error('updateMember: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        })
    }
}

const deleteMember = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const rows = await db.delete(familyMember).where(eq(familyMember.id, Number(id)));
        res.status(200).send({ message: 'Membro excluído com sucesso!',
            row: rows
         });
    } catch (error) {
        console.error('deleteMember: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

export default { createMember, viewMembersAll, viewMember, viewMembersAllWithAddress, viewMemberWithAddress, viewMembersAllWithHead, viewMemberWithHead, updateMember, deleteMember }