import { db } from './db';
import { address, users, drivers, headFamily, familyMember, trucks, familly, history } from '../config/model/schema';

async function insertAddress() {
    await db.insert(address).values({
        cep: "45117-000",
        number: 100,
        street: "Estrada Itapirema",
        neighborhood: "Itapirema",
        city: "Vitória da Conquista",
        state: "Bahia",
        latitude: -14.8619237,
        longitude: -40.8445346
    });
    await db.insert(address).values({
        cep: "45102-000",
        number: 200,
        street: "Estrada São Sebastião",
        neighborhood: "São Sebastião",
        city: "Vitória da Conquista",
        state: "Bahia",
        latitude: -14.7675223,
        longitude: -40.6700489
    });
    await db.insert(address).values({
        cep: "45115-000",
        number: 300,
        street: "Estrada José Gonçalves",
        neighborhood: "José Gonçalves",
        city: "Vitória da Conquista",
        state: "Bahia",
        latitude: -14.7246780,
        longitude: -40.7327744
    });
    await db.insert(address).values({
        cep: "45118-000",
        number: 400,
        street: "Estrada Caiçara",
        neighborhood: "Caiçara",
        city: "Vitória da Conquista",
        state: "Bahia",
        latitude: -14.8619237,
        longitude: -40.8445346
    });
    await db.insert(address).values({
        cep: "45103-000",
        number: 500,
        street: "Estrada Cabeceira da Jibóia",
        neighborhood: "Cabeceira da Jibóia",
        city: "Vitória da Conquista",
        state: "Bahia",
        latitude: -15.0711920,
        longitude: -40.8171757
    });
    await db.insert(address).values({
        cep: "45105-000",
        number: 600,
        street: "Estrada Iguá",
        neighborhood: "Iguá",
        city: "Vitória da Conquista",
        state: "Bahia",
        latitude: -14.9412600,
        longitude: -40.9457806
    });
    await db.insert(address).values({
        cep: "45065-000",
        number: 700,
        street: "Frei Benjamin",
        neighborhood: "Patagônia",
        city: "Vitória da Conquista",
        state: "Bahia",
        latitude: -14.8753971,
        longitude: -40.8601620
    });
}

async function insertUsers() {
    await db.insert(users).values({
        name: "Maria",
        active: true,
        address: 7,
        birthday: "1998-08-20",
        cellphone: "99123-4567",
        cpf: "001.002.003-04",
        email: "maria@mail.com",
        password: "123456",
        privileges: "admin"
    });
    await db.insert(users).values({
        name: "João",
        active: true,
        address: 7,
        birthday: "1988-06-10",
        cellphone: "99765-4321",
        cpf: "002.003.004-05",
        email: "joao@mail.com",
        password: "123456",
        privileges: "worker"
    });
    await db.insert(users).values({
        name: "Junior",
        active: false,
        address: 7,
        birthday: "1999-08-11",
        cellphone: "99123-7654",
        cpf: "003.004.005-06",
        email: "junior@mail.com",
        password: "123456",
        privileges: "worker"
    });
}

async function insertHead() {
    await db.insert(headFamily).values({
        name: "Marta",
        address: 1,
        birthday: "1976-08-01",
        cellphone: "99234-5678",
        cpf: "004.005.006-71",
        email: "marta@gmail.com",
        created_by: 1,
        updated_by: null
    });
    await db.insert(headFamily).values({
        name: "Josefa",
        address: 2,
        birthday: "1980-01-01",
        cellphone: "99345-6789",
        cpf: "005.006.007-08",
        email: "josefa@gmail.com",
        created_by: 1,
        updated_by: null
    });
    await db.insert(headFamily).values({
        name: "Ana",
        address: 3,
        birthday: "1995-06-05",
        cellphone: "99456-7890",
        cpf: "006.007.008-09",
        email: "ana@gmail.com",
        created_by: 1,
        updated_by: null
    });
    await db.insert(headFamily).values({
        name: "Roberta",
        address: 4,
        birthday: "1966-04-03",
        cellphone: "9901-2345",
        cpf: "007.008.009-10",
        email: "roberta@gmail.com",
        created_by: 2,
        updated_by: null
    });
    await db.insert(headFamily).values({
        name: "Catarina",
        address: 5,
        birthday: "1976-05-01",
        cellphone: "98234-5678",
        cpf: "008.009.010-11",
        email: "catarina@gmail.com",
        created_by: 2,
        updated_by: null
    });
    await db.insert(headFamily).values({
        name: "Josefina",
        address: 6,
        birthday: "1976-08-07",
        cellphone: "97234-5678",
        cpf: "004.005.006-72",
        email: "josefina@gmail.com",
        created_by: 3,
        updated_by: null
    });
    await db.insert(headFamily).values({
        name: "Josiane",
        address: 6,
        birthday: "1977-07-07",
        cellphone: "97234-5679",
        cpf: "004.005.006-73",
        email: "josiane@gmail.com",
        created_by: 3,
        updated_by: null
    });
}

async function insertMember() {
    //f1
    await db.insert(familyMember).values({
        name: "Carlos",
        address: 1,
        birthday: "2004-09-12",
        cpf: "123.456.789-10",
        head_id: 1,
        created_by: 1,
        updated_by: null
    });
    await db.insert(familyMember).values({
        name: "Mauricio",
        address: 1,
        birthday: "2004-09-12",
        cpf: "234.567.891-01",
        head_id: 1,
        created_by: 1,
        updated_by: null
    });
    //f2
    await db.insert(familyMember).values({
        name: "Juan Carlos",
        address: 2,
        birthday: "2003-09-12",
        cpf: "345.678.910-11",
        head_id: 2,
        created_by: 1,
        updated_by: null
    }); 
    await db.insert(familyMember).values({
        name: "Carla",
        address: 2,
        birthday: "2002-08-12",
        cpf: "456.789.101-11",
        head_id: 2,
        created_by: 1,
        updated_by: null
    });
    await db.insert(familyMember).values({
        name: "Carlinhos",
        address: 2,
        birthday: "2007-06-06",
        cpf: "567.891.011-12",
        head_id: 2,
        created_by: 1,
        updated_by: null
    }); 
    //f3
    await db.insert(familyMember).values({
        name: "Carlito",
        address: 3,
        birthday: "2012-09-12",
        cpf: "678.910.111-21",
        head_id: 3,
        created_by: 1,
        updated_by: null
    });
    //f4
    await db.insert(familyMember).values({
        name: "Carlota",
        address: 4,
        birthday: "2002-10-12",
        cpf: "789.101.112-13",
        head_id: 4,
        created_by: 1,
        updated_by: null
    }); 
    await db.insert(familyMember).values({
        name: "Carmen",
        address: 4,
        birthday: "2004-12-12",
        cpf: "891.011.121-31",
        head_id: 4,
        created_by: 1,
        updated_by: null
    }); 
    //f5
    await db.insert(familyMember).values({
        name: "Charles",
        address: 5,
        birthday: "2000-09-12",
        cpf: "910.111.213-14",
        head_id: 5,
        created_by: 2,
        updated_by: null
    }); 
    await db.insert(familyMember).values({
        name: "Cordelius",
        address: 5,
        birthday: "2001-09-12",
        cpf: "101.112.131-41",
        head_id: 5,
        created_by: 2,
        updated_by: null
    }); 
    //f6
    await db.insert(familyMember).values({
        name: "Carlos II",
        address: 6,
        birthday: "2004-09-12",
        cpf: "011.121.314-15",
        head_id: 6,
        created_by: 2,
        updated_by: null
    });
    //f7
    await db.insert(familyMember).values({
        name: "Coriolanos",
        address: 6,
        birthday: "2002-10-02",
        cpf: "111.213.141-51",
        head_id: 7,
        created_by: 2,
        updated_by: null
    });
    await db.insert(familyMember).values({
        name: "Camila",
        address: 6,
        birthday: "1997-09-12",
        cpf: "112.131.415-16",
        head_id: 7,
        created_by: 2,
        updated_by: null
    });
}

async function insertFamily() {
    await db.insert(familly).values({
        name: "Silva",
        headFamily: 1,
        numberfamily: 3,
        idsensor: 111,
        volume_actual: 70,
        volume_need: 120
    });
    await db.insert(familly).values({
        name: "Costa",
        headFamily: 2,
        numberfamily: 4,
        idsensor: 222,
        volume_actual: 30,
        volume_need: 150
    });
    await db.insert(familly).values({
        name: "Carvalho",
        headFamily: 3,
        numberfamily: 2,
        idsensor: 333,
        volume_actual: 100,
        volume_need: 60
    });
    await db.insert(familly).values({
        name: "Souza",
        headFamily: 4,
        numberfamily: 3,
        idsensor: 444,
        volume_actual: 50,
        volume_need: 120
    });
    await db.insert(familly).values({
        name: "Pereira",
        headFamily: 5,
        numberfamily: 3,
        idsensor: 555,
        volume_actual: 130,
        volume_need: 120
    });
    await db.insert(familly).values({
        name: "Bittencourt",
        headFamily: 6,
        numberfamily: 2,
        idsensor: 666,
        volume_actual: 60,
        volume_need: 60
    });
    await db.insert(familly).values({
        name: "Vasconcelos",
        headFamily: 7,
        numberfamily: 3,
        idsensor: 777,
        volume_actual: 100,
        volume_need: 120
    });
}

async function insertDriver() {
    await db.insert(drivers).values({
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
    });
    await db.insert(drivers).values({
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
    });
}

async function insertTruck() {
    await db.insert(trucks).values({
        plate: "XPG4J0",
        model: "Volvo FM",
        year: "2013-10-12",
        owner: 1,
        created_by: 2,
        updated_by: null
    });  
    await db.insert(trucks).values({
        plate: "GPG8Y9",
        model: "Volvo FMX",
        year: "2015-06-08",
        owner: 2,
        created_by: 2,
        updated_by: null
    });
}

async function insertHistory() {
    // await db.insert(history).values({
    //     familly_id: 1,
    //     date: "2024-10-17",
    //     driver: 1,
    //     truck: 1,
    //     volume: 200
    // });
    // await db.insert(history).values({
    //     familly_id: 1,
    //     date: "2024-09-17",
    //     driver: 2,
    //     truck: 2,
    //     volume: 200
    // });
    await db.insert(history).values({
        familly_id: 1,
        date: "2024-12-17",
        driver: 1,
        truck: 1,
        volume: 200
    });
    await db.insert(history).values({
        familly_id: 2,
        date: "2024-12-10",
        driver: 1,
        truck: 1,
        volume: 250
    });
    await db.insert(history).values({
        familly_id: 3,
        date: "2024-12-15",
        driver: 2,
        truck: 2,
        volume: 150
    });
    await db.insert(history).values({
        familly_id: 4,
        date: "2024-12-13",
        driver: 1,
        truck: 1,
        volume: 200
    });
    await db.insert(history).values({
        familly_id: 5,
        date: "2024-12-15",
        driver: 1,
        truck: 1,
        volume: 200
    });
    await db.insert(history).values({
        familly_id: 6,
        date: "2024-12-13",
        driver: 2,
        truck: 2,
        volume: 150
    });
    await db.insert(history).values({
        familly_id: 7,
        date: "2024-12-17",
        driver: 2,
        truck: 2,
        volume: 200
    });
}

const populationBomb = async () => {
    
    await insertAddress();
    await insertUsers();
    await insertHead();
    await insertMember();
    await insertFamily();
    await insertDriver();
    await insertTruck();
    await insertHistory();

}

export default populationBomb