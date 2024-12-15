<script lang="ts">
import DriverService from '@/services/DriversService';
export default {
    name: 'DriverListView',
    data() {
        return {
            Drivers: []
        };
    },
    mounted() {
        this.listAllDrivers()
    },
    methods: {
        async listAllDrivers() {
            try {
                const response = await DriverService.getDriversAddressAll()
                console.log(response);
                
                this.Drivers = response;
            } catch (error) {
                console.error('Error: ', error);
            }
        },
        async removerDriver(id: number){
            const response = await DriverService.deleteDriver(id)
            console.log('delete');
            this.listAllDrivers()
        }
    }
}
</script>
<template>
    <h1 class="text-5xl mb-4 text-center"> Página de listar Motoristas</h1>
    <hr class="mb-7">
    <main class="flex flex-col">
        <!--Divisão para cada usuários-->
        <div class="m-1 p-0" v-for="driver in drivers" :key="driver.drivers.id">
            <!--Introdução-->
            <header class="flex flex-row min-w-min">
                <div class="flex-1">
                    Nome: {{ driver.drivers.name }}
                </div>
                <div class="flex-1">
                    CPF: {{ driver.drivers.cpf }}
                </div>
                <div class="flex-1">
                    CNH: {{ driver.drivers.cnh_number }}
                </div>
                <div class="flex-1">
                    CNH - Categoria: {{ driver.drivers.cnh_category }}
                </div>
                <div class="flex-1">
                    CNH - Vencimento: {{ driver.drivers.cnh_date }}
                </div>
            </header>
            <!--Contatos-->
            <section class="flex flex-row min-w-min">
                <div class="flex-1">Email: {{ driver.drivers.email }}</div>
                <div class="flex-1">Telefone: {{ driver.drivers.cellphone }}</div>
            </section>
            <!--Adicionais-->
            <footer class="flex flex-row min-w-min">
                <div class="flex-1">
                    <button class="bg-red-600" @click="removerDriver(driver.drivers.id)">
                        Delete
                    </button>
                </div>
            </footer>
            <hr>
        </div>
    </main>
</template>
