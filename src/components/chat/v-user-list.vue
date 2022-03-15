<template>
  <div class="v-user-list mx-4 my-4">
    <v-user
        v-for="chat in chats"
        :key="chat.id"
        :chat_data="chat"
        @goToChat="showUserChat(chat)"
    />
  </div>
</template>

<script>
import VUser from "@/components/chat/v-user";
import {mapState, mapActions} from 'vuex'

export default {
  name: "v-user-list",
  components: {VUser},
  computed: {
    ...mapState([
        'chats'
    ])
  },
  methods: {
    ...mapActions([
        'GET_CHATS',
        'SET_CUR_USER_NAME'
    ]),
    showUserChat(chat) {
      this.$router.push({
        name: 'chat',
        params: {id: chat.id}
      })
      this.SET_CUR_USER_NAME(chat.name)
    }
  },
  mounted() {
    this.GET_CHATS()
  }
}
</script>

<style scoped>

</style>
