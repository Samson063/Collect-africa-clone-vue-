import { createApp } from 'vue'
import App from './App.vue'
import '../src/styles.css'
import {createRouter, createWebHistory} from 'vue-router'
import PricePage from  './components/PricePage.vue'


const routes = [
  {path: '/pricing', component: PricePage},
  {path: '/about-us', component: PricePage},
  {path: '/docs', component: PricePage},
  {path:  '/:pathMatch(.*)*', component: PricePage}
]

const router =createRouter({
  history: createWebHistory(),
  routes
})
 createApp(App).use(router).mount("#app")

