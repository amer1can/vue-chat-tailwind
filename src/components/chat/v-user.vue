<template>
  <div class="v-user flex items-center justify-between"
       @click="goToChat"
  >
    <div class="info flex">
      <div class="chat-ava w-14 h-14 rounded bg-red-200 "></div>

      <div class="chat-name py-2 mx-5">
        <span class="block font-bold">{{ chat_data.name }}</span>
        <span class="text-xs italic">{{ chat_data.chat[chat_data.chat.length - 1].text }}</span>
      </div>
    </div>
    <div class="chat-arr">
      <span class="text-xs italic">{{ chat_data.chat[chat_data.chat.length - 1].time }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-user",
  props: {
    chat_data: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    goToChat() {
      this.$emit('goToChat')
    }
  }
}
</script>

<style scoped>

</style>
