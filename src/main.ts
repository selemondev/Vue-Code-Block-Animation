import { createApp } from 'vue'
import './style.css'
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css';
import '@ocrv/vue-tailwind-tabs/styles'
import App from './App.vue'
const app = createApp(App);
app.component('PrismEditor', PrismEditor);
app.mount('#app')

