import { createStore } from 'vuex'
export default createStore({
    // 所有在 store 裏的資料
    state : {
        count: 0
    },
    
    // 負責改變 state 裏的資料
    mutations : {
        ADD_VALUE(state, value){
            console.log(state.count)
            state.count += value
            console.log(state.count)
        },

        MINUS_VALUE(state, value){
            state.count -= value
        },
    },

    // 負責觸發 mutations，不直接更動資料
    // add(a, b) : a 是一個對象，包含 commit, dispatch等方法，類似於 mini store，官方稱其為 context; b 則是傳入的參數
    actions :{
        add({ commit }, value){
            console.log("add")
            commit("ADD_VALUE", value)
        },

        minus({commit}, value){
            console.log("minus")
            commit("MINUS_VALUE", value)
        },

        addWhenOdd({commit}, value){
            console.log("addWhenOdd")
            if (this.state.count % 2 != 0) commit("ADD_VALUE", value)
        },

        addLate({commit}, value){
            console.log("addLate")
            setInterval(() => {commit("ADD_VALUE", value)}, 2000) 
        }
    }   
})

