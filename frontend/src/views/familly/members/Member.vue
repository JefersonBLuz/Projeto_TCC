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
        <router-link to="/members/create">Adicionar</router-link>
        <router-link to="/members/list">Listar</router-link>
        <router-link to="/members/update">Editar</router-link>
    </nav>
    <router-view />
</template>