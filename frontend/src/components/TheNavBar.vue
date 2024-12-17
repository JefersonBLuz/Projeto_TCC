<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="mx-auto max-w px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
            <XMarkIcon v-else class="block size-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <a href="/home" class="flex shrink-0 items-center">
            <img class="h-8 w-auto" src="@/assets/Aquasys_logo1.png" alt="Your Company" />
            <span class="degrader text-3xl">AQUASYS</span>
          </a>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a v-for="item in navigation" :key="item.name" :href="item.href"
                :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-base font-medium']"
                :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

          <div href="" class="flex cursor-pointer" data-edit="Perfil">
            <iconify-icon icon="material-symbols:account-circle" width="30" height="30" class="pr-1"></iconify-icon>
            <span class="pr-4 self-center"> Admin</span>
          </div>
          <router-link to="/users" class="mx-4">
            <iconify-icon icon="material-symbols:manage-accounts" width="30" height="30" 
              data-edit="Usuários"></iconify-icon>
          </router-link>
          <router-link to="/" class="ml-4">
            <iconify-icon icon="material-symbols:logout-rounded" width="30" height="30" 
              data-edit="Sair"></iconify-icon>
          </router-link>
        </div>
      </div>
    </div>

    <!-- <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel> -->
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
const themeToggleButton = document.getElementById('theme-toggle');
const toggleTheme = () => {
  // Verifica se o body já tem a classe 'dark-mode' para remover ou adicionar
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light'); // Salva a preferência no localStorage
  } else {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark'); // Salva a preferência no localStorage
  }
};



const navigation = [
  // { name: 'Home', href: '/home', current: false },
  { name: 'Famílias', href: '/family', current: false },
  // { name: 'Graficos', href: '/graf', current: false },
  { name: 'Motoristas', href: '/', current: false },
  { name: 'Veículos', href: '/', current: false },
  // { name: 'Usuários', href: '/users', current: false },
]

</script>
<style>
.header {
  background-color: black;
  text-align: center;
  width: 100%;
}
</style>