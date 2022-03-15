<template>
  <div class="auth">
    <div class="w-full h-full absolute top-0 bottom-0 left-0 right-0 bg-black opacity-50"></div>
    <div class="w-60 h-60 bg-white rounded-xl absolute left-1/3 top-1/3">
      <div class="flex flex-col items-center justify-center h-full">
        <input class="bg-sky-200 rounded-2xl px-2" type="text" v-model="chatUserName">
        <button class="my-5 bg-sky-600 rounded-3xl px-5 py-1" @click="setUserName">Войти</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-auth",
  data() {
    return {
      chatUserName: ''
    }
  },
  methods: {
    setUserName() {
      localStorage.setItem('chatUserName', this.chatUserName)
      this.$emit('setName', this.chatUserName)
      this.chatUserName = ''
    }
  }
}
</script>

<style scoped>

</style>
