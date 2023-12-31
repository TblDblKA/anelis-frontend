import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/sass/style.scss'

Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App),
  watch: {
    '$route'() {
      console.log(this.$refs.app)
    }
  }
}).$mount('#app')
