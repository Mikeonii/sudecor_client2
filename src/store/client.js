export default {
    namespaced: true,
    state: {
        client: null,
        error_message: null,
        is_admin_active: false,
    },
    getters: {
        client(state) {
            return state.client
        },
        error_message(state) {
            return state.error_message
        },
        is_admin_active(state) {
            return state.is_admin_active
        }

    },
    mutations: {
        SET_CLIENT(state, data) {
            state.client = data
        },
        SET_ERROR_MESSAGE(state, data) {
            state.error_message = data
        },
        SET_IS_ADMIN_ACTIVE(state, admin_state) {
            state.is_admin_active = admin_state
        }
    },
    actions: {

        
        set_is_admin_active({ commit }, admin_state) {
            commit('SET_IS_ADMIN_ACTIVE', admin_state)
        },
        async insert_client({ commit }, client) {
            commit('SET_CLIENT', client)
        },
        async set_error_message({ commit }, error_message) {
            commit('SET_ERROR_MESSAGE', error_message)
        }


    },

}
