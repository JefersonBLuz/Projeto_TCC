/**
 * Arquivo: src/services/UsersServices
 * Descrição: Arquivo responsável pelos métodos de requisições das Apís via HTTP
 * Data: 06/12/2024
 * Autor: Jeferson Braga
 */


/**
 * Método responsável por listar todos os 'Usuários' sem 'Address'.
 * (GET): localhost:3000/users/view
 */
const getTruck = async () => {
    try {
        const response = await fetch('http://localhost:8082/trucks/list-Truck', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response) {
            return 'Vazio'
        }
        const res = await response.json();
        return res;
    } catch (error) {
        return console.error('Erro: ', error)
    }
};

/**
 * Método responsável por listar 'Usuário' por 'name' sem 'Address'.
 * (GET): localhost:3000/users/view/:name
 */
const getTruckName = async (name: string) => {
    try {
        const response = await fetch(`http://localhost:8082/trucks/list-Truck/${name}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const res = await response.json()
        return res;
    } catch (error) {
        return console.error('Erro: ', error)
    }
};

/**
 * Método responsável por criar um novo(a) 'Usuário'
 * (POST): localhost:3000/users/createUser
 */
const postTruck = async (Truck: any) => {
    try {
        const response = await fetch('http://localhost:8082/trucks/create-Truck', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Truck)
        });

        const res = await response.json()
        if (!response.ok) {
            return res;
        }
        console.log(res)
        return alert('Criado com sucesso: ')
    } catch (error) {
        return console.error('Erro a fazer a requisição: ', error)
    }

}

/**
 * Método responsável por atualizar um determinado 'Usuário' por 'Id'.
 * (PUT): localhost:3000/users/update/:id
 */
const updateTruck = async (Truck: any) => {
    try {
        const id: number = Truck.id;
        const response = await fetch(`http://localhost:8082/trucks/update-Truck/${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Truck)
        })
        const res = await response.json()
        if (!response.ok) {
            return res;
        }
        return alert('Atualizado com sucesso')
    } catch (error) {
        return console.error('Erro a fazer a requisição: ', error)
    }
}

/**
 * Método responsável por excluir um determinado 'Usuário' por 'Id'.
 * (DELETE): localhost:3000/users/delete/:id
 */
const deleteTruck = async (id: number) => {
    try {
        const response = await fetch(`http://localhost:8082/trucks/delete/${id}`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const res = await response.json()
        return res
    } catch (error) {
        return console.error('Erro a fazer a requisição: ', error)
    }
}

/**
 * Método responsável por listar todos os 'Usuários' com 'Address'
 * (GET): localhost:3000/users/viewaddress
 */
const getTruckAddressAll = async () => {
    try {
        const response = await fetch(`http://localhost:8082/trucks/viewaddress`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (!response) {
            return 'Vazio'
        }
        const res = await response.json();
        return res;
    } catch (error) {
        return console.error('Erro: ', error)
    }
}

/**
 * Método responsável por listar 'Usuário' por 'name' com 'Address'.
 * (GET): localhost:3000/users/viewaddress/:name
 */
const getTruckAddress = async (name: string) => {
    try {
        const response = await fetch(`http://localhost:8082/trucks/viewaddress/${name}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const res = await response.json()
        return res;
    } catch (error) {
        return console.error('Erro: ', error)
    }
}

/**
 * Método responsável por listar 'Usuário' por 'name' com 'Address'.
 * (GET): localhost:3000/users/viewaddressid/:id
 */
const getTruckAddressId = async (id: string) => {
    try {
        const response = await fetch(`http://localhost:8082/trucks/viewaddressid/${id}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const res = await response.json()
        return res;
    } catch (error) {
        return console.error('Erro: ', error)
    }
}
export default { postTruck, getTruck, getTruckName, updateTruck, deleteTruck, getTruckAddressAll, getTruckAddress, getTruckAddressId }