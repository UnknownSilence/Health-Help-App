import Vuex from 'vuex';
import Vue from 'vue';
// import modules here
import appStore from "./modules/appStore"

// Load vuex module
Vue.use(Vuex)

// Generatre my store
export default new Vuex.Store({
    modules: {
        appStore
    }
})