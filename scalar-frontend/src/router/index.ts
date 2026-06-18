import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView.vue'
import TarifsView from '@/views/TarifsView.vue'
import CheckoutView from '@/views/CheckoutView.vue'
import ConfirmationView from '@/views/ConfirmationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'landing', component: LandingView },
    { path: '/tarifs', name: 'tarifs', component: TarifsView },
    { path: '/checkout', name: 'checkout', component: CheckoutView },
    { path: '/confirmation', name: 'confirmation', component: ConfirmationView },
  ],
})

export default router
