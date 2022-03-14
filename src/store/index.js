import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    contacts: [],
    chats: [],
    currentUserName: ''
  },
  getters: {
  },
  mutations: {
    SET_CONTACTS_TO_STORE(state, payload) {
      state.contacts = payload
    },
    SET_CURRENT_USER_NAME(state, payload) {
      state.currentUserName = payload
    },
    SET_CHATS_TO_STORE(state, payload) {
      state.chats = payload
    },
  },
  actions: {
    GET_CONTACTS({commit}) {
      return axios.get('http://localhost:3000/contacts')
          .then(contacts => commit('SET_CONTACTS_TO_STORE', contacts.data))
    },
    GET_CHATS({commit}) {
      return axios.get('http://localhost:3000/chats')
          .then(chats => commit('SET_CHATS_TO_STORE', chats.data))
    },
    SET_CUR_USER_NAME({commit}, name) {
      commit('SET_CURRENT_USER_NAME', name)
    }
  },
  modules: {
  }
})
