<script lang="ts">
import Services from '@/services/Services';
import { index } from 'drizzle-orm/mysql-core';
export default {
    name: 'UserListView',
    data() {
        return {
            head: [],
            family: [],
            thisvalue: [],
        };
    },
    mounted() {
        this.listAllUsers()
        // this.mostFamilly()
    },
    methods: {
        async listAllUsers() {
            try {
                const response = await Services.Familly.getFamilyAll();


                this.family = response;
                this.family.forEach(async element => {
                    let idHead: number = element.head_id
                    element.head = await Services.Heads.getHeadID(idHead)
                    element.members = await Services.Members.getMemberOfHead(idHead)
                    element.percentual = element.volume_actual / element.volume_need
                })
                console.log(this.family);

            } catch (error) {
                console.error('Error: ', error);
            }
        },
        async mostFamilly(index: number) {
            // if(index){
            let value = this.family[index].viewDetalhe
            value ? value = false : value = true
            this.family[index].viewDetalhe = value
            console.log('teste');

            // }else{
            //     this.family.forEach(element =>{
            //         element.viewDetalhe = false
            //     })
            // }


        },
        async removerUser(id: number) {
            const response = await Services.Users.deleteUser(id)
            console.log('delete');
            this.listAllUsers()
        },
        value(id: number) {
            return true
        }
    }
}
</script>
<template>
    <!--Inicio Cabeçalho da Pagina-->
    <header class="flex my-4 w-full flex-col lg:flex-row">
        <h1 class="text-5xl basis-10/12">Famílias</h1>
        <router-link to="/family/create"
            class="flex-1 w-3/6 bg-sky-500 rounded-xl text-center flex justify-evenly lg:m-0 mt-4">
            <iconify-icon icon="material-symbols:add-2-rounded" width="35" height="35"
                class="self-center text-center text-slate-200"></iconify-icon>
            <span class="text-slate-200 text-lg self-center leading-none">Cadastrar Família</span>
        </router-link>
    </header>
    <!--Fim Cabeçalho da Pagina-->

    <hr class=" bg-gray-500 h-1 border-0 mb-5">

    <!--Inicio do  corpo da página-->
    <main class="flex flex-col px-1">
        <!--Divisão de cada fámilia-->
        <section v-for="(familyList, index) in family" :key="index" class="mb-2">
            <!--Inicio Cabeçalho família-->
            <header
                class="flex flex-row min-w-min p-2 bg-gray-200 border-slate-500 rounded-lg border-2 dark:border-slate-400 dark:bg-gray-600 m-0 z-1">
                <!--Botão de detalhes-->
                <div class="self-center items-center" @click="mostFamilly(index)">
                    <div class="flex self-center text-center items-center justify-center" v-if="familyList.viewDetalhe">
                        <iconify-icon icon="material-symbols:arrow-drop-down-circle-outline-rounded" width="30"
                            height="30" class="rotate-180"></iconify-icon>
                    </div>
                    <div class="flex self-center text-center items-center justify-center" v-else>
                        <iconify-icon icon="material-symbols:arrow-drop-down-circle-outline-rounded" width="30"
                            height="30"></iconify-icon>
                    </div>
                </div>
                <!--Botão de detalhes-->
                <!--Informação-->
                <div class="basis-11/12 flex items-center ">
                    <div class="lg:text-4xl text-xl pl-6 basis-9/12">
                        {{ familyList.name }}
                    </div>
                    <!--Inicio Volume-->
                    <div class="flex-1 px-8 text-xl">
                        <span v-if="familyList.percentual >= 0.7" class="text-green-500">
                            
                            {{ familyList.percentual * 100 + "%" }} do Vomule máx.
                        </span>
                        <span v-else-if="familyList.percentual > 0.3" class="text-yellow-500">
                            {{ familyList.percentual * 100 + "%" }} do Vomule máx.
                        </span>
                        <span v-else class="text-red-500">
                            {{ familyList.percentual * 100 + "%" }} do Vomule máx.
                        </span>
                    </div>
                    <!--Fim Volume-->
                </div>
                <!--Informação-->
                <!--Botões de edição-->
                <div class="flex basis-1/12 justify-end">
                    <div class="flex-1 self-center">
                        <router-link :to="{ name: 'Atualizar Usuário', params: { id: familyList.id } }">
                            <iconify-icon icon="material-symbols:edit-square-outline-rounded" width="30" height="30"
                                data-tooltip="Editar usuário" class="text-yellow-500"></iconify-icon>
                        </router-link>
                    </div>
                    <div class="flex-1 self-center">
                        <button @click="removerUser(familyList.id)">
                            <iconify-icon icon="material-symbols:delete-rounded" width="30" height="30"
                                data-tooltip="Excluir usuário" class="text-red-600"></iconify-icon>
                        </button>
                    </div>
                </div>
                <!--Botões de edição-->
            </header>
            <!--Fim Cabeçalho família-->
            <!--Inicio informação detalhada da família-->

            <div v-if="familyList.viewDetalhe"
                class="flex flex-col min-w-min -mt-[1px] z-0 p-2 mx-1 bg-gray-200 border-slate-500 rounded-b-lg border-b-2 border-l-2 border-e-2 dark:border-slate-400 dark:bg-gray-600">
                <!--Informação-->
                <h1 class="text-2xl mt-2 py-1 border-x border-t bg-blue-300 text-blue-950 pl-4 rounded-t-xl border-gray-500">Informações:</h1>
                <div class="px-2 mb-2 flex flex pl-2 border-x py-1 border-t bg-blue-200 text-blue-950 pl-4 rounded-b-xl border-gray-500 ">
                    <!-- <div class="flex-row flex-1"> -->
                    <div class="flex-1">
                        <span class="text-base">Nº de pessoas: </span>
                        {{ familyList.numberfamily }}
                    </div>
                    <div class="flex-1">
                        <span class="text-base">Região: </span>
                        {{ familyList.region }}
                    </div>
                    <div class="flex-1">
                        <span class="text-base">Volume atual: </span>
                        {{ familyList.volume_actual }}
                    </div>
                    <div class="flex-1">
                        <span class="text-base">V. necessário mensal: </span>
                        {{ familyList.volume_need }}
                    </div>

                    <!-- </div> -->
                </div>
                 <!--Fim Informação-->
                <div v-for="(headFamily, idx) in familyList.head" :key="idx">
                    <h2
                        class="text-2xl py-1 border-x border-t bg-blue-300 text-blue-950 pl-4 rounded-t-xl border-gray-500">
                        Chefe da família: </h2>
                    <div
                        class="flex pl-2 border-x py-1 border-t bg-blue-200 text-blue-950 pl-4 rounded-b-xl border-gray-500 ">
                        <div class="flex-1">
                            <span class="text-base">Nome: </span>
                            {{ headFamily.name }}
                        </div>
                        <div class="flex-1">
                            <span class="text-base">Nascimento: </span>
                            {{ String(headFamily.birthday).replaceAll("-","/") }}
                        </div>
                        <div class="flex-1">
                            <span class="text-base">CPF: </span>
                            {{ headFamily.cpf }}
                        </div>
                        <!-- <div class="flex-1">
                            <span class="text-base">Email: </span>
                            {{ headFamily.email }}
                        </div> -->
                        <div class="flex-1">
                            <span class="text-base">Telefone: </span>
                            {{ headFamily.email }}
                        </div>
                        <div class="flex basis-1/12 justify-end pr-2">
                            <div class="self-center pr-2">
                                <router-link :to="{ name: 'Atualizar Usuário', params: { id: headFamily.id } }">
                                    <iconify-icon icon="material-symbols:edit-square-outline-rounded" width="24"
                                        height="24" data-tooltip="Editar usuário"
                                        class="text-blue-600"></iconify-icon>
                                </router-link>
                            </div>
                            <div class="self-center">
                                <button @click="removerUser(headFamily.id)">
                                    <iconify-icon icon="material-symbols:delete-rounded" width="24" height="24"
                                        data-tooltip="Excluir usuário" class="text-blue-800"></iconify-icon>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <hr v-if="familyList.members.length > 0"> -->
                <h2
                    class="text-2xl mt-2 py-1 border-x border-t bg-blue-300 text-blue-950 pl-4 rounded-t-xl border-gray-500">
                    Membros da família</h2>
                <div
                    class="flex flex-col pl-2 border-x py-1 border-t bg-blue-200 text-blue-950 pl-4 border-gray-500 rounded-b-xl">
                    <div v-for="(memberFamily, idx) in familyList.members" :key="idx">
                        <hr v-if="(idx>0)" class="px-0.5 border-gray-500">
                        <div class="flex">
                            <div class="flex-1">
                                <span class="text-base">Nome: </span>
                                {{ memberFamily.name }}
                            </div>
                            <div class="flex-1">
                                <span class="text-base">Nascimento: </span>
                                {{ String(memberFamily.birthday).replaceAll("-","/") }}
                            </div>
                            <div class="flex-1">
                                <span class="text-base">CPF: </span>
                                {{ memberFamily.cpf }}
                            </div>
                            <div class="flex-1">
                                
                            </div>
                            <div class="flex basis-1/12 justify-end pr-2">
                                <div class="self-center pr-2">
                                    <router-link :to="{ name: 'Atualizar Usuário', params: { id: memberFamily.id } }">
                                        <iconify-icon icon="material-symbols:edit-square-outline-rounded" width="24"
                                            height="24" data-tooltip="Editar usuário"
                                            class="text-blue-600"></iconify-icon>
                                    </router-link>
                                </div>
                                <div class="self-center">
                                    <button @click="removerUser(familyList.id)">
                                        <iconify-icon icon="material-symbols:delete-rounded" width="24" height="24"
                                            data-tooltip="Excluir usuário" class="text-blue-800"></iconify-icon>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--Fim informação detalhada da família-->
        </section>
    </main>
    <!--Fim do corpo da página-->
</template>
