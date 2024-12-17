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
const getHead = async () => {
    try {
        const response = await fetch('http://localhost:8082/heads/view', {
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
const getHeadID = async (id: number) => {
    try {
        const response = await fetch(`http://localhost:8082/heads/view/${id}`, {
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
const postHead = async (head: any) => {
    try {
        const response = await fetch('http://localhost:8082/heads/createHead', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(head)
        });

        const res = await response.json()
        if (!response.ok) {
            return res;
        }
        console.log(res)
        alert('Criado com sucesso HEAD')
        return res
    } catch (error) {
        return console.error('Erro a fazer a requisição: ', error)
    }

}

/**
 * Método responsável por atualizar um determinado 'Usuário' por 'Id'.
 * (PUT): localhost:3000/users/update/:id
 */
const updateHead = async (head: any) => {
    try {
        const id: number = head.id;
        const response = await fetch(`http://localhost:8082/heads/update/${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(head)
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
const deleteHead = async (id: number) => {
    try {
        const response = await fetch(`http://localhost:8082/heads/delete/${id}`, {
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
const getHeadAddressAll = async () => {
    try {
        const response = await fetch(`http://localhost:8082/heads/viewAddress`, {
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
 * Método responsável por listar todas Fámilias com membros.
 * (GET): localhost:3000/heads/viewHeads/:name
 */
const getHeadWhitMemberAll = async () => {
    try {
        const response = await fetch(`http://localhost:8082/heads/viewMembers`, {
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
const getHeadAddress = async (name: string) => {
    try {
        const response = await fetch(`http://localhost:8082/heads/viewaddress/${name}`, {
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
const getHeadAddressId = async (id: string) => {
    try {
        const response = await fetch(`http://localhost:8082/heads/viewaddressid/${id}`, {
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
export default { postHead, getHead, getHeadID, updateHead, deleteHead, getHeadAddressAll, getHeadAddress, getHeadAddressId, getHeadWhitMemberAll }