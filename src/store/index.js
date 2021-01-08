import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

// Modules
import common from './modules/common'
import persist from './modules/persist'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    reducer: state => ({
		persist: state.persist
    })
})

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        common,
        persist
    },
    plugins: [vuexLocal.plugin]
})
