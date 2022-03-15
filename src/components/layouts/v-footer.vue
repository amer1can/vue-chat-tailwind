<template>
  <div class="v-footer bg-indigo-900 text-indigo-100 flex justify-between">
    <router-link to="/">
      <i class="material-icons z-50 py-3 px-5">account_circle</i>
    </router-link>
    <router-link to="/chats">
      <i class="material-icons z-50 py-3 px-5">chat</i>
    </router-link>
    <router-link to="/settings">
      <i class="material-icons z-50 py-3 px-5">settings</i>
    </router-link>
    <router-link to="/">
      <i class="material-icons z-50 py-3 px-5">call</i>
    </router-link>
    <router-link to="/">
      <i class="material-icons z-50 py-3 px-5">home</i>
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
