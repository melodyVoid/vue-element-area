import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import Area from '../src/index'
Vue.use(Area)
new Vue({
  render: h => h(App)
}).$mount('#app')
