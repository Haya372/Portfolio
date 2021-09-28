import "core-js/stable";
import "regenerator-runtime/runtime";

import { createApp } from 'vue';
import App from './App.vue';

document.addEventListener('DOMContentLoaded', () => {
  createApp(App).mount('#app');
});