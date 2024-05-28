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
      path: '/user/:id',
      props: true,
      component: ProfileView,
      children: [
        { path: 'delete', component: DeletionView }
      ]
    }
  ]
})

export default router
