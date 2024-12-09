<script lang="ts" setup>
import TheNavBar from '@/components/TheNavBar.vue';

</script>
<template>
    <TheNavBar />
    <!-- <nav> -->
    <div>
        <router-link to="/users/create">Adicionar</router-link>
        <router-link to="/users/list">Listar</router-link>
        <router-link to="/users/update">Editar</router-link>
    </div>
    <!-- </nav> -->
    <router-view />
</template>

<style>

</style>