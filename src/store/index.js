import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import common from './modules/common'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        common
    }
})
