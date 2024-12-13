<script lang="ts">
import MemberService from '@/services/MembersService';
export default {
    name: 'MemberUpdateView',
    data() {
        return {
            userForm: {
            },
            addressForm:{

            }
        };
    },
    mounted() {
        this.getMemberAddressId()
    },

    methods: {
        async getMemberAddressId() {
            const { id } = this.$route.params;
            const response = await MemberService.getMemberAddressId(id)
            console.log(response[0].users);
            console.log(response[0].address);
            this.userForm = { ...response[0].users }
            this.addressForm = { ...response[0].address }
        },
        async updateUser() {
            try {
                console.log(this.userForm);
                await MemberService.updateMember(this.userForm)
                console.log('Membro da família Atualizado');
                this.$router.push({
                    name: 'Listar Membro da Família'
                })
            } catch (error) {
                console.error(error);

            }
        }
    },
};
</script>
<template>
    <!-- <h1 class="text-5xl pb-2">Editar Membro Familiar</h1>
    <hr class="mb-5">
    <form v-on:submit.prevent="updateUser()" method="post">
        <label for="nameuser">Nome Completo</label>
        <input type="text" v-model="userForm.name" :class="{ 'is-invalid': isSubmitted }" id="nameuser"
            name="nameuser" placeholder="Nome completo">
        <label for="birthday">Nascimento</label>
        <input type="text" v-model="userForm.birthday" id="birthday" name="birthday" placeholder="YYYY-MM-DD">
        <label for="cellphone">Telefone</label>
        <input type="text" v-model="userForm.cellphone" id="cellphone" name="cellphone" placeholder="5577912341234">
        <label for="cpf">CPF</label>
        <input type="text" v-model="userForm.cpf" id="cpf" name="cpf" placeholder="12312312355">
        <label for="email">Email</label>
        <input type="text" v-model="userForm.email" id="email" name="email" placeholder="email@email.com">
        <label for="password">Senha</label>
        <input type="password" v-model="userForm.password">
        <label for="privileges">Privilegios</label>
        <input type="text" v-model="userForm.privileges">
        <p>
            <label for="active">Ativo</label>
            <input class="size-4" type="checkbox" v-model="userForm.active">
        </p>
        <br>
        <div class="flex">
            <button class="blue bg-gray-700 justify-self-center" type="submit">Enviar</button>
        </div>
    </form> -->
</template>