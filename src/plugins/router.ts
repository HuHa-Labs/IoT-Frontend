import { createWebHistory, createRouter } from 'vue-router';

import AboutPage from '@/pages/AboutPage.vue';
import DashboardPage from '@/pages/DashboardPage.vue';

const routes = [
  { path: '/', component: DashboardPage},
  { path: '/about', component: AboutPage},
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
