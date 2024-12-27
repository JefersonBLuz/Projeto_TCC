import { Request, Response } from "express";
import { db, eq } from "../config/db";
import { trucks, drivers } from "../config/model/schema";
import { console } from "inspector";

const createTruck = async (req: Request, res: Response) => {
    const { plate, model, year, owner, created_by, updated_by } = req.body;
    try {
        const rows = await db.insert(trucks).values({
            plate: plate,
            model: model,
            year: year,
            owner: owner,
            created_by: created_by,
            updated_by: updated_by
        }).returning();
        res.status(201).send({
            message: 'Truck added successfully!',
            body: {
                user: {
                    rows
                },
            },           
        });
    } catch (error) {
        console.error('createTruck: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            err: error
        });
    }
}

const viewTrucksAll = async (req: Request, res: Response) => {
    try {
        const rows = await db.select().from(trucks);
        res.status(200).send(rows);
    } catch (error) {
        console.error('viewTrucksAll: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

const viewTruck = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const rows = await db.select().from(trucks).where(eq(trucks.id, Number(id))
        );
        res.status(200).send(rows);
    } catch (error) {
        console.log('viewTruck: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

const viewTrucksWithDrivers = async (req: Request, res: Response) => {
    try {
        const rows = await db.select().from(trucks).innerJoin(drivers, eq(trucks.owner, drivers.id));
        res.status(200).send(rows);
    } catch (error) {
        console.log('viewTrucksWithDrivers: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

const viewTruckWithDriver = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const rows = await db.select().from(trucks).where(eq(trucks.id, Number(id))).innerJoin(drivers, eq(trucks.owner, drivers.id));
        res.status(200).send(rows);
    } catch (error) {
        console.error('viewTruckWithDriver: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

const updateTruck = async (req: Request, res: Response) => {
    const { id } = req.params
    const { plate, model, year, owner, created_by, updated_by } = req.body;
    try {
        const rows = await db.update(trucks).set({
            plate: plate,
            model: model,
            year: year,
            owner: owner,
            created_by: created_by,
            updated_by: updated_by
        }).where(eq(trucks.id, Number(id)));
        res.status(200).send({ message: 'Caminhão atualizado com sucesso!',
            row: rows
         })
    } catch (error) {
        console.error('updateTruck: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        })
    }
}

const deleteTruck = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const rows = await db.delete(trucks).where(eq(trucks.id, Number(id)));
        res.status(200).send({ message: 'Caminhão excluído com sucesso!',
            row: rows
         });
    } catch (error) {
        console.error('deleteTruck: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

export default { viewTrucksAll, viewTruck, createTruck, viewTrucksWithDrivers, viewTruckWithDriver, updateTruck, deleteTruck }