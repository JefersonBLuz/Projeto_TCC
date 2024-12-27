<script setup lang="ts">
import { onMounted } from 'vue';
import TheNavBar from '@/components/TheNavBar.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
onMounted(() => {
        router.push({ name: 'Grafico1' });
});
</script>
<template>
        <div>
                <TheNavBar />
        </div>
        <main width="1280" height="1060" class="self-center">
                <nav class="flex mt-4">
                        <router-link to="/home/view" class="px-5 bg-gray-800 rounded-t-xl text-lg focus:bg-red-100">Mapa de calor</router-link>
                        <router-link to="/home/history" class="px-5 bg-gray-800 rounded-t-xl text-lg focus:bg-red-100">Historico</router-link>
                </nav>
                <!-- <hr class="borde-none bg-gray-500 h-1"> -->
                <!-- <main class="self-center lg:w-10/12 lg:h-[900px]">
                <iframe title="tcc" width="100%" height="100%"
                        src="https://app.powerbi.com/view?r=eyJrIjoiOWY3YTNhNDQtN2M1Yi00Yzc2LTg1ZTAtZDUzNjU2NzJiOTJiIiwidCI6IjE0YzI4YjJiLWViMDQtNDdlMy1iMjkxLWU0Zjk0YmYwMDQ1NiJ9&pageName=ReportSection"
                        frameborder="0" allowFullScreen="true">
                </iframe>
        </main> -->
                <router-view />
        </main>
        <!-- <div class="lg:w-10/12 self-center">
                <TheFooter />
        </div> -->
</template>

<style></style>