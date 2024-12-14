import { Request, Response } from "express";
import { db, eq } from "../config/db";
import { address } from "../config/model/schema";
import { console } from "inspector";

// Método responsável por criar um novo endereço:
const createAddress = async (req: Request, res: Response) => {
    const { cep, number, street, neighborhood, city, state, latitude, longitude } = req.body;
    try {
        const rows = await db.insert(address).values({
            cep: cep,
            number: number,
            street: street,
            neighborhood: neighborhood,
            city: city,
            state: state,
            latitude: latitude,
            longitude: longitude
        }).returning();
        res.status(201).send({
            message: 'Address added successfully!',
            body: {
                address: {
                    rows
                },
            },
        });
    } catch (error) {
        console.error('create address: ',error);
        res.status(500).send({
            message: 'Ocorreu um erro na criação do endereço.',
            err: error
        });
    }
}

// Método lista todos os endereços:
const viewAddressAll = async (req: Request, res: Response) => {
    try {
        const rows = await db.select().from(address);
        res.status(200).send(rows);
    } catch (error) {
        console.error('viewAddressAll: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

// Método lista endereço especifíco:
const viewAddress = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const rows = await db.select().from(address).where(eq(address.id, Number(id)));
        res.status(200).send(rows);
    } catch (error) {
        console.error('viewAddress: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

// Método atualiza um endereço:
const updateAddress = async (req: Request, res: Response) => {
    const { id } = req.params
    const { cep, number, street, neighborhood, city, state, latitude, longitude } = req.body;
    try {
        const rows = await db.update(address).set({
            cep: cep,
            number: number,
            street: street,
            neighborhood: neighborhood,
            city: city,
            state: state,
            latitude: latitude,
            longitude: longitude
        }).where(eq(address.id, Number(id)));
        res.status(200).send({ message: 'Endereço atualizado com sucesso!',
            row: rows
         })
    } catch (error) {
        console.error('updateAddress: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        })
    }
}

// Método deleta um endereço:
const deleteAddress = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const rows = await db.delete(address).where(eq(address.id, Number(id)));
        res.status(200).send({ message: 'Endereço excluído com sucesso!',
            row: rows
         });
    } catch (error) {
        console.error('deleteAddress: ', error);
        res.status(500).send({
            message: 'Ocorreu um erro.',
            error: error
        });
    }
}

export default { createAddress, viewAddressAll, viewAddress, updateAddress, deleteAddress}