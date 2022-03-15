import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    contacts: [],
    chats: [],
    currentUserName: '',
    isAuth: false,
    authName: ''
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
    SET_AUTH_USER_NAME(state, payload) {
      state.authName = payload
    },
    SET_AUTH(state, payload) {
      state.isAuth = payload
    }
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
    },
    /*eslint-disable no-unused-vars*/
    SET_MESSAGE_TO_CHAT({commit}, {id, chat}) {
    /*eslint-enable no-unused-vars*/
      // console.log(id)
      // console.log(chat)
      return axios.put('http://localhost:3000/chats/' + id, chat)
          .then(response => console.log(response))

    }
  },
  modules: {
  }
})
