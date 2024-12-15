<script lang="ts">
import MemberService from '@/services/MembersService';
export default {
    name: 'MemberListView',
    data() {
        return {
            Members: []
        };
    },
    mounted() {
        this.listAllMembers()
    },
    methods: {
        async listAllMembers() {
            try {
                const response = await MemberService.getMemberAddressAll()
                console.log(response);
                
                this.Members = response;
            } catch (error) {
                console.error('Error: ', error);
            }
        },
        async removerMember(id: number){
            const response = await MemberService.deleteMember(id)
            console.log('delete');
            this.listAllMembers()
        }
    }
}
</script>
<template>
    <h1 class="text-5xl mb-4 text-center"> Página de listar Membros da Família</h1>
    <hr class="mb-7">
    <main class="flex flex-col">
        <!--Divisão para cada usuários-->
        <div class="m-1 p-0" v-for="member in members" :key="member.members.id">
            <!--Introdução-->
            <header class="flex flex-row min-w-min">
                <div class="flex-1">
                    Nome: {{ member.members.name }}
                </div>
                <div class="flex-1">
                    CPF: {{ member.members.cpf }}
                </div>
            </header>
            <!--Contatos-->
            <section class="flex flex-row min-w-min">
                <div class="flex-1">Email: {{ member.members.email }}</div>
                <div class="flex-1">Telefone: {{ Member.Members.cellphone }}</div>
            </section>
            <!--Adicionais-->
            <footer class="flex flex-row min-w-min">
                <div class="flex-1">
                    <router-link :to="{name: 'Atualizar Membro da Família', params: {id: member.members.id}}"
                    class=" bg-blue-600">
                        Editar
                    </router-link>
                </div>
                <div class="flex-1">
                    <button class="bg-red-600" @click="removerMember(member.members.id)">
                        Delete
                    </button>
                </div>
            </footer>
            <hr>
        </div>
    </main>
</template>
