<template>
  <div class="v-footer py-3 px-5 bg-gray-300 flex justify-between">
    <router-link to="/">
      <i class="material-icons">account_circle</i>
    </router-link>
    <router-link to="/chats">
      <i class="material-icons">chat</i>
    </router-link>
    <router-link to="/about">
      <i class="material-icons">settings</i>
    </router-link>
    <router-link to="/">
      <i class="material-icons">call</i>
    </router-link>
    <router-link :to="{name: 'chats'}">
      <i class="material-icons">home</i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "v-footer"
}
</script>

<style scoped>

</style>
