<template>
  <div class="v-contact-info text-center">
    <div class="user-info-avatar bg-yellow-500 w-40 h-40 mx-auto my-5 rounded-full"></div>

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
      <button class="bg-purple-500 rounded px-3 py-2 mx-3">Начать чат</button>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "v-contact-info",
  data() {
    return {
      currentUser: {}
    }
  },
  mounted() {
    // this.currentUser = this.contacts.find(elem => elem.id === this.$route.query.id)
    this.contacts.find(elem => {
      if (elem.id == this.$route.query.id) {
        this.currentUser = elem
      }
    })
  },
  computed: {
    ...mapState([
        'contacts'
    ]),
  },
}
</script>

<style scoped>

</style>
