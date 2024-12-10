<script lang="ts">
export default {
    name: 'FamilyView',
    data() {
        return {

        };
    },
};
</script>
<template>
    <nav>
        <router-link to="/heads/create">Adicionar</router-link>
        <router-link to="/heads/list">Listar</router-link>
        <router-link to="/heads/update">Editar</router-link>
    </nav>
    <router-view />
</template>