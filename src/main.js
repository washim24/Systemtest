import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import router from "./router";
import 'buefy/dist/buefy.css'
import 'buefy/dist/buefy.css'

// import store from "./store";
// Add Buefy File




Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({

  // store,
  router,
  render: h => h(App),
}).$mount('#app')
