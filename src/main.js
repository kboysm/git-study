import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin, BadgePlugin  } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import TextHighlight from 'vue-text-highlight';
// import FullCalendar from "vue-full-calendar";

// import "fullcalendar/dist/fullcalendar.min.css";
Vue.use(require('vue-moment'));
// Vue.use(FullCalendar);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(BadgePlugin)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.component('text-highlight', TextHighlight);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
