<script lang="ts">
export default {
    name: 'TrucksView',
    data() {
        return {

        };
    },
};
</script>
<template>
    <nav>
        <router-link to="/trucks/create">Adicionar</router-link>
        <router-link to="/trucks/list">Listar</router-link>
        <router-link to="/trucks/update">Editar</router-link>
    </nav>
    <br>
    <hr>
    <router-view />
</template>