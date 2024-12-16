/**
 * Arquivo: HeadCreateView.ts
 * Descrição: Arquivo responsavel por conter todas configurações da página cadastrar família.
 * Data: 16/12/2024
 * Autor: Jeferson Braga
 */

import getCord from '@/utils/cord'
import Services from '@/services/Services';


export default {
    name: 'MemberFamilyCreateView',
    data() {
        return {
            headFamily: {
                name: null,
                birthday: null,
                address: 1,
                email: null,
                cpf: null,
                cellphone: null,
                created_by: null,
                updated_by: null,
            },
            family: {
                name: null,
                headFamily: 0,
                numberfamily: 0,
                idsensor: null,
                region: '',
                volume_actual: 0,
                volume_need: 0,
            },
            memberFamily: [],
            addressForm: {
                cep: null,
                number: null,
                street: null,
                neighborhood: null,
                city: null,
                state: null,
                latitude: null,
                longitude: null
            },
            isSubmitted: false,
        };
    },
    validations: {
        headFamilly: {
            name: 'required'
        },
    },
    methods: {
        async dropMember() {
            this.memberFamily.slice()
        },
        async addSpaceMember() {
            this.memberFamily.push({
                name: null,
                birthday: null,
                address: null,
                cpf: null,
                head_id: null,
                created_by: null,
                updated_by: null,
            })
        },
        handleSubmitheadFamily() {
            this.isSubmitted = true
            console.log('Submit successfull')
        },
        async submitNewAddress() {
            try {
                const res = await Services.Address.postAddress(this.addressForm)
                return res
            } catch (error) {
                console.error('Erro: ', error)
            }
        },
        async submitMemberFamily(addressID: number, head: number) {
            this.memberFamily.forEach(async (elment) => {
                elment.address = addressID;
                elment.head_id = head;
            }
        )
        for (let index = 0; index < this.memberFamily.length; index++) {
            await Services.Members.postMember(this.memberFamily[index]);
            }
            console.log('Membros registrados');
        },
        async submitHeadFamily(addressID: number) {
            this.headFamily.address = addressID;
            const res = await Services.Heads.postHead(this.headFamily)
            return res
        },
        async submitNewFamily() {
            try {
                // Método para criar endereço e retornar valores.
                const address = await this.submitNewAddress()
                // Método para criar Chefe de família e retornar valores
                const addressID: number = address.body.address.rows[0].id
                const headFamily = await this.submitHeadFamily(addressID)
                const headID: number = headFamily.body.head.rows[0].id
                // Método para criar membros de famílias.
                await this.submitMemberFamily(addressID, headID)

                // Instanciando informações da famílias.
                this.family.name = headFamily.body.head.rows[0].name
                this.family.region = address.body.address.rows[0].neighborhood;
                this.family.numberfamilly = this.memberFamily.length + 1
                this.family.volume_need = this.family.numberfamily * 30 * 30
                this.family.volume_actual = this.family.volume_need * 0.7
                this.family.headFamily = headID
                
                // Método para criar família.
                await Services.Familly.postFamily(this.family)

                // Retornar para listagem de Fampilia
                this.$router.push({
                    name: 'Listar Familiar Responsável'
                })
            } catch (error) {
                console.error('Erro:', error)
                return error
            }
        },
        async getEndereco() {
            try {
                const query: string = String(this.addressForm.cep)
                const response = await getCord.getCord(query);
                this.addressForm = { ...response }

            } catch (error) {

            }
        },
    },
};