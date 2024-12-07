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
          component: () => import('@/views/users/create-user/UserCreateView.vue'),
        }, 
        {
          path: 'list',
          name: 'Listar Usuários',
          component: () => import('@/views/users/list-user/UserListView.vue'),
        },
        {
          path: 'edit/:id',
          name: 'Atualizar Usuário',
          component: () => import('@/views/users/update-user/UserUpdateView.vue'),
        }
      ]
    },
    {
      path: '/drivers',
      name: 'drivers',
      component: () => import('@/views/drivers/Drivers.vue'),
      children: [
        {
          path: 'create',
          name: 'Criar Motorista',
          component: () => import('@/views/drivers/create-driver/DriverCreateView.vue'),
        }, 
        {
          path: 'list',
          name: 'Listar Motorista',
          component: () => import('@/views/drivers/list-driver/DriverListView.vue'),
        },
        {
          path: 'edit/:id',
          name: 'Atualizar Motorista',
          component: () => import('@/views/drivers/update-driver/DriverUpdateView.vue'),
        }
      ]
    },
    {
      path: '/family',
      name: 'family',
      component: () => import('@/views/family/Family.vue'),
      children: [
        {
          path: 'create',
          name: 'Criar Família',
          component: () => import('@/views/family/create-family/FamilyCreateView.vue'),
        }, 
        {
          path: 'list',
          name: 'Listar Família',
          component: () => import('@/views/family/list-family/FamilyListView.vue'),
        },
        {
          path: 'edit/:id',
          name: 'Atualizar Família',
          component: () => import('@/views/family/update-family/FamilyUpdateView.vue'),
        }
      ]
    },
    // {
    //   path: '/vehicles',
    //   name: 'vehicles',
    //   component: () => import('@/views/vehicles/Vehicle.vue'),
    //   children: [
    //     {
    //       path: 'create',
    //       name: 'Criar Veículo',
    //       component: () => import('@/views/vehicles/create-vehicle/VehicleCreateView.vue'),
    //     }, 
    //     {
    //       path: 'list',
    //       name: 'Listar Veículo',
    //       component: () => import('@/views/vehicles/list-vehicle/VehicleListView.vue'),
    //     },
    //     {
    //       path: 'edit/:id',
    //       name: 'Atualizar Veículo',
    //       component: () => import('@/views/vehicles/update-vehicle/VehicleUpdateView.vue'),
    //     }
    //   ]
    // },
  ],
})

export default router
