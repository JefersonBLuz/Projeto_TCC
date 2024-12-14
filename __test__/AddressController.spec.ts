const AddressController = require ("../api/src/controllers/AddressController")

const rows = require("../api/src/controllers/AddressController")





describe("Address Controlller", () => {
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
        await AddressController.createAddress(req, res)

        expect(rows.add).toHaveBeenCalledTimes(1)
        expect(res.status).toHaveBeenCalledWith(201)
    })
})