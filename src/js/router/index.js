import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import HelloWorld from '../../components/HelloWorld.vue';
// import Login from '../views/Login.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld,
    },
    // {
    //     path:'/login',
    //     name:'login',
    //     component: Login
    // }
  ],
});
export default router;
