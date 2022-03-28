import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'

const app = createApp(App) 
// app.use(ElementPlus, { size: 'small', zIndex: 3000 });
// app.component(
//     'MyComponent',
//     {
        
//     }
// )
app.use(router).mount('#app');