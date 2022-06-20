import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ContactApp from '../views/ContactApp.vue'
import ContactDetails from '../views/ContactDetails.vue'
import ContactEdit from '../views/ContactEdit.vue'
import StatisticPage from '../views/StatisticPage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/contact',
      name: 'contact',
      component:ContactApp
    },
    {
      path: '/statistic',
      name: 'statistic',
      component:StatisticPage
    },
    {
      path: '/contact/:_id',
      name: 'details',
      component:ContactDetails
    },
    {
      path: '/contact/edit/:_id?',
      name: 'Edit/Add',
      component:ContactEdit
    },

  ]
})

export default router
