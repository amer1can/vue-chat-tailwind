<template>
  <div class="v-header py-3 px-5 bg-gray-300 flex justify-between content-center">
    <div v-if="!isHome" class="v-header__back flex content-center"
         @click="goBack"
    >
      <i class="material-icons">arrow_back_ios_new</i>
      <span>Назад</span>
    </div>
    <div class="v-header__name">{{ isHome ? '' : currentUserName }}</div>
    <div class="v-header__menu">
      <i class="material-icons">menu</i>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "v-header",
  computed: {
    ...mapState([
        'currentUserName'
    ]),
    isHome() {
      return this.$route.path === '/'
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
