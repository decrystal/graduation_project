import {createStore} from 'vuex'

export default createStore({
    strict:true,
    state: {
        isSiderBarMinized:false,
    },
    mutations: {
        updateSidebarCollapsedState(state,value) {
            state.isSiderBarMinized = value;
        }
    }
})