import Vue from 'vue'
import App from './App.vue'
import { Grid } from '@progress/kendo-vue-grid'
import '@progress/kendo-theme-default/dist/all.css'

Vue.component('Grid', Grid);

new Vue({
  el: '#app',
  render: h => h(App)
})
