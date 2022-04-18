import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { setupStore } from '@/store/index';
const app = createApp(App);
setupStore(app);
app.use(router).mount('#app');
