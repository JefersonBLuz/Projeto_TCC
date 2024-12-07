<script lang="ts">
export default {
    name: 'UsersView',
    data() {
        return {

        };
    },
};
</script>
<template>
    <nav>
        <router-link to="/users/create">Adicionar</router-link>
        <router-link to="/users/list">Listar</router-link>
        <router-link to="/users/update">Editar</router-link>
    </nav>
    <br>
    <hr>
    <router-view />
</template>