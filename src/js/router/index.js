import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import HelloWorld from '../../components/HelloWorld.vue';
import Women from '../Layout/Women.vue';
import Men from '../Layout/Men.vue';
import category from '../Layout/category.vue';
import Category from '../Layout/category.vue';
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
    {
      path: '/women',
      name: 'women',
      component: Women,
    },
    {
      path: '/men',
      name: 'men',
      component: Men,
    },
    {
      path: '/category',
      name: 'category',
      component: Category,
    },
    // {
    //     path:'/login',
    //     name:'login',
    //     component: Login
    // }
  ],
});
export default router;
