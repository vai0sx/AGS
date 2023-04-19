// store/index.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    account: null,
    aips: [],
  },
  mutations: {
    setAccount(state, account) {
      state.account = account;
    },
    setAIPs(state, aips) {
      state.aips = aips;
    },
  },
  actions: {
    async connectWallet({ commit }) {
      const connected = await walletAPI.connectWallet();
      if (connected) {
        const account = await walletAPI.getAccount();
        commit('setAccount', account);
      }
      return connected;
    },
    async fetchAIPs({ commit }) {
      const aips = await aaveAPI.getAIPs();
      commit('setAIPs', aips);
    },
  },
});

export default store;
