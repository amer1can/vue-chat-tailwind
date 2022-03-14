<template>
  <div class="v-main-wrapper flex flex-col sm:container sm:mx-auto">
    <v-header />
    <v-body />
    <v-footer />
  </div>
</template>

<script>
import VHeader from "@/components/layouts/v-header";
import VFooter from "@/components/layouts/v-footer";
import VBody from "@/components/layouts/v-body";
export default {
  name: "v-main-wrapper",
  components: {VBody, VFooter, VHeader}
}
</script>

<style scoped>
.v-main-wrapper {
  height: 100vh;
}
</style>
