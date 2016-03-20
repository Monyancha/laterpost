import Vue from 'vue'
import NavBar from './partials/navbar.vue'
import Modal from './partials/modal.vue'
import DateTime from './partials/DateTime.vue'

export default {
  registerAllGlobalComponents(){
    Vue.component('navbar',NavBar);
    Vue.component('v-modal',Modal);
    Vue.component('v-timepicker',DateTime);
  }
}