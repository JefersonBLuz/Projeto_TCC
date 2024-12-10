<script src="./UserListView.ts"></script>
<template>

    <header class="flex my-4">
        <h1 class="text-5xl flex-4/5">Usuários</h1>
        <router-link to="/users/create" class="flex-1/5">Criar</router-link>
    </header>
    <hr class="mb-7">
    <main class="flex flex-col">
        <!--Divisão para cada usuários-->
        <div class="m-1 p-2 rounded-lg border-2 dark:border-slate-400 dark:bg-gray-600" v-for="user in users" :key="user.users.id">
            <!--Introdução-->
            <header class="flex flex-row min-w-min">
                <div class="flex-1 text-4xl">{{ user.users.name }}
                </div>
                <div class="flex-1 self-end">
                    <router-link :to="{ name: 'Atualizar Usuário', params: { id: user.users.id } }" class=" bg-blue-600">
                        <Icon icon="line-md:edit-full-twotone" width="48" height="48" />
                    </router-link>
                </div>
                <div class="flex-1">
                    <button class="bg-red-600" @click="removerUser(user.users.id)">
                        Delete
                    </button>
                </div>
            </header>
            <hr>
            <!--Contatos-->
            <section class="flex flex-row min-w-min">
                <div class="flex-1">Email: {{ user.users.email }}</div>
                <div class="flex-1">Telefone: {{ user.users.cellphone }}</div>
            </section>
            <!--Adicionais-->
            <footer class="flex flex-row min-w-min">
                <div class="flex-1">Função: {{ user.users.privileges }}</div>
                <div class="flex-1">
                    <router-link :to="{ name: 'Atualizar Usuário', params: { id: user.users.id } }" class=" bg-blue-600">
                        Editar
                    </router-link>
                </div>
                <div class="flex-1">
                    <button class="bg-red-600" @click="removerUser(user.users.id)">
                        Delete
                    </button>
                </div>
            </footer>
        </div>
    </main>
</template>
