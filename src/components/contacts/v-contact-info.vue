<template>
  <div class="v-contact-info text-center">
    <div class="bg-yellow-500 w-40 h-40 mx-auto my-5 rounded-full flex items-center justify-center">
      <span class="text-7xl font-bold">{{ this.logo }}</span>
    </div>

    <div class="user-info-name">
      <span>{{ currentUser.name }}</span>
    </div>
    <div class="user-info-phone">
      <span>{{ currentUser.phone }} </span>
    </div>

    <div class="user-info-status">
      <span>{{ currentUser.status }}</span>
    </div>

    <div class="user-btns my-5">
      <button class="bg-sky-500 rounded px-3 py-2 mx-3">Позвонить</button>
      <button class="bg-purple-500 rounded px-3 py-2 mx-3" @click="startChatTo(currentUser.id)">Начать чат</button>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions } from 'vuex'

export default {
  name: "v-contact-info",
  data() {
    return {
      currentUser: {},
      logo: ''
    }
  },
  mounted() {
    this.currentUser = this.contacts.find(elem => elem.id == this.$route.query.id)
    // === не сработает потому что this.$route.query.id - строка, elem.id - число
    this.logo = this.currentUser.name[0]
  },
  computed: {
    ...mapState([
        'contacts',
        'chats'
    ]),
  },
  methods: {
    ...mapActions([
        'GET_CHATS'
    ]),
    async startChatTo(id) {
      if (this.chats.length === 0) {
       await this.GET_CHATS()
      }

      await this.$router.push({
        name: 'chat',
        params: {id}
      })
    }
  }
}
</script>

<style scoped>

</style>
