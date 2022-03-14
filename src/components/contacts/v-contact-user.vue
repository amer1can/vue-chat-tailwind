<template>
  <div class="v-contact-user flex justify-between py-2 px-5 items-center"
       @click="toContactInfo"
  >
    <div class="w-12 h-12 rounded-full bg-orange-600"></div>
    <div class="user-name">
      <span>{{ contact_data.name }}</span>
    </div>
    <div class="user-status">
      <span class="w-2 h-2 block rounded-full" :class="onlineStatus"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-contact-user",
  props: {
    contact_data: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    onlineStatus() {
      return {
        'bg-green-700': this.contact_data.status === 'online',
        'bg-red-500': this.contact_data.status === 'offline',
      }
    }
  },
  methods: {
    toContactInfo() {
      this.$emit('toContactInfo')
    }
  }
}
</script>

<style scoped>
</style>
