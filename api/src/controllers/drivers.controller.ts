import { Request, Response } from "express";
import { db, eq } from "../config/db";
import { address, drivers, trucks } from "../config/model/schema";
import { console } from "inspector";

const createDriver = async (req: Request, res: Response) => {
    const { namedriver, birthday, address, email, cpf, cellphone, cnh_number, cnh_category, cnh_date, created_by, updated_by } = req.body;
    try {
        const rows = await db.insert(drivers).values({
            name: namedriver,
            address: address,
            birthday: birthday,
            cellphone: cellphone,
            cpf: cpf,
            email: email,
            cnh_number: cnh_number,
            cnh_category: cnh_category,
            cnh_date: cnh_date,
            created_by: created_by,
            updated_by: updated_by
        }).returning();
        res.status(201).send({
            message: 'Driver added successfully!',
            body: {
                user: {
                    rows
                },
            },           
        });
    } catch (error) {
        console.error('createDriver: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            err: error
        });
    }
}

const viewDriversAll = async (req: Request, res: Response) => {
    try {
        const rows = await db.select().from(drivers);
        res.status(200).send(rows);
    } catch (error) {
        console.error('viewDriversAll: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

const viewDriver = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const rows = await db.select().from(drivers).where(eq(drivers.id, Number(id))
        );
        res.status(200).send(rows);
    } catch (error) {
        console.log('viewDriver: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

const viewDriversAllWithAddress = async (req: Request, res: Response) => {
    try {
        const rows = await db.select().from(drivers).innerJoin(address, eq(drivers.address, address.id));
        res.status(200).send(rows);
    } catch (error) {
        console.log('viewDriversAllWithAddress: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

const viewDriverWithAddress = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const rows = await db.select().from(drivers).where(eq(drivers.id, Number(id))).innerJoin(address, eq(drivers.address, address.id));
        res.status(200).send(rows);
    } catch (error) {
        console.error('viewDriverWithAddress: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

const viewDriversAllWithTrucks = async (req: Request, res: Response) => {
    try {
        const rows = await db.select().from(drivers).innerJoin(trucks, eq(drivers.id, trucks.owner));
        res.status(200).send(rows);
    } catch (error) {
        console.log('viewDriversAllWithTrucks: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

const viewDriverWithTruck = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const rows = await db.select().from(drivers).where(eq(drivers.id, Number(id))).innerJoin(trucks, eq(drivers.id, trucks.owner));
        res.status(200).send(rows);
    } catch (error) {
        console.error('viewDriverWithTruck: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

const updateDriver = async (req: Request, res: Response) => {
    const { id } = req.params
    const { namedriver, birthday, address, email, cpf, cellphone, cnh_number, cnh_category, cnh_date, created_by, updated_by } = req.body;
    try {
        const rows = await db.update(drivers).set({
            name: namedriver,
            address: address,
            birthday: birthday,
            cellphone: cellphone,
            cpf: cpf,
            email: email,
            cnh_number: cnh_number,
            cnh_category: cnh_category,
            cnh_date: cnh_date,
            created_by: created_by,
            updated_by: updated_by
        }).where(eq(drivers.id, Number(id)));
        res.status(200).send({ message: 'Motorista atualizado com sucesso!',
            row: rows
         })
    } catch (error) {
        console.error('updateDriver: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        })
    }
}

const deleteDriver = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const rows = await db.delete(drivers).where(eq(drivers.id, Number(id)));
        res.status(200).send({ message: 'Motorista excluído com sucesso!',
            row: rows
         });
    } catch (error) {
        console.error('deleteDriver: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

export default { createDriver, viewDriversAll, viewDriver, viewDriversAllWithAddress, viewDriverWithAddress, viewDriversAllWithTrucks, viewDriverWithTruck, updateDriver, deleteDriver }