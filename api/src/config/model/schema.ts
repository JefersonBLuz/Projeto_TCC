import { int } from "drizzle-orm/mysql-core";
import { integer, pgTable, varchar, date, boolean, real } from "drizzle-orm/pg-core";

const basicInfo = {
    id:integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    birthday: date().notNull(),
    address: integer().references(() => address.id),
}

export const users = pgTable("users", {
    ...basicInfo,
    email: varchar({ length: 255}).notNull().unique(),
    cpf: varchar({ length: 255}).notNull().unique(),
    cellphone: varchar({ length: 255}).notNull().unique(),
    password: varchar({ length: 255 }).notNull(),
    privileges: varchar({ length: 255 }).notNull(),
    active: boolean().notNull(),
});

export const drivers = pgTable("drivers", {
    ...basicInfo,
    email: varchar({ length: 255}).notNull().unique(),
    cpf: varchar({ length: 255}).notNull().unique(),
    cellphone: varchar({ length: 255}).notNull().unique(),
    cnh_number: varchar({ length: 255 }).notNull().unique(),
    cnh_category: varchar({ length: 255 }).notNull(),
    cnh_date: date().notNull(),
    created_by: integer().references(() => users.id),
    updated_by: integer().references(() => users.id),
});

export const headFamily = pgTable("head_family", {
    ...basicInfo,
    email: varchar({ length: 255}).notNull().unique(),
    cpf: varchar({ length: 255}).notNull().unique(),
    cellphone: varchar({ length: 255}).notNull().unique(),
    created_by: integer().references(() => users.id),
    updated_by: integer().references(() => users.id),
});

export const familyMember = pgTable("family_member", {
    ...basicInfo,
    cpf: varchar({ length: 255}).notNull().unique(),
    head_id: integer().references(() => headFamily.id).notNull(),
    created_by: integer().references(() => users.id),
    updated_by: integer().references(() => users.id),
});

export const trucks = pgTable("trucks", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    plate: varchar({ length: 255 }).notNull().unique(),
    model: varchar({ length: 255 }).notNull(),
    year: date().notNull(),
    owner: integer().references(() => drivers.id),
    created_by: integer().references(() => users.id),
    updated_by: integer().references(() => users.id),
});

export const address = pgTable("address", {
    //talvez usar cep como PK
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    cep: varchar({ length: 255 }).notNull(),
    number: integer().notNull(),
    street: varchar({ length: 255 }).notNull(),
    neighborhood: varchar({ length: 255 }).notNull(),
    city: varchar({ length: 255 }).notNull(),
    state: varchar({ length: 255 }).notNull(),
    latitude: real().notNull(),
    longitude: real().notNull()
});
export const familly = pgTable("familly",{
    id:integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255}),
    headFamily: integer().references(() => headFamily.id),
    region: varchar({length: 255}),
    numberfamily: integer(),
    idsensor: integer(),
    volume_actual: real(),
    volume_need: real(),
})
export const history = pgTable("history", {
   familly_id: integer().primaryKey().references(() => familly.id),
   date: date().notNull(),
   driver: integer().notNull().references(() => drivers.id),
   truck: integer().notNull().references(() => trucks.id),
   volume: real().notNull() 
});