import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(Vuex)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

const store = new Vuex.Store({
    state    : {
        data           : [],
        rows           : [],
        cols           : [],
        showSpreadsheet: true,
        highlights     : [],
        accomplishments: [],
        improvements   : []
    },
    getters  : {
        data           : state => {
            return state.data
        },
        rows           : state => {
            return state.rows
        },
        cols           : state => {
            return state.cols
        },
        showSpreadsheet: state => {
            return state.showSpreadsheet
        },
        highlights     : state => {
            return state.highlights
        },
        accomplishments: state => {
            return state.accomplishments
        },
        improvements   : state => {
            return state.improvements
        }
    },
    mutations: {
        setData(state, data) {
            state.data = data.data
            window.localStorage.setItem('data', JSON.stringify(data.data))
            console.log(window.localStorage.getItem('data'))
        },
        setCols(state, cols) {
            state.cols = cols.data
        },
        toggleSpreadsheet(state) {
            state.showSpreadsheet = !state.showSpreadsheet
        },
        setHighlights(state, payload) {
            state.highlights.push(payload.data)
        },
        setAccomplishments(state, accomplishments) {
            state.accomplishments.push(accomplishments.data)
        },
        setImprovements(state, improvements) {
            state.improvements.push(improvements.data)
        }
    },
    actions  : {
        setData: ({commit}, data) => commit('setData', data),
        setCols: ({commit}, cols) => commit('setCols', cols),
        toggleSpreadsheet(context) {
            context.commit('toggleSpreadsheet')
        },
        setHighlights     : ({commit}, payload) => commit('setHighlights', payload),
        setAccomplishments: ({commit}, payload) => commit('setAccomplishments', payload),
        setImprovements   : ({commit}, payload) => commit('setImprovements', payload)
    }
})

new Vue({
    render: h => h(App),
    store : store
}).$mount('#app')
