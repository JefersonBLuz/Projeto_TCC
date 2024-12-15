<script lang="ts">
import MemberService from '@/services/MembersService';
import AddressService from '@/services/AddressService';
import AddressCreateComponent from '@/components/address/create-address/AddressCreateComponent.vue';

export default {
    name: 'MemberFamilyCreateView',
    data() {
        return {
            memberForm: {
            name: null,
            address: 1,
            birthday: null,
            cellphone: null,
            cpf: null,
            email: null,
            head_id: null,
            created_by: null,
            updated_by: null,
            },
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
        memberForm: {
            name: 'required'
        },
    },
    methods: {
        handleSubmitmemberForm() {
            this.isSubmitted = true
            console.log('Submit successfull')
        },
        async submitNewAddress() {
            try {
                console.log(this.addressForm);
                const res = await AddressService.postAddress(this.addressForm)
                console.log(res.body.address.rows[0].id)
                return res.body.address.rows[0].id
            } catch (error) {

            }
        },
        async submitNewmember() {
            try {
                const response = await this.submitNewAddress()
                console.log(response);
                
                this.memberForm.address = response
                console.log(this.memberForm);
                await memberService.postmember(this.memberForm);
                this.$router.push({
                    name: 'Listar Membros da Família'
                })
            } catch (error) {
                console.error('Erro:', error)
                return error
            }
        }
    },
};
</script>
<template>
    <div class="flex flex-col justify-self-center">
        <p class="text-5xl mt-5 mb-5">Cadastrar Membro da Família</p>
        <form v-on:submit.prevent="handleSubmitMemberForm()" method="post">
            <div class="flex">
                <div class="flex-1 p-2">
                    <label for="nameMember">Nome Completo</label>
                    <input type="text" v-model="memberForm.name" :class="{ 'is-invalid': isSubmitted }" id="nameMember"
                        name="nameMember" placeholder="Nome completo">
                </div>
                <div class="flex-1 p-2">
                    <label for="cpf">CPF</label>
                    <input type="text" v-model="memberForm.cpf" id="cpf" name="cpf" placeholder="12312312355">
                </div>
                <div class="flex-1 p-2">
                    <label for="birthday">Nascimento</label>
                    <input type="text" v-model="memberForm.birthday" id="birthday" name="birthday"
                        placeholder="YYYY-MM-DD">
                </div>
            </div>
            <div class="flex">
                <div class="flex-1 p-2">
                    <label for="cellphone">Telefone</label>
                    <input type="text" v-model="memberForm.cellphone" id="cellphone" name="cellphone"
                        placeholder="5577912341234">
                </div>
                <div class="flex-1 p-2">
                    <label for="email">Email</label>
                    <input type="text" v-model="memberForm.email" id="email" name="email" placeholder="email@email.com">
                </div>
            </div>
            <div>
                <div class="flex-1 p-2">
                     <label for="head_id">Responsável</label> <!-- Referência ao headFamily -->
                    <input type="text" v-model="memberForm.head_id">
                </div>
            </div>
            <div class="flex">
                
                <div class="flex-1 p-2">
                    <label for="created_by">Criado por</label>
                    <input type="text" v-model="memberForm.created_by">
                </div>
                <div class="flex-1 p-2">
                    <label for="updated_by">Atualizado em</label>
                    <input type="text" v-model="memberForm.updated_by">
                </div>
                <!-- <div class="flex-1 p-2">
                    <label for="active">Ativo</label>
                    <input type="checkbox" v-model="memberForm.active">
                </div> -->
            </div>
            <br>
            <!-- <AddressCreateComponent /> -->
            <hr>
            <!--Div enderço Inicio-->
            <div class="flex">
                <div class="flex-1 p-2">
                    <label for="cep">CEP</label>
                    <input type="text" v-model="addressForm.cep" id="cep" name="cep" placeholder="45000000">
                </div>
                <div class="flex-1 p-2">
                    <label for="number">Número</label>
                    <input type="text" v-model="addressForm.number" id="number" name="number" placeholder="000">
                </div>
            </div>
            <div class="flex">
                <div class="flex-1 p-2">
                    <label for="street">Rua</label>
                    <input type="text" v-model="addressForm.street" id="street" name="street"
                        placeholder="Av. Rua">
                </div>
                <div class="flex-1 p-2">
                    <label for="neighborhood">Bairro</label>
                    <input type="text" v-model="addressForm.neighborhood" id="neighborhood" name="neighborhood"
                        placeholder="Bairro">
                </div>
            </div>
            <div class="flex">
                <div class="flex-1 p-2">
                    <label for="city">Cidade</label>
                    <input type="text" v-model="addressForm.city" id="city" name="city" placeholder="Vitória da Conquista-BA">
                </div>
                <div class="flex-1 p-2">
                    <label for="state">Estado</label>
                    <input type="state" v-model="addressForm.state">
                </div>
            </div>
            <div class="flex">
                <div class="flex-1 p-2">
                    <label for="latitude">Latitude</label>
                    <input type="text" v-model="addressForm.latitude">
                </div>
                <div class="flex-1 p-2">
                    <label for="longitude">Longitude</label>
                    <input type="text" v-model="addressForm.longitude">
                </div>
            </div>
            <!--Fim endereço-->
            <div class="flex content-center items-center justify-center">
                <button @click="submitNewmember"
                    class="blue bg-blue-300 justify-self-center w-1/3 text-xl h-12 rounded-lg"
                    type="submit">Enviar</button>
            </div>
        </form>
    </div>
</template>