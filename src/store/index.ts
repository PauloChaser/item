import {createStore} from 'vuex'
import {fetchApiWithCache} from "@/api/apiService";

export default createStore({
    state: {
        base: 'USD',
        rates: {},
        currencies: {},

        converterRate: 1
    },
    getters: {
        BASE: state => state.base,
        CURRENCIES: state => state.currencies,
        RATES: state => state.rates,
        CONVERTER_RATE: state => state.converterRate
    },
    mutations: {
        SET_BASE: (state, payload) => {
            state.base = payload;
        },
        SET_RATES: (state, payload) => {
            state.rates = payload;
        },
        SET_CURRENCIES: (state, payload) => {
            state.currencies = payload;
        },
        SET_CONVERTER_RATE: (state, payload) => {
            state.converterRate = payload;
        },
    },
    actions: {
        GET_INITIAL_DATA: async ({commit, dispatch, getters}) => {
            const {symbols} = await fetchApiWithCache('symbols')

            await dispatch('GET_RATES', getters.BASE)

            commit('SET_CURRENCIES', symbols)
        },
        GET_RATES: async ({commit}, payload) => {
            const params = {
                cbase: payload
            }

            const {rates} = await fetchApiWithCache('latest', params)

            commit('SET_BASE', payload)
            commit('SET_RATES', rates)
        },
        GET_CONVERTER_RATE: async ({commit}, payload) => {
            const params = {
                cbase: payload.from,
                symbols: payload.to,
            }

            const {rates} = await fetchApiWithCache('latest', params)
            const rate = Object.values(rates)[0]

            commit('SET_CONVERTER_RATE', rate)
        }
    },
})