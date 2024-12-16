import { Request, Response } from "express";
import { db, eq } from "../config/db";
import { familly } from "../config/model/schema";
import { console } from "inspector";

const createFamilly = async (req: Request, res: Response) => {
    const { name, region, headFamily, numberfamilly, idsensor, volume_actual, volume_need } = req.body;
    try {
        const rows = await db.insert(familly).values({
            name: name,
            headFamily: headFamily,
            numberfamilly: numberfamilly,
            idsensor: idsensor,
            region: region,
            volume_actual: volume_actual,
            volume_need: volume_need,
        }).returning();
        res.status(201).send({
            message: 'Head of the family added successfully!',
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

const viewFamillyAll = async (req: Request, res: Response) => {
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

const viewFamillyName = async (req: Request, res: Response) => {
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


const updateFamilly = async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, region, headFamily, numberfamilly, idsensor, volume_actual, volume_need } = req.body;
    try {
        const rows = await db.update(familly).set({
            name: name,
            headFamily: headFamily,
            numberfamilly: numberfamilly,
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

const deleteFamilly = async (req: Request, res: Response) => {
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

export default { createFamilly, viewFamillyAll, viewFamillyName, deleteFamilly, updateFamilly}