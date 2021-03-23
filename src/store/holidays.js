import axios from "axios"

export default {
    namespaced: true,
    state: {
        holidays: []
    },
    mutations: {
        ADD_HOLIDAY(state, data) {
            state.holidays = state.holidays.concat(data);
        },
        SET_HOLIDAYS(state, data) {
            state.holidays = data
        },
        DEL_HOLIDAY(state, data) {
            let holidays = state.holidays.filter(v => v.id != data.id);
            state.holidays = holidays;
        },
        EDIT_HOLIDAY(state, data) {
            state.holidays.forEach(function (s, index) {
                if (s.id == data.id) {
                    Object.assign(state.holidays[index], data);
                }
            })
        }
    },
    actions: {
        async edit_holiday({ commit }, form) {
            commit('EDIT_HOLIDAY', form);
        },
        async add_holiday({ commit }, form) {
            let response = await axios.post('/add_holiday', form);
            commit('ADD_HOLIDAY', response.data);
        },
        async del_holiday({ commit }, item) {
            commit('DEL_HOLIDAY', item)
        },
        async set_holidays({ commit }) {
            let response = await axios.get('/holidays');
            commit('SET_HOLIDAYS', response.data);
            return response;
        }
    },

}
