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
      path: '/home',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/graf',
      name: 'Grafico',
      component: () => import('@/views/HomeGrafico.vue'),
      children: [
        {
          path: 'view',
          name: 'Ver Gráficos',
          component: () => import('@/views/graficos/GraficosView.vue')
        }
      ]
    },
    {
      path: '/users',
      name: 'Usuários',
      component: () => import('@/views/users/UsersMenu.vue'),
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
      component: () => import('@/views/drivers/DriversMenu.vue'),
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
      path: '/members',
      name: 'members',
      component: () => import('@/views/family/members/Member.vue'),
      children: [
        {
          path: 'create',
          name: 'Criar Membro da Família',
          component: () => import('@/views/family/members/create-member/MemberCreateView.vue'),
        },
        {
          path: 'list',
          name: 'Listar Membro da Família',
          component: () => import('@/views/family/members/list-member/MemberListView.vue'),
        },
        {
          path: 'edit/:id',
          name: 'Atualizar Membro da Família',
          component: () => import('@/views/family/members/update-member/MemberUpdateView.vue'),
        }
      ]
    },
    {
      path: '/family',
      name: 'Famílias',
      component: () => import('@/views/family/FamilyMenu.vue'),
      children: [
        {
          path: 'create',
          name: 'Criar Familiar Responsável',
          component: () => import('@/views/family/heads/create-head/HeadCreateView.vue'),
        },
        {
          path: 'list',
          name: 'Listar Familiar Responsável',
          component: () => import('@/views/family/heads/list-head/HeadListView.vue'),
        },
        {
          path: 'edit/:id',
          name: 'Atualizar Familiar Responsável',
          component: () => import('@/views/family/heads/update-head/HeadUpdateView.vue'),
        }
      ]
    },
    {
      path: '/trucks',
      name: 'trucks',
      component: () => import('@/views/trucks/Trucks.vue'),
      children: [
        {
          path: 'create',
          name: 'Criar Veículo',
          component: () => import('@/views/trucks/create-trucks/TrucksCreateView.vue'),
        },
        {
          path: 'list',
          name: 'Listar Veículo',
          component: () => import('@/views/trucks/list-trucks/TrucksListView.vue'),
        },
        {
          path: 'edit/:id',
          name: 'Atualizar Veículo',
          component: () => import('@/views/trucks/update-trucks/TrucksUpdateView.vue'),
        }
      ]
    },
  ],
})

export default router
