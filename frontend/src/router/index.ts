import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Singin',
      component: () => import('@/views/SingIn.vue'),
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('@/views/users/Users.vue'),
      children: [
        {
          path: 'create',
          name: 'Criar usuário',
          component: () => import('@/views/users/create-user/UserCreateComponent.vue'),
        }, 
        {
          path: 'list',
          name: 'Listar Usuários',
          component: () => import('@/views/users/list-user/UserListComponent.vue'),
        },
        {
          path: 'edit/:id',
          name: 'Atualizar Usuário',
          component: () => import('@/views/users/update-user/UserUpdateComponent.vue'),
        }
      ]
    },
    {
      path: '/drivers',
      name: 'meunmotoristas',
      component: () => import('@/views/Motorista.vue'),
    },
  ],
})

export default router
