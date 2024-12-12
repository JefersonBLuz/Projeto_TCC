<script lang="ts" setup>
import { onMounted } from 'vue';
import TheNavBar from '@/components/TheNavBar.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
onMounted(() => {
    console.log('Redirect');
    
    router.push({ name: 'Listar Usuários' });
});
</script>
<template>
    <TheNavBar />
    <!-- <router-link to="/users/create">Criar</router-link> -->
    <main class="lg:px-20 w-10/12 mx-2 self-center">
        <router-view />
    </main>
</template>

<style></style>