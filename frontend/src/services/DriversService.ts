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
const getDriver = async () => {
    try {
        const response = await fetch('http://localhost:8082/drivers/list-Driver', {
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
const getDriverName = async (name: string) => {
    try {
        const response = await fetch(`http://localhost:8082/drivers/list-Driver/${name}`, {
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
const postDriver = async (driver: any) => {
    try {
        const response = await fetch('http://localhost:8082/drivers/create-Driver', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(driver)
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
const updateDriver = async (driver: any) => {
    try {
        const id: number = driver.id;
        const response = await fetch(`http://localhost:8082/drivers/update-Driver/${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(driver)
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
const deleteDriver = async (id: number) => {
    try {
        const response = await fetch(`http://localhost:8082/drivers/delete/${id}`, {
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
const getDriverAddressAll = async () => {
    try {
        const response = await fetch(`http://localhost:8082/drivers/viewaddress`, {
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
const getDriverAddress = async (name: string) => {
    try {
        const response = await fetch(`http://localhost:8082/drivers/viewaddress/${name}`, {
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
const getDriverAddressId = async (id: string) => {
    try {
        const response = await fetch(`http://localhost:8082/drivers/viewaddressid/${id}`, {
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
export default { postDriver, getDriver, getDriverName, updateDriver, deleteDriver, getDriverAddressAll, getDriverAddress, getDriverAddressId }