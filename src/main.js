// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(Buefy, {defaultIconPack: 'fa'})

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD9dURSTkp0liFKoCPOOP16i85DNpyVR7k',
    libraries: 'places, drawing'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
