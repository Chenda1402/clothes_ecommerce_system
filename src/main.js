import { createApp } from 'vue';
import App from './App.vue';
import router from './js/router';
import '../src/style.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
