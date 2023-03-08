import { createStore } from 'vuex'

export default createStore({
    // state : 使用 Proxy 實作，因此事響應式資料 
    state: {
        count : 1
    },

    actions: {
        add({ commit }, value){
            commit('ADD',value)
        },

        multiple({ commit }, value){
            commit('MULTIPLE', value)
        }
    },
    mutations: {
        ADD(state, value){
            state.count += value
            console.log(state.count)
        },

        MULTIPLE(state, value){
            state.count *= value
            console.log(state.count)
            console.log(this)
        }


    }
})