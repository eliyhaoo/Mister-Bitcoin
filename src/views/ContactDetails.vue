
<template>
  <h1>Contact-Details</h1>
  <div v-if="contact" class="contact-details">
      <h4>Name:{{ contact.name }}</h4>
      <h4>Phone: {{ contact.phone }}</h4>
      <h4>Email:{{ contact.email }}</h4>
      <div class="actions">
        <button @click="onBack">Back</button>
        <RouterLink :to="`/contact/edit/${contact._id}`">Edit</RouterLink>
      </div>
  </div>
</template>

<script>
import { contactService } from "@/services/contact.service.js";

export default {
  data() {
    return {
      contact: null,
    };
  },
  methods: {
    onBack() {
      this.$router.push("/contact");
    },
  },
  async created() {
    const id = this.$route.params._id;

    this.contact = await contactService.getById(id);
  },
};
</script>

<style lang="sass">
</style>