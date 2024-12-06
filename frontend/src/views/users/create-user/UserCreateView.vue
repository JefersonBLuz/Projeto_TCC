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
                address: null,
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
        async submitNewAddress(){
            try {
                console.log(this.addressForm);
                const res = await AddressService.postAddress(this.addressForm)
                console.log(res)
                return res
            } catch (error) {
                
            }
        },
        async submitNewUser() {
            try {
                console.log(this.userForm);
                await UserService.postUser(this.userForm);
                this.$router.push({
                    name: 'Listar Usuários'
                })
            } catch (error) {
                console.error(error)
            }
        }
    },
};
</script>
<template>
    <div class="flex flex-col justify-self-center">
        <p class="text-5xl mt-5 mb-5">Criação de Usuário</p>
        <form v-on:submit.prevent="handleSubmitUserForm()" method="post">
            <div class="flex">
                <div class="flex-1 p-2">
                    <label for="nameuser">Nome Completo</label>
                    <input type="text" v-model="userForm.name" :class="{ 'is-invalid': isSubmitted }" id="nameuser"
                        name="nameuser" placeholder="Nome completo">
                </div>
                <div class="flex-1 p-2">
                    <label for="birthday">Nascimento</label>
                    <input type="text" v-model="userForm.birthday" id="birthday" name="birthday"
                        placeholder="YYYY-MM-DD">
                </div>
            </div>
            <div class="flex">
                <div class="flex-1 p-2">
                    <label for="cellphone">Telefone</label>
                    <input type="text" v-model="userForm.cellphone" id="cellphone" name="cellphone"
                        placeholder="5577912341234">
                </div>
                <div class="flex-1 p-2">
                    <label for="cpf">CPF</label>
                    <input type="text" v-model="userForm.cpf" id="cpf" name="cpf" placeholder="12312312355">
                </div>
            </div>
            <div class="flex">
                <div class="flex-1 p-2">
                    <label for="email">Email</label>
                    <input type="text" v-model="userForm.email" id="email" name="email" placeholder="email@email.com">
                </div>
                <div class="flex-1 p-2">
                    <label for="password">Senha</label>
                    <input type="password" v-model="userForm.password">
                </div>
            </div>
            <div class="flex">
                <div class="flex-1 p-2">
                    <label for="privileges">Privilegios</label>
                    <input type="text" v-model="userForm.privileges">
                </div>
                <div class="flex-1 p-2">
                    <label for="active">Ativo</label>
                    <input type="checkbox" v-model="userForm.active">
                </div>
            </div>
            <br>
            <router-view>
                <AddressCreateComponent></AddressCreateComponent>
            </router-view>
            <div class="flex content-center items-center justify-center">
                <button @click="submitNewUser"
                    class="blue bg-blue-300 justify-self-center w-1/3 text-xl h-12 rounded-lg"
                    type="submit">Enviar</button>
            </div>
        </form>
    </div>
</template>