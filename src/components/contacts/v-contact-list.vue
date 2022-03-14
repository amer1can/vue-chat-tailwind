<template>
  <div class="v-contact-list">
    <v-contact-user
        v-for="contact in contacts"
        :key="contact.id"
        :contact_data="contact"
        @toContactInfo="showContactInfo(contact)"
    />
  </div>
</template>

<script>
import VContactUser from "@/components/contacts/v-contact-user";
import {mapActions, mapState} from 'vuex'

export default {
  name: "v-contact-list",
  components: {VContactUser},
  computed: {
    ...mapState([
        'contacts',
    ])
  },
  mounted() {
    this.GET_CONTACTS()
  },
  methods: {
   ...mapActions([
        'GET_CONTACTS',
        'SET_CUR_USER_NAME'
   ]),
    showContactInfo(contact) {
      this.$router.push({
        name: 'contact',
        query: {id: contact.id}
      })
      this.SET_CUR_USER_NAME(contact.name)
    },
  }
}
</script>

<style scoped>

</style>
