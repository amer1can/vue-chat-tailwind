<template>
  <div class="v-header py-3 px-5 bg-indigo-900 text-indigo-100 flex justify-between content-center">
    <div v-if="!isHome && !isChats" class="v-header__back flex content-center"
         @click="goBack"
    >
      <i class="material-icons">arrow_back_ios_new</i>
      <span>Назад</span>
    </div>
    <div class="v-header__name">{{ returnHeader }}</div>
    <div class="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center"
         :class="userLogo === '?' ? '' : 'bg-purple-400'">
      <span class="text-4xl">{{ userLogo }}</span>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "v-header",
  computed: {
    ...mapState([
        'currentUserName',
        'authName'
    ]),
    returnHeader() {
      if (this.$route.path === '/' || this.$route.path === 'chats') return ''
      if (this.$route.path === '/settings') return 'Настройки'
      return this.currentUserName
    },
    isHome() {
      return this.$route.path === '/'
    },
    isChats() {
      return this.$route.path === '/chats'
    },
    userLogo() {
      if (this.$store.state.authName === '') {
        return '?'
      } else {
        return this.$store.state.authName[0]
      }
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
