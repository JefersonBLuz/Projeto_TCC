<script lang="ts">
export default{
    name: 'AddressCreateComponent',
    data() {
        return {
            addressForm: {
                cep: null,
                number: null,
                street: null,
                neighborhood: null,
                city: null,
                state: null,
                latitude: null,
                longitude: null
            },
            submitAddress: null,
        };
    },
    methods: {
    },
}
</script>
<template>
    <form v-on:submit.prevent="" method="post">
        <div class="flex">
                <div class="flex-1 p-2">
                    <label for="cep">Nome Completo</label>
                    <input type="text" v-model="addressForm.cep" id="cep"
                        name="cep" placeholder="45000000">
                </div>
                <div class="flex-1 p-2">
                    <label for="number">Número</label>
                    <input type="text" v-model="addressForm.number" id="number" name="number"
                        placeholder="YYYY-MM-DD">
                </div>
            </div>
            <div class="flex">
                <div class="flex-1 p-2">
                    <label for="street">Rua</label>
                    <input type="text" v-model="addressForm.street" id="street" name="street"
                        placeholder="5577912341234">
                </div>
                <div class="flex-1 p-2">
                    <label for="neighborhood">Bairro</label>
                    <input type="text" v-model="addressForm.neighborhood" id="neighborhood" name="neighborhood" placeholder="12312312355">
                </div>
            </div>
            <div class="flex">
                <div class="flex-1 p-2">
                    <label for="city">Cidade</label>
                    <input type="text" v-model="addressForm.city" id="city" name="city" placeholder="city@email.com">
                </div>
                <div class="flex-1 p-2">
                    <label for="state">Estado</label>
                    <input type="state" v-model="addressForm.state">
                </div>
            </div>
            <div class="flex">
                <div class="flex-1 p-2">
                    <label for="latitude">Latitude</label>
                    <input type="text" v-model="addressForm.latitude">
                </div>
                <div class="flex-1 p-2">
                    <label for="longitude">Longitude</label>
                    <input type="text" v-model="addressForm.longitude">
                </div>
            </div>
    </form>
</template>