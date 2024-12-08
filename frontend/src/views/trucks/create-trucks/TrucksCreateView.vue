<script lang="ts">
import UserService from '@/services/UsersService';
import AddressService from '@/services/AddressService';
import AddressCreateComponent from '@/components/address/create-address/AddressCreateComponent.vue';

export default {
    name: 'UserCreateView',
    data() {
        return {
            userForm: {
                plate: null,
                model: null,
                year: null,
                owner: null,
                created_by: null,
                updated_by: null,
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
        async submitNewUser() {
            try {
                console.log(this.userForm);
                await UserService.postUser(this.userForm);
                this.$router.push({
                    name: 'Listar Caminhões'
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
        <p class="text-5xl mt-5 mb-5">Cadastrar Caminhão</p>
        <form v-on:submit.prevent="handleSubmitUserForm()" method="post">
            <div class="flex">
                <div class="flex-1 p-2">
                    <label for="plate">Placa</label>
                    <input type="text" v-model="userForm.plate" :class="{ 'is-invalid': isSubmitted }" id="nameuser"
                        name="plate" placeholder="Placa">
                </div>
                <div class="flex-1 p-2">
                    <label for="birthday">Modelo</label>
                    <input type="text" v-model="userForm.model" id="model" name="model"
                        placeholder="Modelo">
                </div>
                <div class="flex-1 p-2">
                    <label for="year">Ano</label>
                    <input type="text" v-model="userForm.year" id="yeah" name="yeah"
                        placeholder="YYYY">
                </div>
            </div>
            <div class="flex">
                <div class="flex-1 p-2">
                    <label for="cpf">Proprietário</label>
                    <input type="text" v-model="userForm.owner" id="cpf" name="owner" placeholder="Proprietário">
                </div>
            </div>
            <div class="flex">
                <div class="flex-1 p-2">
                    <label for="cretead_by">Criado por</label>
                    <input type="text" v-model="userForm.created_by" id="cretead_by" name="cretead_by" placeholder="Criado Por">
                </div>
                <div class="flex-1 p-2">
                    <label for="password">Alterado em</label>
                    <input type="password" v-model="userForm.updated_by" id="updated_by" name="updated_by" placeholder="Alterado Por">
                </div>
            </div>
        </form>
    </div>
</template>