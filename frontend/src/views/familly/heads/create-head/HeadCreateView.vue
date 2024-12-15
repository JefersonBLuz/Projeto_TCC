<script lang="ts">
import UserService from '@/services/UsersService';
import AddressService from '@/services/AddressService';
import AddressCreateComponent from '@/components/address/create-address/AddressCreateComponent.vue';

export default {
    name: 'MemberFamilyCreateView',
    data() {
        return {
            headFamilly: {
                name: null,
                birthday: null,
                address: null,
                email: null,
                cpf: null,
                cellphone: null,
                created_by: null,
                updated_by: null,
            },
            familly: {
                name: null,
                headFamily: null,
                numberfamilly: null,
                idsensor: null,
                volume: null,
            },
            memberFamilly: [
                {
                    name: null,
                    birthday: null,
                    address: null,
                    cpf: null,
                    head_id: null,
                    created_by: null,
                    updated_by: null,
                }
            ],
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
        handleSubmitheadFamilly() {
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
        async submitNewUser() {
            try {
                const response = await this.submitNewAddress()
                console.log(response);

                this.headFamilly.address = response
                console.log(this.headFamilly);
                await UserService.postUser(this.headFamilly);
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
    <div class="flex flex-col justify-self-center w-full self-center justify-items-center">
        <p class="text-5xl mt-5 mb-5">Criação de Família</p>
        <hr class=" bg-gray-500 h-1 border-0">
        <main class="justify-center">
            <form v-on:submit.prevent="handleSubmitheadFamilly()" method="post">
                <!--Inicio de botões-->
                <div class="flex flex-col lg:flex-row content-center items-center justify-end my-2">
                    <button class="bg-yellow-100 rounded-lg justify-self-center w-3/12 content-center text-xl text-center text-red-950 h-12 hover:bg-yellow-700 mr-2">
                        Adicionar Membro
                    </button>
                    <router-link to="/users/list"
                        class="bg-red-400 rounded-lg justify-self-center w-2/12 content-center text-xl text-center text-red-950 h-12 hover:bg-red-700 mr-2">
                        Cancelar</router-link>
                    <button @click="submitNewUser"
                        class="bg-green-300 justify-self-center w-2/12 text-xl h-12 rounded-lg content-center hover:bg-green-600 text-green-950"
                        type="submit">Adicionar</button>
                </div>
                <!--Fim de botões-->
                <!--Informação de chefe de fámilia-->
                <section class="flex flex-col mt-4">
                    <h1
                        class="text-4xl border-x border-t bg-blue-300 text-blue-950 p-2 pl-4 rounded-t-xl border-gray-500">
                        Chefe de fámilia</h1>
                    <div class="border p-2 rounded-b-xl border-gray-500">
                        <div class="flex flex-col lg:flex-row">
                            <div class="basis-2/4 p-2">
                                <label for="nameuser" class="text-lg">Nome Completo</label><br>
                                <input class="inputForms" type="text" v-model="headFamilly.name"
                                    :class="{ 'is-invalid': isSubmitted }" id="nameuser" name="nameuser"
                                    placeholder="Nome completo">
                            </div>
                            <div class="basis-1/4 p-2 text-lg">
                                <label for="birthday" class="text-lg">Nascimento</label><br>
                                <input class="inputForms" type="text" v-model="headFamilly.birthday" id="birthday"
                                    name="birthday" placeholder="YYYY-MM-DD">
                            </div>
                            <div class="flex-1 p-2">
                                <label for="cpf" class="text-lg">CPF</label><br>
                                <input class="inputForms" type="text" v-model="headFamilly.cpf" id="cpf" name="cpf"
                                    placeholder="12312312355">
                            </div>
                        </div>
                        <div class="flex flex-col lg:flex-row">
                            <div class="flex-1 p-2">
                                <label for="email" class="text-lg">Email</label><br>
                                <input class="inputForms" type="text" v-model="headFamilly.email" id="email"
                                    name="email" placeholder="email@email.com">
                            </div>
                            <div class="flex-1 p-2">
                                <label for="cellphone" class="text-lg">Telefone</label><br>
                                <input class="inputForms" type="text" v-model="headFamilly.cellphone" id="cellphone"
                                    name="cellphone" placeholder="5577912341234">
                            </div>
                        </div>
                    </div>
                </section>
                <!--Fim Informação de chefe de fámilia-->

                <!--Div enderço Inicio-->
                <section class="flex flex-col mt-4">
                    <h1
                        class="text-4xl border-x border-t bg-blue-300 text-blue-950 p-2 pl-4 rounded-t-xl border-gray-500">
                        Endereço</h1>
                    <div class="border p-2 rounded-b-xl border-gray-500">
                        <div class="flex lg:flex-row flex-col">
                            <div class="flex-1 p-2">
                                <label for="cep" class="text-lg">CEP</label><br>
                                <input @keyup="getEndereco" class="inputForms" type="text" v-model="addressForm.cep"
                                    id="cep" name="cep" placeholder="Digita o CEP">
                            </div>
                            <div class="flex-1 p-2">
                                <label for="city" class="text-lg">Cidade</label><br>
                                <input class="inputForms" type="text" v-model="addressForm.city" id="city" name="city"
                                    placeholder="">
                            </div>
                            <div class="p-2">
                                <label for="state" class="text-lg">UF</label><br>
                                <input class="inputForms" type="state" v-model="addressForm.state">
                            </div>
                        </div>
                        <div class="flex lg:flex-row flex-col">
                            <div class="flex-1 p-2">
                                <label for="neighborhood" class="text-lg">Bairro</label><br>
                                <input class="inputForms" type="text" v-model="addressForm.neighborhood"
                                    id="neighborhood" name="neighborhood" placeholder="">
                            </div>
                            <div class="flex-1 p-2">
                                <label for="street" class="text-lg">Rua</label><br>
                                <input class="inputForms" type="text" v-model="addressForm.street" id="street"
                                    name="street" placeholder="">
                            </div>
                            <div class="p-2">
                                <label for="number" class="text-lg">Número</label><br>
                                <input class="inputForms" type="text" v-model="addressForm.number" id="number"
                                    name="number" placeholder="">
                            </div>
                        </div>
                    </div>
                </section>
                <!--Fim endereço-->
            </form>
        </main>
    </div>
</template>