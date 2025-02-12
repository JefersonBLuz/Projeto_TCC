import { db } from './db';
import { address, users, drivers, headFamily, familyMember, trucks, familly, history } from '../config/model/schema';
import { log } from 'console';

async function insertAddress(): Promise<void> {
    await db.insert(address).values([
        {
            cep: "45117-000",
            number: 100,
            street: "Estrada Itapirema",
            neighborhood: "Itapirema",
            city: "Vitória da Conquista",
            state: "Bahia",
            latitude: -14.8619237,
            longitude: -40.8445346
        },
        {
            cep: "45102-000",
            number: 200,
            street: "Estrada São Sebastião",
            neighborhood: "São Sebastião",
            city: "Vitória da Conquista",
            state: "Bahia",
            latitude: -14.7675223,
            longitude: -40.6700489
        },
        {
            cep: "45115-000",
            number: 300,
            street: "Estrada José Gonçalves",
            neighborhood: "José Gonçalves",
            city: "Vitória da Conquista",
            state: "Bahia",
            latitude: -14.7246780,
            longitude: -40.7327744
        },
        {
            cep: "45118-000",
            number: 400,
            street: "Estrada Caiçara",
            neighborhood: "Caiçara",
            city: "Vitória da Conquista",
            state: "Bahia",
            latitude: -14.8619237,
            longitude: -40.8445346
        },
        {
            cep: "45103-000",
            number: 500,
            street: "Estrada Cabeceira da Jibóia",
            neighborhood: "Cabeceira da Jibóia",
            city: "Vitória da Conquista",
            state: "Bahia",
            latitude: -15.0711920,
            longitude: -40.8171757
        },
        {
            cep: "45105-000",
            number: 600,
            street: "Estrada Iguá",
            neighborhood: "Iguá",
            city: "Vitória da Conquista",
            state: "Bahia",
            latitude: -14.9412600,
            longitude: -40.9457806
        },
        {
            cep: "45065-000",
            number: 700,
            street: "Frei Benjamin",
            neighborhood: "Patagônia",
            city: "Vitória da Conquista",
            state: "Bahia",
            latitude: -14.8753971,
            longitude: -40.8601620
        }
    ]);
}

async function insertUsers(): Promise<void> {
    await db.insert(users).values([
        {
            name: "Maria",
            active: true,
            address: 1,
            birthday: "1998-08-20",
            cellphone: "99123-4567",
            cpf: "001.002.003-04",
            email: "maria@mail.com",
            password: "123456",
            privileges: "admin"
        },
        {
            name: "João",
            active: true,
            address: 1,
            birthday: "1988-06-10",
            cellphone: "99765-4321",
            cpf: "002.003.004-05",
            email: "joao@mail.com",
            password: "123456",
            privileges: "worker"
        },
        {
            name: "Junior",
            active: false,
            address: 1,
            birthday: "1999-08-11",
            cellphone: "99123-7654",
            cpf: "003.004.005-06",
            email: "junior@mail.com",
            password: "123456",
            privileges: "worker"
        }
    ]);
}

async function insertHead(): Promise<void> {
    await db.insert(headFamily).values([{
        name: "Marta",
        address: 1,
        birthday: "1976-08-01",
        cellphone: "99234-5678",
        cpf: "004.005.006-71",
        email: "marta@gmail.com",
        created_by: 1,
        updated_by: null
    },
    {
        name: "Josefa",
        address: 2,
        birthday: "1980-01-01",
        cellphone: "99345-6789",
        cpf: "005.006.007-08",
        email: "josefa@gmail.com",
        created_by: 1,
        updated_by: null
    },
    {
        name: "Ana",
        address: 3,
        birthday: "1995-06-05",
        cellphone: "99456-7890",
        cpf: "006.007.008-09",
        email: "ana@gmail.com",
        created_by: 1,
        updated_by: null
    },
    {
        name: "Roberta",
        address: 4,
        birthday: "1966-04-03",
        cellphone: "9901-2345",
        cpf: "007.008.009-10",
        email: "roberta@gmail.com",
        created_by: 2,
        updated_by: null
    },
    {
        name: "Catarina",
        address: 5,
        birthday: "1976-05-01",
        cellphone: "98234-5678",
        cpf: "008.009.010-11",
        email: "catarina@gmail.com",
        created_by: 2,
        updated_by: null
    },
    {
        name: "Josefina",
        address: 6,
        birthday: "1976-08-07",
        cellphone: "97234-5678",
        cpf: "004.005.006-72",
        email: "josefina@gmail.com",
        created_by: 3,
        updated_by: null
    },
    {
        name: "Josiane",
        address: 6,
        birthday: "1977-07-07",
        cellphone: "97234-5679",
        cpf: "004.005.006-73",
        email: "josiane@gmail.com",
        created_by: 3,
        updated_by: null
    }]);
}

async function insertMember(): Promise<void> {
    //f1
    await db.insert(familyMember).values([
        {
            name: "Carlos",
            address: 1,
            birthday: "2004-09-12",
            cpf: "123.456.789-10",
            head_id: 1,
            created_by: 1,
            updated_by: null
        },
        {
            name: "Mauricio",
            address: 1,
            birthday: "2004-09-12",
            cpf: "234.567.891-01",
            head_id: 1,
            created_by: 1,
            updated_by: null
        },
        //f2
        {
            name: "Juan Carlos",
            address: 2,
            birthday: "2003-09-12",
            cpf: "345.678.910-11",
            head_id: 2,
            created_by: 1,
            updated_by: null
        },
        {
            name: "Carla",
            address: 2,
            birthday: "2002-08-12",
            cpf: "456.789.101-11",
            head_id: 2,
            created_by: 1,
            updated_by: null
        },
        {
            name: "Carlinhos",
            address: 2,
            birthday: "2007-06-06",
            cpf: "567.891.011-12",
            head_id: 2,
            created_by: 1,
            updated_by: null
        },
        //f3
        {
            name: "Carlito",
            address: 3,
            birthday: "2012-09-12",
            cpf: "678.910.111-21",
            head_id: 3,
            created_by: 1,
            updated_by: null
        },
        //f4
        {
            name: "Carlota",
            address: 4,
            birthday: "2002-10-12",
            cpf: "789.101.112-13",
            head_id: 4,
            created_by: 1,
            updated_by: null
        },
        {
            name: "Carmen",
            address: 4,
            birthday: "2004-12-12",
            cpf: "891.011.121-31",
            head_id: 4,
            created_by: 1,
            updated_by: null
        },
        //f5
        {
            name: "Charles",
            address: 5,
            birthday: "2000-09-12",
            cpf: "910.111.213-14",
            head_id: 5,
            created_by: 2,
            updated_by: null
        },
        {
            name: "Cordelius",
            address: 5,
            birthday: "2001-09-12",
            cpf: "101.112.131-41",
            head_id: 5,
            created_by: 2,
            updated_by: null
        },
        //f6
        {
            name: "Carlos II",
            address: 6,
            birthday: "2004-09-12",
            cpf: "011.121.314-15",
            head_id: 6,
            created_by: 2,
            updated_by: null
        },
        //f7
        {
            name: "Coriolanos",
            address: 6,
            birthday: "2002-10-02",
            cpf: "111.213.141-51",
            head_id: 7,
            created_by: 2,
            updated_by: null
        },
        {
            name: "Camila",
            address: 6,
            birthday: "1997-09-12",
            cpf: "112.131.415-16",
            head_id: 7,
            created_by: 2,
            updated_by: null
        }
    ]);
}

async function insertFamily(): Promise<void> {
    await db.insert(familly).values([
        {
            name: "Silva",
            head_id: 1,
            numberfamily: 3,
            idsensor: 111,
            volume_actual: 5400,
            volume_need: 5400
        },
        {
            name: "Costa",
            head_id: 2,
            numberfamily: 4,
            idsensor: 222,
            volume_actual: 30,
            volume_need: 150
        },
        {
            name: "Carvalho",
            head_id: 3,
            numberfamily: 2,
            idsensor: 333,
            volume_actual: 60,
            volume_need: 60
        },
        {
            name: "Souza",
            head_id: 4,
            numberfamily: 3,
            idsensor: 444,
            volume_actual: 50,
            volume_need: 120
        },
        {
            name: "Pereira",
            head_id: 5,
            numberfamily: 3,
            idsensor: 555,
            volume_actual: 130,
            volume_need: 120
        },
        {
            name: "Bittencourt",
            head_id: 6,
            numberfamily: 2,
            idsensor: 666,
            volume_actual: 60,
            volume_need: 60
        },
        {
            name: "Vasconcelos",
            head_id: 7,
            numberfamily: 3,
            idsensor: 777,
            volume_actual: 100,
            volume_need: 120
        }]);
}

async function insertDriver(): Promise<void> {
    await db.insert(drivers).values([
        {
            name: "Augusto",
            address: 7,
            birthday: "1975-03-04",
            cellphone: "98123-4567",
            cpf: "121.314.151-61",
            email: "augusto@mail.com",
            cnh_number: "12345678910",
            cnh_category: "C",
            cnh_date: "2025-05-05",
            created_by: 3,
            updated_by: null
        },
        {
            name: "Claudio",
            address: 7,
            birthday: "1977-04-03",
            cellphone: "98234-5678",
            cpf: "213.141.516-17",
            email: "claudio@mail.com",
            cnh_number: "10987654321",
            cnh_category: "C",
            cnh_date: "2026-06-06",
            created_by: 3,
            updated_by: null
        }]);
}

async function insertTruck(): Promise<void> {
    await db.insert(trucks).values([
        {
            plate: "XPG4J0",
            model: "Volvo FM",
            year: "2013-10-12",
            owner: 1,
            created_by: 2,
            updated_by: null
        },
        {
            plate: "GPG8Y9",
            model: "Volvo FMX",
            year: "2015-06-08",
            owner: 2,
            created_by: 2,
            updated_by: null
        }
    ]);
}

async function insertHistory(): Promise<void> {
    await db.insert(history).values([
        {
            familly_id: 1,
            date: "2024-12-17",
            driver: 1,
            truck: 1,
            volume: 200
        },
        {
            familly_id: 2,
            date: "2024-12-10",
            driver: 1,
            truck: 1,
            volume: 250
        },
        {
            familly_id: 3,
            date: "2024-12-15",
            driver: 2,
            truck: 2,
            volume: 150
        },
        {
            familly_id: 4,
            date: "2024-12-13",
            driver: 1,
            truck: 1,
            volume: 200
        },
        {
            familly_id: 5,
            date: "2024-12-15",
            driver: 1,
            truck: 1,
            volume: 200
        },
        {
            familly_id: 6,
            date: "2024-12-13",
            driver: 2,
            truck: 2,
            volume: 150
        },
        {
            familly_id: 7,
            date: "2024-12-17",
            driver: 2,
            truck: 2,
            volume: 200
        }
    ]);
}

const populationBomb = async (): Promise<void> => {
    await insertAddress().then(() => {console.log('Address inserted')}).catch((err) => {console.log(`Error address inserted: ${err}`)});
    await insertUsers().then(() => {console.log('Users inserted')}).catch((err) => {console.log(`Error users inserted: ${err}`)});
    await insertHead().then(() => {console.log('Head inserted')}).catch((err) => {console.log(`Error head inserted: ${err}`)});
    await insertMember().then(() => {console.log('Member inserted')}).catch((err) => {console.log(`Error member inserted: ${err}`)});
    await insertFamily().then(() => {console.log('Family inserted')}).catch((err) => {console.log(`Error family inserted: ${err}`)});
    await insertDriver().then(() => {console.log('Driver inserted')}).catch((err) => {console.log(`Error driver inserted: ${err}`)});
    await insertTruck().then(() => {console.log('Truck inserted')}).catch((err) => {console.log(`Error truck inserted: ${err}`)});
    await insertHistory().then(() => {console.log('History inserted')}).catch((err) => {console.log(`Error history inserted: ${err}`)});
}

export { populationBomb }