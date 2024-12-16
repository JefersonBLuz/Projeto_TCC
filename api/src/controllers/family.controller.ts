import { Request, Response } from "express";
import { db, eq } from "../config/db";
import { familly } from "../config/model/schema";
import { console } from "inspector";

const createFamily = async (req: Request, res: Response) => {
    const { name, region, headFamily, numberfamily, idsensor, volume_actual, volume_need } = req.body;
    try {
        const rows = await db.insert(familly).values({
            name: name,
            headFamily: headFamily,
            numberfamily: numberfamily,
            idsensor: idsensor,
            region: region,
            volume_actual: volume_actual,
            volume_need: volume_need,
        }).returning();
        res.status(201).send({
            message: 'Family added successfully!',
            body: {
                familly: {
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

const viewFamilyAll = async (req: Request, res: Response) => {
    try {
        const rows = await db.select().from(familly);
        res.status(200).send(rows);
    } catch (error) {
        console.error('viewHeadAll: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

const viewFamilyName = async (req: Request, res: Response) => {
    const { name } = req.params;
    try {
        const rows = await db.select().from(familly).where(eq(familly.name, name)
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


const updateFamily = async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, region, headFamily, numberfamily, idsensor, volume_actual, volume_need } = req.body;
    try {
        const rows = await db.update(familly).set({
            name: name,
            headFamily: headFamily,
            numberfamily: numberfamily,
            idsensor: idsensor,
            region: region,
            volume_actual: volume_actual,
            volume_need: volume_need,
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

const deleteFamily = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const rows = await db.delete(familly).where(eq(familly.id, Number(id)));
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

export default { createFamily, viewFamilyAll, viewFamilyName, deleteFamily, updateFamily}