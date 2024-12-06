/**
 * Arquivo: src/services/AddressServices
 * Descrição: Arquivo responsável pelos métodos de requisições das Apís via HTTP
 * Data: 06/12/2024
 * Autor: Jeferson Braga
 */

/**
 * Método responsável por criar um novo(a) 'Address'
 * (POST): localhost:3000/address/createAddress
 */
const postAddress = async (address: any) => {
    try {
        const response = await fetch('http://localhost:8082/address/createAddress', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(address)
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
 * Método responsável por atualizar um determinado 'Address' por 'Id'.
 * (PUT): localhost:3000/address/update/:id
 */
const updateAddress = async (address: any) => {
    try {
        const id: number = address.id;
        const response = await fetch(`http://localhost:8082/address/update/${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(address)
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
 * Método responsável por listar 'Address' por 'Id'.
 * (GET): localhost:3000/address/view/:id
 */
const getAddressId = async (id: string) => {
    try {
        const response = await fetch(`http://localhost:8082/address/view/${id}`, {
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

export default { getAddressId, updateAddress, postAddress}