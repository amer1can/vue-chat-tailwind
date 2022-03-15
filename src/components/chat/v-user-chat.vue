<template>
  <div class="chat-wrapper flex flex-col h-full">
    <ul class="v-user-chat flex grow flex-col my-5 mx-2">
      <li class="chat-row my-1"
          :class="row.type === 'own' ? 'self-end' : 'self-start'"
          v-for="row in currentChat.chat"
          :key="row.id">
        <div :class="row.type === 'own' ? 'bg-blue-300 align' : 'bg-green-300'"
             class="rounded-lg px-2 py-1">
          <span>{{ row.text }}</span>
        </div>
        <span class="flex justify-end text-xs font-mono mx-1 text-gray-500">{{ row.time }}</span>
      </li>
    </ul>

    <div class="bg-indigo-900 text-indigo-100">
      <div class="flex items-center py-1">
        <input class="rounded-lg px-2 py-1 mx-2 w-full outline-none bg-indigo-700" type="text" v-model="message" @keypress.enter="sendMessage">
        <button class="mx-5 flex justify-center items-center" @click="sendMessage">
          <i class="material-icons">send</i>
        </button>
      </div>
    </div>
  </div>

</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: "v-user-chat",
  props: ['id'],
  data() {
    return {
      currentChat: {},
      message: ''
    }
  },
  computed: {
    ...mapState([
        'chats'
    ])
  },
  mounted() {
    this.currentChat = this.chats.find(elem => elem.id == this.id)
    // именно == потому что this.id - строка, elem.id - число
  },
  methods: {
    ...mapActions([
       'SET_MESSAGE_TO_CHAT'
    ]),
    sendMessage() {
      const chat = {
        id: this.currentChat.chat.length + 1,
        time: new Date().toLocaleTimeString('en-US',{
          hour12: false,
          hour: 'numeric',
          minute: 'numeric'
        }),
        text: this.message,
        type: 'own'
      }
      this.currentChat.chat.push(chat)
      this.message = ''
      this.SET_MESSAGE_TO_CHAT({id: this.currentChat.id, chat: this.currentChat})
    }
  }

}
</script>

<style scoped>

</style>
