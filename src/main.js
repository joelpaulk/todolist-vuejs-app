import Vue from 'vue';
import App from './App.vue';
import store from './store';
import './assets/tailwind.css'; // import TailwindCSS
import router from './router';
import './assets/main.css';


// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faCheck, faTrashAlt, faClone } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import '@fortawesome/fontawesome-svg-core/styles.css';

// library.add(faCheck, faTrashAlt, faClone);
// Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#app');
