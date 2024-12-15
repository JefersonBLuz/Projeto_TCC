const address.controller  = require ("../address.controller");
//const address = require("../address.controller")
const db = require("../address.controller")

jest.mock("../config/model/schema")




describe("Address Controller", () => {
    test("Adiciona endereço com sucesso", async () => {
        const req = {
            body: {
                cep: "12003-123",
                number: "10",
                street: "Rua B",
                neighborhood: "Bela Vista",
                city: "Vitória da Conquista",
                state: "BA",
                latitude: "000000",
                longitude: "000000"
            }
        }
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn
        }
        await address.controller.createAddress(req, res)

        
        expect(res.status).toBe(201)
    })
})


 


