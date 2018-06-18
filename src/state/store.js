import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    modal: {
      show: false,
      active: null
    }
  },
  getters: {
    modalShown: state => state.modal.show,
    modalData: state => state.modal.active
  },
  mutations: {
    activateModal (state, payload) {
      state.modal.show = true;
      state.modal.active = payload;
    },
    closeModal (state) {
      state.modal.show = false;
      state.modal.active = null;
    }
  },
  actions: {
    activateModal (context, payload) {
      context.commit('activateModal', payload);
    }
  }
});
