<script lang="ts">
import Services from '@/services/Services';
import getCord from '@/utils/cord'
export default {
    name: 'DriverUpdateView',
    data() {
        return {
            DriverForm: {
            },
            addressForm: {
            }
        };
    },
    mounted() {
        this.getDriversAddressId()
    },
    methods: {
        async getDriversAddressId() {
            const { id } = this.$route.params;
            const response = await Services.Drivers.getDriversAddressId(id)
            console.log(response[0].drivers);
            console.log(response[0].address);
            this.DriverForm = { ...response[0].drivers }
            this.addressForm = { ...response[0].address }
        },
        async updateDriver() {
            try {
                console.log(this.DriverForm);
                await Services.Address.updateAddress(this.addressForm)
                await Services.Drivers.updateDriver(this.DriverForm)
                console.log('Usuário Atualizado');
                this.$router.push({
                    name: 'Listar Usuários'
                })
            } catch (error) {
                console.error(error);

            }
        },
        async getEndereco() {
            try {
                const query: string = String(this.addressForm.cep)
                const response = await getCord.getCord(query);
                this.addressForm = { ...response }

            } catch (error) {

            }
        },
    },
};
</script>
<template>
    <header class="text-5xl py-5">Editar Motorista</header>
    <hr class="mb-5">
    <form v-on:submit.prevent="updateDriver()" method="post">
        <!--Informação pessoais-->
        <div class="flex flex-col lg:flex-row">
            <div class="flex-1 p-2">
                    <label for="namedriver">Nome Completo</label>
                    <input type="text" v-model="driverForm.name" :class="{ 'is-invalid': isSubmitted }" id="nameDriver"
                        name="nameDriver" placeholder="Nome completo">
                </div>
                <div class="flex-1 p-2">
                    <label for="cpf">CPF</label>
                    <input type="text" v-model="driverForm.cpf" id="cpf" name="cpf" placeholder="12312312355">
                </div>
                <div class="flex-1 p-2">
                    <label for="birthday">Nascimento</label>
                    <input type="text" v-model="driverForm.birthday" id="birthday" name="birthday"
                        placeholder="YYYY-MM-DD">
                </div>
            </div>
            <div class="flex">
                <div class="flex-1 p-2">
                    <label for="cellphone">Telefone</label>
                    <input type="text" v-model="driverForm.cellphone" id="cellphone" name="cellphone"
                        placeholder="5577912341234">
                </div>
                <div class="flex-1 p-2">
                    <label for="email">Email</label>
                    <input type="text" v-model="driverForm.email" id="email" name="email" placeholder="email@email.com">
                </div>
            </div>
            <div class="flex">
                <div class="flex-1 p-2">
                    <label for="cnh_number">Nº CNH</label>
                    <input type="text" v-model="driverForm.cnh_number">
                </div>
                <div class="flex-1 p-2">
                    <label for="cnh_category">Categoria CNH</label>
                    <input type="text" v-model="driverForm.cnh_category">
                </div>
                <div class="flex-1 p-2">
                    <label for="cnh_date">Data Vencimento CNH</label>
                    <input type="date" v-model="driverForm.cnh_date">
                </div>
            </div>
            <div class="flex">
                <!-- A opção de Ativo ou Inativo existirá aqui? -->
                <!-- <div class="flex-1 p-2">
                    <label for="active">Ativo</label>
                    <input type="checkbox" v-model="driverForm.active">
                </div> -->
            </div>
            <br>
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
            <router-link to="/drivers/list"
                class="w-1/3 bg-red-500 rounded-lg justify-self-center content-center text-xl text-center text-red-950 h-12 hover:text-red-400 hover:bg-red-950">
                Cancelar</router-link>
            <button class="bg-blue-300 justify-self-center w-1/3 text-xl h-12 rounded-lg content-center hover:bg-blue-800 text-blue-950 hover:text-blue-300"
                type="submit">Enviar</button>
        </div>
        <!--Fim de botões-->
    </form>
</template>