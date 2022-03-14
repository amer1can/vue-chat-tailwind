<template>
  <div class="v-user flex items-center justify-between">
    <div class="info flex">
      <div class="chat-ava w-14 h-14 rounded bg-red-200 "></div>

      <div class="chat-name py-2 mx-5">
        <span class="block font-bold">{{ chat_data.name }}</span>
        <span class="text-xs italic">{{ chat_data.chat[0].text }}</span>
      </div>
    </div>
    <div class="chat-arr">
      <i class="material-icons">double_arrow</i>
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
  }
}
</script>

<style scoped>

</style>
