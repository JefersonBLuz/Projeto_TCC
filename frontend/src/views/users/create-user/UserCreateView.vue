<script lang="ts">
import UserService from '@/services/UsersService';
import AddressService from '@/services/AddressService';
import AddressCreateComponent from '@/components/address/create-address/AddressCreateComponent.vue';

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
        };
    },
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
        async submitNewAddress() {
            try {
                const res = await AddressService.postAddress(this.addressForm)
                this.$router.push({
                    name: 'Listar Usuários'
                })
                return res.body.address.rows[0].id
            } catch (error) {
                this.$router.push({
                    name: 'Criar usuário'
                })
                return alert('erro')
            }
        },
        async submitNewUser() {
            try {
                const response = await this.submitNewAddress()
                this.userForm.address = response
                await UserService.postUser(this.userForm);
                // this.$router.push({
                //     name: 'Listar Usuários'
                // })
            } catch (error) {
                console.error('Erro:', error)
                return error
            }
        }
    },
};
</script>
<template>
    <AddressCreateComponent />
    <div class="flex flex-col justify-self-center w-10/12 self-center">
        <p class="text-5xl mt-5 mb-5 text-center">Criação de Usuário</p>
        <hr>
        <form v-on:submit.prevent="handleSubmitUserForm()" method="post">
            <div class="flex">
                <div class="flex-1 p-2">
                    <label for="nameuser">Nome Completo</label>
                    <input class="inputForms" type="text" v-model="userForm.name" :class="{ 'is-invalid': isSubmitted }" id="nameuser"
                        name="nameuser" placeholder="Nome completo">
                </div>
                <div class="flex-1 p-2">
                    <label for="birthday">Nascimento</label>
                    <input class="inputForms" type="text" v-model="userForm.birthday" id="birthday" name="birthday"
                        placeholder="YYYY-MM-DD">
                </div>
            </div>
            <div class="flex">
                <div class="flex-1 p-2">
                    <label for="cellphone">Telefone</label>
                    <input class="inputForms" type="text" v-model="userForm.cellphone" id="cellphone" name="cellphone"
                        placeholder="5577912341234">
                </div>
                <div class="flex-1 p-2">
                    <label for="cpf">CPF</label>
                    <input class="inputForms" type="text" v-model="userForm.cpf" id="cpf" name="cpf" placeholder="12312312355">
                </div>
            </div>
            <div class="flex">
                <div class="flex-1 p-2">
                    <label for="email">Email</label>
                    <input class="inputForms" type="text" v-model="userForm.email" id="email" name="email" placeholder="email@email.com">
                </div>
                <div class="flex-1 p-2">
                    <label for="password">Senha</label>
                    <input class="inputForms" type="password" v-model="userForm.password">
                </div>
            </div>
            <div class="flex">
                <div class="flex-1 p-2">
                    <label for="privileges">Privilegios</label>
                    <input class="inputForms" type="text" v-model="userForm.privileges">
                </div>
            </div>
            <br>
            <!-- <AddressCreateComponent /> -->
            <hr>
            <!--Div enderço Inicio-->
            <div class="flex">
                <div class="flex-1 p-2">
                    <label for="cep">CEP</label>
                    <input class="inputForms" type="text" v-model="addressForm.cep" id="cep" name="cep" placeholder="45000000">
                </div>
                <div class="flex-1 p-2">
                    <label for="number">Número</label>
                    <input class="inputForms" type="text" v-model="addressForm.number" id="number" name="number" placeholder="000">
                </div>
            </div>
            <div class="flex">
                <div class="flex-1 p-2">
                    <label for="street">Rua</label>
                    <input class="inputForms" type="text" v-model="addressForm.street" id="street" name="street"
                        placeholder="Av. Rua">
                </div>
                <div class="flex-1 p-2">
                    <label for="neighborhood">Bairro</label>
                    <input class="inputForms" type="text" v-model="addressForm.neighborhood" id="neighborhood" name="neighborhood"
                        placeholder="Bairro">
                </div>
            </div>
            <div class="flex">
                <div class="flex-1 p-2">
                    <label for="city">Cidade</label>
                    <input class="inputForms" type="text" v-model="addressForm.city" id="city" name="city" placeholder="Vitória da Conquista-BA">
                </div>
                <div class="flex-1 p-2">
                    <label for="state">Estado</label>
                    <input class="inputForms" type="state" v-model="addressForm.state">
                </div>
            </div>
            <div class="flex">
                <div class="flex-1 p-2">
                    <label for="latitude">Latitude</label>
                    <input class="inputForms" type="text" v-model="addressForm.latitude">
                </div>
                <div class="flex-1 p-2">
                    <label for="longitude">Longitude</label>
                    <input class="inputForms" type="text" v-model="addressForm.longitude">
                </div>
            </div>
            <!--Fim endereço-->
            <div class="flex content-center items-center justify-center">
                <button @click="submitNewUser"
                    class="blue bg-blue-300 justify-self-center w-1/3 text-xl h-12 rounded-lg"
                    type="submit">Enviar</button>
            </div>
        </form>
    </div>
</template>