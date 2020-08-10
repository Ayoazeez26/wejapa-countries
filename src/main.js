import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Select2 from 'v-select2-component';
 


import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)
Vue.component('Select2', Select2);


new Vue({
  render: h => h(App),
}).$mount('#app')
