
import * as Vuex from 'vuex'
//important for states


export default new Vuex.Store({
    strict: true,
    state: {
        //base state
        token: null,
        user: null,
        isUserLoggedIn: false
    },
    mutations: {
        // changing the state
        setToken (state, token) {
            state.token = token
            if (token) {
                state.isUserLoggedIn = true
            } else {
                state.isUserLoggedIn = false
            }
        },
        setUser (state, user) {
            state.user = user
        }
    },
    actions: {
        // actions that will change the state
        setToken({commit}, token) {
            commit('setToken', token)
        },
        setUser ({commit}, user) {
            commit('setUser', user)
        }
    }
})