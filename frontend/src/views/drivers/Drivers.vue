<script lang="ts">
export default {
    name: 'DriversView',
    data() {
        return {

        };
    },
};
</script>
<template>

    <!-- <head> -->
        <!-- <router-link to="/">Home</router-link>
        <h1>Página dos Motorista</h1>
        <router-link to="/drivers">Motorista</router-link> -->
        <nav>
        <router-link to="/drivers/create">Adicionar</router-link>
        <router-link to="/drivers/list">Listar</router-link>
        <router-link to="/drivers/update">Editar</router-link>
    </nav>
    <!-- </head> -->
    <router-view />
</template>
<!-- <style></style> -->