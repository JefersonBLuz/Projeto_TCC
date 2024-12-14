<script lang="ts">
import Services from '@/services/Services';
import getCord from '@/utils/cord'
export default {
    name: 'UserUpdateView',
    data() {
        return {
            userForm: {
            },
            addressForm: {
            }
        };
    },
    mounted() {
        this.getUsresAddressId()
    },
    methods: {
        async getUsresAddressId() {
            const { id } = this.$route.params;
            const response = await Services.Users.getUsresAddressId(id)
            console.log(response[0].users);
            console.log(response[0].address);
            this.userForm = { ...response[0].users }
            this.addressForm = { ...response[0].address }
        },
        async updateUser() {
            try {
                console.log(this.userForm);
                await Services.Address.updateAddress(this.addressForm)
                await Services.Users.updateUser(this.userForm)
                console.log('Usuário Atualizado');
                this.$router.push({
                    name: 'Listar Usuários'
                })
            } catch (error) {
                console.error(error);

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
</script>
<template>
    <header class="text-5xl py-5">Editar Usuário</header>
    <hr class="mb-5">
    <form v-on:submit.prevent="updateUser()" method="post">
        <!--Informação pessoais-->
        <div class="flex flex-col lg:flex-row">
            <div class="basis-2/4 p-2">
                <label for="nameuser" class="text-lg">Nome Completo</label><br>
                <input class="inputForms" type="text" v-model="userForm.name" :class="{ 'is-invalid': isSubmitted }"
                    id="nameuser" name="nameuser" placeholder="Nome completo">
            </div>
            <div class="basis-1/4 p-2 text-lg">
                <label for="birthday" class="text-lg">Nascimento</label><br>
                <input class="inputForms" type="text" v-model="userForm.birthday" id="birthday" name="birthday"
                    placeholder="YYYY-MM-DD">
            </div>
            <div class="flex-1 p-2">
                <label for="cpf" class="text-lg">CPF</label><br>
                <input class="inputForms" type="text" v-model="userForm.cpf" id="cpf" name="cpf"
                    placeholder="12312312355">
            </div>
        </div>
        <div class="flex flex-col lg:flex-row">
            <div class="flex-1 p-2">
                <label for="email" class="text-lg">Email</label><br>
                <input class="inputForms" type="text" v-model="userForm.email" id="email" name="email"
                    placeholder="email@email.com">
            </div>
            <div class="flex-1 p-2">
                <label for="cellphone" class="text-lg">Telefone</label><br>
                <input class="inputForms" type="text" v-model="userForm.cellphone" id="cellphone" name="cellphone"
                    placeholder="5577912341234">
            </div>
            <div class="flex-1 p-2">
                <label for="password" class="text-lg">Senha</label><br>
                <input class="inputForms" type="password" v-model="userForm.password">
            </div>
        </div>
        <div class="flex flex-col lg:flex-row">
            <div class="flex-1 p-2">
                <label for="privileges" class="text-lg">Privilegios</label><br>
                <input class="inputForms" type="text" v-model="userForm.privileges">
            </div>
        </div>
        <br>
        <hr>
        <!--Div enderço Inicio-->
        <section class="flex flex-col">
            <div class="flex lg:flex-row flex-col">
                <div class="flex-1 p-2">
                    <label for="cep" class="text-lg">CEP</label><br>
                    <input @keyup="getEndereco" class="inputForms" type="text" v-model="addressForm.cep" id="cep" name="cep"
                        placeholder="Digita o CEP">
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
                    <input class="inputForms" type="text" v-model="addressForm.neighborhood" id="neighborhood"
                        name="neighborhood" placeholder="">
                </div>
                <div class="flex-1 p-2">
                    <label for="street" class="text-lg">Rua</label><br>
                    <input class="inputForms" type="text" v-model="addressForm.street" id="street" name="street"
                        placeholder="">
                </div>
                <div class="p-2">
                    <label for="number" class="text-lg">Número</label><br>
                    <input class="inputForms" type="text" v-model="addressForm.number" id="number" name="number"
                        placeholder="">
                </div>
            </div>
        </section>
        <!--Fim endereço-->
        <!--Inciio de botões-->
        <div class="flex flex-col lg:flex-row content-center items-center justify-evenly my-24">
            <router-link to="/users/list"
                class="w-1/3 bg-red-500 rounded-lg justify-self-center content-center text-xl text-center text-red-950 h-12 hover:text-red-400 hover:bg-red-950">
                Cancelar</router-link>
            <button class="bg-blue-300 justify-self-center w-1/3 text-xl h-12 rounded-lg content-center hover:bg-blue-800 text-blue-950 hover:text-blue-300"
                type="submit">Enviar</button>
        </div>
        <!--Fim de botões-->
    </form>
</template>