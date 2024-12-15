<script lang="ts">
import HeadService from '@/services/HeadsService';
export default {
    name: 'HeadListView',
    data() {
        return {
            Heads: []
        };
    },
    mounted() {
        this.listAllHeads()
    },
    methods: {
        async listAllHeads() {
            try {
                const response = await HeadService.getHeadAddressAll()
                console.log(response);
                
                this.Heads = response;
            } catch (error) {
                console.error('Error: ', error);
            }
        },
        async removerHead(id: number){
            const response = await HeadService.deleteHead(id)
            console.log('delete');
            this.listAllHeads()
        }
    }
}
</script>
<template>
    <h1 class="text-5xl mb-4 text-center"> Página de listar Responsável da Família</h1>
    <hr class="mb-7">
    <main class="flex flex-col">
        <!--Divisão para cada usuários-->
        <div class="m-1 p-0" v-for="Head in Heads" :key="head.heads.id">
            <!--Introdução-->
            <header class="flex flex-row min-w-min">
                <div class="flex-1">
                    Nome: {{ head.heads.name }}
                </div>
                <div class="flex-1">
                    CPF: {{ head.heads.cpf }}
                </div>
            </header>
            <!--Contatos-->
            <section class="flex flex-row min-w-min">
                <div class="flex-1">Email: {{ head.heads.email }}</div>
                <div class="flex-1">Telefone: {{ Head.heads.cellphone }}</div>
            </section>
            <!--Adicionais-->
            <footer class="flex flex-row min-w-min">
                <div class="flex-1">
                    <router-link :to="{name: 'Atualizar Responsável da Família', params: {id: head.heads.id}}"
                    class=" bg-blue-600">
                        Editar
                    </router-link>
                </div>
                <div class="flex-1">
                    <button class="bg-red-600" @click="removerHead(head.heads.id)">
                        Delete
                    </button>
                </div>
            </footer>
            <hr>
        </div>
    </main>
</template>
