<template>
  <div class="v-main-wrapper flex flex-col sm:container sm:mx-auto">
    <v-header />
    <v-body />
    <v-footer />
  </div>
  <v-auth v-if="this.$store.state.isAuth"
          @setName="setUserName(name)"
  />

</template>

<script>
import VHeader from "@/components/layouts/v-header";
import VFooter from "@/components/layouts/v-footer";
import VBody from "@/components/layouts/v-body";
import VAuth from "@/components/layouts/v-auth";
import {mapMutations} from 'vuex'

export default {
  name: "v-main-wrapper",
  components: {VAuth, VBody, VFooter, VHeader},
  data() {
    return {

    }
  },
  mounted() {
    if (!localStorage.getItem('chatUserName')) {
      this.SET_AUTH(true)
    } else {
      this.setUserName(localStorage.getItem('chatUserName'))
    }
  },
  methods: {
    ...mapMutations([
      'SET_AUTH_USER_NAME',
      'SET_AUTH'
    ]),
    setUserName(name) {
      this.SET_AUTH_USER_NAME(name)
      this.SET_AUTH(false)
    }
  }


}
</script>

<style scoped>
.v-main-wrapper {
  height: 100vh;
}
</style>
