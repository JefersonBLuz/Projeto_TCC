<script lang="ts">
import TruckService from '@/services/Services';
export default {
    name: 'TruckUpdateView',
    data() {
        return {
            TruckForm: {
            },
            addressForm:{

            }
        };
    },
    mounted() {
        this.getTrucksAddressId()
    },

    methods: {
        async getUsresAddressId() {
            const { id } = this.$route.params;
            const response = await TruckService.getTrucksAddressId(id)
            console.log(response[0].trucks);
            console.log(response[0].address);
            this.truckForm = { ...response[0].trucks }
            this.addressForm = { ...response[0].address }
        },
        async updateTruck() {
            try {
                console.log(this.truckForm);
                await TruckService.updateTruck(this.truckForm)
                console.log('Usuário Atualizado');
                this.$router.push({
                    name: 'Listar Usuários'
                })
            } catch (error) {
                console.error(error);

            }
        }
    },
};
</script>
<template>
    <header class="text-5xl py-5">Editar Caminhão</header>
    <hr class="mb-5">
    <form v-on:submit.prevent="updateTruck()" method="post">
        <!--Informação pessoais-->
        <div class="flex flex-col lg:flex-row">
            <div class="flex-1 p-2">
                    <label for="plate">Placa</label>
                    <input type="text" v-model="truckForm.plate" :class="{ 'is-invalid': isSubmitted }" id="nametruck"
                        name="plate" placeholder="Placa">
                </div>
                <div class="flex-1 p-2">
                    <label for="birthday">Modelo</label>
                    <input type="text" v-model="truckForm.model" id="model" name="model"
                        placeholder="Modelo">
                </div>
                <div class="flex-1 p-2">
                    <label for="year">Ano</label>
                    <input type="text" v-model="truckForm.year" id="yeah" name="yeah"
                        placeholder="YYYY">
                </div>
            </div>
            <div class="flex">
                <div class="flex-1 p-2">
                    <label for="cpf">Proprietário</label>
                    <input type="text" v-model="truckForm.owner" id="cpf" name="owner" placeholder="Proprietário">
                </div>
            </div>
        <hr>
        <!--Div enderço Inicio-->
        <section class="flex flex-col">
            <div class="flex lg:flex-row flex-col">
                <div class="flex-1 p-2">
                    <label for="cep" class="text-lg">CEP</label><br>
                    <input @keyup="getEndereco" class="inputForms" type="text" v-model="addressForm.cep" id="cep" name="cep"
                        placeholder="Digita o CEP">
                </div>
                <div class="flex-1 p-2">
                    <label for="city" class="text-lg">Cidade</label><br>
                    <input class="inputForms" type="text" v-model="addressForm.city" id="city" name="city"
                        placeholder="">
                </div>
                <div class="p-2">
                    <label for="state" class="text-lg">UF</label><br>
                    <input class="inputForms" type="state" v-model="addressForm.state">
                </div>
            </div>
            <div class="flex lg:flex-row flex-col">
                <div class="flex-1 p-2">
                    <label for="neighborhood" class="text-lg">Bairro</label><br>
                    <input class="inputForms" type="text" v-model="addressForm.neighborhood" id="neighborhood"
                        name="neighborhood" placeholder="">
                </div>
                <div class="flex-1 p-2">
                    <label for="street" class="text-lg">Rua</label><br>
                    <input class="inputForms" type="text" v-model="addressForm.street" id="street" name="street"
                        placeholder="">
                </div>
                <div class="p-2">
                    <label for="number" class="text-lg">Número</label><br>
                    <input class="inputForms" type="text" v-model="addressForm.number" id="number" name="number"
                        placeholder="">
                </div>
            </div>
        </section>
        <!--Fim endereço-->
        <!--Inciio de botões-->
        <div class="flex flex-col lg:flex-row content-center items-center justify-evenly my-24">
            <router-link to="/heads/list"
                class="w-1/3 bg-red-500 rounded-lg justify-self-center content-center text-xl text-center text-red-950 h-12 hover:text-red-400 hover:bg-red-950">
                Cancelar</router-link>
            <button class="bg-blue-300 justify-self-center w-1/3 text-xl h-12 rounded-lg content-center hover:bg-blue-800 text-blue-950 hover:text-blue-300"
                type="submit">Enviar</button>
        </div>
        <!--Fim de botões-->
    </form>
</template>