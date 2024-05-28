import { createRouter, createWebHistory } from 'vue-router'
import ListView from '../views/ListView.vue'
import ProfileView from '../views/ProfileView.vue'
import DeletionView from '../views/DeletionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: ListView,
      props: true
    },
    {
      path: '/user',
      name: 'create',
      component: ProfileView
    },
    {
      path: '/user/:id',
      name: 'update',
      component: ProfileView,
      children: [
        {
          path: '/delete',
          name: 'delete',
          component: DeletionView
        }
      ]
    }
  ]
})

export default router
