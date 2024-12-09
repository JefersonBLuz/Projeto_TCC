<script lang="ts">
import { checkEmail, checkPassword } from '@/utils/LoginFunctions';
const loginUser: boolean = checkEmail('email') && checkPassword('email')
export default {
  name: 'SingIn',
  method: {
  },
};
</script>

<template>
  <main class="h-full content-center lg:w-4/6 mx-auto">
    <div class="flex flex-1 mx-auto mt-10 lg:flex-row flex-col lg:w-4/6 px-6 py-12 lg:px-8 bg-zinc-800 rounded-3xl text-white dark:bg-gray-100 dark:text-blue-800 items-center">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm text-center">
          <img class="mx-auto" src="@/assets/aquasys_logo1.png" alt="Your Company" width="255" height="255" />
          <h1 class="text-5xl lg:px-12">Aquasys</h1>
          <h3 class="text-lg pt-2">
            Sistema de controle<br>de abastecimento de água.
          </h3>
        </div>
      <div class="mt-10 mx-auto w-full max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div> <!--Usuário-->
            <label for="email" class="block text-sm font-medium">Usuário</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 px-2 " />
            </div>
          </div>
          <!--Senha-->
          <div> 
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm/6 font-medium">Senha</label>
              <div class="text-sm">
                <a href="#"
                  class="font-semibold text-sky-400 hover:text-sky-300 dark:text-sky-700 dark:hover:text-sky-600">Esqueceu
                  a senha?</a>
              </div>
            </div>
            <div class="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password" required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 px-2" />
            </div>
            <div>
              <p v-if="loginUser" class="text-center font-medium py-2 text-alert">Usuário/Senha incorretos!</p>
            </div>
          </div>
          <div> <!--Botão de enviar-->
            <button type="submit"
              class="flex w-full justify-center rounded-md bg-color-primary px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<style scoped>




@media (min-width: 1024px) {

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
