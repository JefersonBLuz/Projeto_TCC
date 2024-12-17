import addressController from "../address.controller"
import createAddress from "../address.controller"


jest.mock("../address.controller", () => {
    createAddress: jest.fn()
})




describe("Address Controller", () => {
    test("Adiciona endereço com sucesso", async () => {
        const req = {
            body: {
            cep: "13003-123",
            number: "10",
            street: "Rua B",
            neighborhood: "Bela Vista",
            city: "Vitoria da Conquista",
            state: "BA",
            latitude: "000000",
            longitude: "000000"
            
            }
        }

        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        }

      await addressController.createAddress(req, res)

        
      expect(res.status).toBe(201)

    })
})

        


 


