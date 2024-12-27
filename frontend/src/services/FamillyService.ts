/**
 * Arquivo: src/services/UsersServices
 * Descrição: Arquivo responsável pelos métodos de requisições das Apís via HTTP
 * Data: 15/12/2024
 * Autor: Jeferson Braga
 */


/**
 * Método responsável por listar todos os 'Usuários' sem 'Address'.
 * (GET): localhost:3000/users/view
 */
const getFamilyAll = async () => {
    try {
        const response = await fetch('http://localhost:8082/family/view', {
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
const getFamilyName = async (name: string) => {
    try {
        const response = await fetch(`http://localhost:8082/family/view/${name}`, {
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
const postFamily = async (head: any) => {
    try {
        const response = await fetch('http://localhost:8082/family/createFamily', {
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
        return res
    } catch (error) {
        return console.error('Erro a fazer a requisição: ', error)
    }

}

/**
 * Método responsável por atualizar um determinado 'Usuário' por 'Id'.
 * (PUT): localhost:3000/users/update/:id
 */
const updateFamily = async (head: any) => {
    try {
        const id: number = head.id;
        const response = await fetch(`http://localhost:8082/family/update/${id}`, {
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
const deleteFamily = async (id: number) => {
    try {
        const response = await fetch(`http://localhost:8082/family/delete/${id}`, {
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

export default { getFamilyAll, getFamilyName, postFamily, deleteFamily, updateFamily}