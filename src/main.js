import Vue from 'vue'
import App from './App.vue'
import GlobalComponent from './GlobalComponent.vue'

Vue.component('globalComponent', GlobalComponent);

new Vue({
  el: '#app',
  render: h => h(App)
})
