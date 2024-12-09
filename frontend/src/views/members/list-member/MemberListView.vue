<script lang="ts">
import MemberService from '@/services/MembersService';
export default {
    name: 'MemberListView',
    data() {
        return {
            users: []
        };
    },
    mounted() {
        this.listAllUsers()
    },
    methods: {
        async listAllUsers() {
            try {
                const response = await UserService.getUsresAddressAll()
                console.log(response);
                
                this.users = response;
            } catch (error) {
                console.error('Error: ', error);
            }
        },
        async removerUser(id: number){
            const response = await UserService.deleteUser(id)
            console.log('delete');
            this.listAllUsers()
        }
    }
}
</script>
<template>
    <h1 class="text-5xl mb-4 text-center"> Página de listar Usuários</h1>
    <hr class="mb-7">
    <main class="flex flex-col">
        <!--Divisão para cada usuários-->
        <div class="m-1 p-0" v-for="user in users" :key="user.users.id">
            <!--Introdução-->
            <header class="flex flex-row min-w-min">
                <div class="flex-1">
                    Nome: {{ user.users.name }}
                </div>
                <div class="flex-1">
                    CPF: {{ user.users.cpf }}
                </div>
            </header>
            <!--Contatos-->
            <section class="flex flex-row min-w-min">
                <div class="flex-1">Email: {{ user.users.email }}</div>
                <div class="flex-1">Telefone: {{ user.users.cellphone }}</div>
            </section>
            <!--Adicionais-->
            <footer class="flex flex-row min-w-min">
                <div class="flex-1">Função: {{ user.users.privileges }}</div>
                <div class="flex-1">
                    <router-link :to="{name: 'Atualizar Usuário', params: {id: user.users.id}}"
                    class=" bg-blue-600">
                        Editar
                    </router-link>
                </div>
                <div class="flex-1">
                    <button class="bg-red-600" @click="removerUser(user.users.id)">
                        Delete
                    </button>
                </div>
            </footer>
            <hr>
        </div>
    </main>
</template>
