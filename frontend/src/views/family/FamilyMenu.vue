<script lang="ts" setup>
import { onMounted } from 'vue';
import TheNavBar from '@/components/TheNavBar.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
onMounted(() => {
    router.push({ name: 'Listar Familiar Responsável' });
});
</script>
<template>
    <TheNavBar />
    <main class="lg:px-20 w-10/12 mx-2 self-center">
        <router-view />
    </main>
</template>