<script lang="ts">
import UserService from '@/services/UsersService';

export default {
    name: 'UserCreateComponents',
    data() {
        return {
            user: {
                nameuser: null,
                active: null,
                address: null,
                cellphone: null,
                birthday: null,
                cpf: null,
                email: null,
                password: null,
                privileges: null,
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
        async submitNewUser(){
            try {
                await UserService.postUser(this.user);
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
            <label for="nameuser">Nome Completo</label>
            <input type="text" v-model="user.nameuser" :class="{'is-invalid': isSubmitted }" id="nameuser" name="nameuser" placeholder="Nome completo">
            <label for="birthday">Nascimento</label>
            <input type="text" v-model="user.birthday" id="birthday" name="birthday" placeholder="YYYY-MM-DD">
            <label for="cellphone">Telefone</label>
            <input type="text" v-model="user.cellphone" id="cellphone" name="cellphone" placeholder="5577912341234">
            <label for="cpf">CPF</label>
            <input type="text" v-model="user.cpf" id="cpf" name="cpf" placeholder="12312312355">
            <label for="email">Email</label>
            <input type="text" v-model="user.email" id="email" name="email" placeholder="email@email.com">
            <label for="password">Senha</label>
            <input type="password" v-model="user.password">
            <label for="privileges">Privilegios</label>
            <input type="text" v-model="user.privileges">
            <p>
                <label for="active">Ativo</label>
                <input class="size-4" type="checkbox" v-model="user.active">
            </p>
            <br>
            <div class="flex">
                <button @click="submitNewUser" class="blue bg-gray-700 justify-self-center" type="submit">Enviar</button>
            </div>
        </form>
    </div>
</template>