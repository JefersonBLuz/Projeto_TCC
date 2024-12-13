<script lang="ts">
import UserService from '@/services/UsersService';
import AddressService from '@/services/AddressService';
import getCord from '@/utils/cord'

export default {
    name: 'UserCreateView',
    data() {
        return {
            userForm: {
                name: null,
                active: null,
                address: 1,
                cellphone: null,
                birthday: null,
                cpf: null,
                email: null,
                password: null,
                privileges: null,
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
            isRouter: {},
        };
    },
    // mounted() {
    //     this.test()
    // },
    validations: {
        userForm: {
            name: 'required'
        },
    },
    methods: {
        handleSubmitUserForm() {
            this.isSubmitted = true
            console.log('Submit successfull')
        },
        async test() {
            try {
                const query: string = String(this.addressForm.cep)
                const response = await getCord.getCord(query);
                this.addressForm = { ...response }

            } catch (error) {

            }
        }
        ,
        async submitNewAddress() {
            try {
                const res = await AddressService.postAddress(this.addressForm);
                this.isRouter = {name: 'Listar Usuários'};

                return res.body.address.rows[0].id
            } catch (error) {
                this.isRouter = {name: 'Criar usuário'};
                return alert('erro')
            }
        },
        async submitNewUser() {
            try {
                const response = await this.submitNewAddress()
                this.userForm.address = response
                await UserService.postUser(this.userForm);
                this.$router.push(
                    this.isRouter
                )
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
        <p class="text-5xl mt-5 mb-5">Criação de Usuário</p>
        <hr>
        <main class="justify-center">
            <form v-on:submit.prevent="handleSubmitUserForm()" method="post">
                <!--Informação pessoais-->
                <div class="flex flex-col lg:flex-row">
                    <div class="basis-2/4 p-2">
                        <label for="nameuser" class="text-lg">Nome Completo</label>
                        <input class="inputForms" type="text" v-model="userForm.name"
                            :class="{ 'is-invalid': isSubmitted }" id="nameuser" name="nameuser"
                            placeholder="Nome completo">
                    </div>
                    <div class="basis-1/4 p-2 text-lg">
                        <label for="birthday" class="text-lg">Nascimento</label>
                        <input class="inputForms" type="text" v-model="userForm.birthday" id="birthday" name="birthday"
                            placeholder="YYYY-MM-DD">
                    </div>
                    <div class="flex-1 p-2">
                        <label for="cpf" class="text-lg">CPF</label>
                        <input class="inputForms" type="text" v-model="userForm.cpf" id="cpf" name="cpf"
                            placeholder="12312312355">
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row">
                    <div class="flex-1 p-2">
                        <label for="email" class="text-lg">Email</label>
                        <input class="inputForms" type="text" v-model="userForm.email" id="email" name="email"
                            placeholder="email@email.com">
                    </div>
                    <div class="flex-1 p-2">
                        <label for="cellphone" class="text-lg">Telefone</label>
                        <input class="inputForms" type="text" v-model="userForm.cellphone" id="cellphone"
                            name="cellphone" placeholder="5577912341234">
                    </div>
                    <div class="flex-1 p-2">
                        <label for="password" class="text-lg">Senha</label>
                        <input class="inputForms" type="password" v-model="userForm.password">
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row">
                    <div class="flex-1 p-2">
                        <label for="privileges" class="text-lg">Privilegios</label>
                        <input class="inputForms" type="text" v-model="userForm.privileges">
                    </div>
                </div>
                <br>
                <hr>
                <!--Div enderço Inicio-->
                <section class="flex flex-col">
                    <div class="flex lg:flex-row flex-col">
                        <div class="flex-1 p-2">
                            <label for="cep" class="text-lg">CEP</label>
                            <input @keyup="test" class="inputForms" type="text" v-model="addressForm.cep" id="cep"
                                name="cep" placeholder="Digita o CEP">
                        </div>
                        <div class="flex-1 p-2">
                            <label for="city" class="text-lg">Cidade</label>
                            <input class="inputForms" type="text" v-model="addressForm.city" id="city" name="city"
                                placeholder="">
                        </div>
                        <div class="p-2">
                            <label for="state" class="text-lg">UF</label>
                            <input class="inputForms" type="state" v-model="addressForm.state">
                        </div>
                    </div>
                    <div class="flex lg:flex-row flex-col">
                        <div class="flex-1 p-2">
                            <label for="neighborhood" class="text-lg">Bairro</label>
                            <input class="inputForms" type="text" v-model="addressForm.neighborhood" id="neighborhood"
                                name="neighborhood" placeholder="">
                        </div>
                        <div class="flex-1 p-2">
                            <label for="street" class="text-lg">Rua</label>
                            <input class="inputForms" type="text" v-model="addressForm.street" id="street" name="street"
                                placeholder="">
                        </div>
                        <div class="p-2">
                            <label for="number" class="text-lg">Número</label>
                            <input class="inputForms" type="text" v-model="addressForm.number" id="number" name="number"
                                placeholder="">
                        </div>
                    </div>
                </section>
                <!--Fim endereço-->
                <div class="flex content-center items-center justify-center py-5">
                    <router-link to="/users/list"> Cancelar</router-link>
                    <button @click="submitNewUser"
                        class="blue bg-blue-300 justify-self-center w-1/3 text-xl h-12 rounded-lg"
                        type="submit">Enviar</button>
                </div>
            </form>
        </main>
    </div>
</template>