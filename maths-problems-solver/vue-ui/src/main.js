import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from "primevue/config";
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.min.css';



const app = createApp(App);
app.use(PrimeVue);
app.mount('#app');
