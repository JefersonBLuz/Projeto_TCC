<script lang="ts">
import TruckService from '@/services/TrucksService';
export default {
    name: 'TruckListView',
    data() {
        return {
            Trucks: []
        };
    },
    mounted() {
        this.listAllTrucks()
    },
    methods: {
        async listAllTrucks() {
            try {
                const response = await TruckService.getTrucksAddressAll()
                console.log(response);
                
                this.trucks = response;
            } catch (error) {
                console.error('Error: ', error);
            }
        },
        async removerTruck(id: number){
            const response = await TruckService.deleteTruck(id)
            console.log('delete');
            this.listAllTrucks()
        }
    }
}
</script>
<template>
    <h1 class="text-5xl mb-4 text-center"> Página de listar Caminhões</h1>
    <hr class="mb-7">
    <main class="flex flex-col">
        <!--Divisão para cada usuários-->
        <div class="m-1 p-0" v-for="truck in trucks" :key="truck.trucks.id">
            <!--Introdução-->
            <header class="flex flex-row min-w-min">
                <div class="flex-1">
                    Placa: {{ truck.trucks.plate }}
                </div>
                <div class="flex-1">
                    Modelo: {{ truck.trucks.model}}
                </div>
            </header>
            <!--Contatos-->
            <section class="flex flex-row min-w-min">
                <div class="flex-1">Ano: {{ truck.trucks.year }}</div>
                <div class="flex-1">Proprietário: {{ truck.trucks.owner}}</div>
            </section>
            <!--Adicionais-->
            <footer class="flex flex-row min-w-min">
                <div class="flex-1">
                    <router-link :to="{name: 'Atualizar Caminhão', params: {id: truck.trucks.id}}"
                    class=" bg-blue-600">
                        Editar
                    </router-link>
                </div>
                <div class="flex-1">
                    <button class="bg-red-600" @click="removerTruck(truck.trucks.id)">
                        Delete
                    </button>
                </div>
            </footer>
            <hr>
        </div>
    </main>
</template>
