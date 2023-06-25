import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/veiculos',
    name: 'veiculos',
    component: () => import(/* webpackChunkName: "about" */ '../views/VeiculosView.vue')
  },
  {
    path: '/condutores',
    name: 'condutores',
    component: () => import(/* webpackChunkName: "about" */ '../views/CondutoresView.vue')
  },
  {
    path: '/marcas',
    name: 'marcas',
    component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcasView.vue')
  },
  {
    path: '/marca/formulario',
    name: 'marca.form',
    component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcasFormView.vue'),
    children: [
      {
        path: '/marca/formulario',
        name: 'marca.form.editar',
        component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcasFormView.vue')
      },
      {
        path: '/marca/formulario',
        name: 'marca.form.desativar',
        component: () => import(/* webpackChunkName: "about" */ '../views/marca/MarcasFormView.vue')
      }
    ]
  },
  {
    path: '/modelos',
    name: 'modelos',
    component: () => import(/* webpackChunkName: "about" */ '../views/modelo/ModelosView.vue')
  },
  {
    path: '/modelo/formulario',
    name: 'modelo.form',
    component: () => import(/* webpackChunkName: "about" */ '../views/modelo/ModelosFormView.vue'),
    children: [
      {
        path: '/modelo/formulario',
        name: 'modelo.form.editar',
        component: () => import(/* webpackChunkName: "about" */ '../views/modelo/ModelosFormView.vue')
      },
      {
        path: '/modelo/formulario',
        name: 'modelo.form.desativar',
        component: () => import(/* webpackChunkName: "about" */ '../views/modelo/ModelosFormView.vue')
      }
    ]
  },
  {
    path: '/movimentacoes',
    name: 'movimentacoes',
    component: () => import(/* webpackChunkName: "about" */ '../views/movimentacao/MovimentacoesView.vue')
  },
  {
    path: '/movimentacao/formulario',
    name: 'movimentacao.form',
    component: () => import(/* webpackChunkName: "about" */ '../views/movimentacao/MovimentacoesFormView.vue'),
    children: [
      {
        path: '/movimentacao/formulario',
        name: 'movimentacao.form.editar',
        component: () => import(/* webpackChunkName: "about" */ '../views/movimentacao/MovimentacoesFormView.vue')
      },
      {
        path: '/movimentacao/formulario',
        name: 'movimentacao.form.desativar',
        component: () => import(/* webpackChunkName: "about" */ '../views/movimentacao/MovimentacoesFormView.vue')
      }
    ]
  },
  {
    path: '/configs',
    name: 'configuracoes',
    component: () => import(/* webpackChunkName: "about" */ '../views/ConfigsView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
