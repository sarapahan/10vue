import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        foods: []
    },

    mutations: {
        addFood(state, { payload }) {
            state.foods.push(payload);
        },
    },

    actions: {
        addFood({ commit }, payload) {
            commit("addFood", { payload });
        },
    },

    getters: {
        foods: state => state.foods
    }
});