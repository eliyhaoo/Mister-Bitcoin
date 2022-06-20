<template>
  <section class="contact-list">
    <h4>Contact List</h4>
    <article
      v-for="contact in contacts"
      :key="contact._id"
      class="contact-preview-container"
    >
        <ContactPreview :contact="contact" />
    

    </article>
  </section>
</template>

<script>
import ContactPreview from "@/components/ContactPreview.vue";

export default {
  props: {
    contacts: {
      type: Array,
      require: true,
    },
  },
  components: {
    ContactPreview,
  },

};
</script>

<style lang="scss">
.contact-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  .contact-preview-container {
  }
}
</style>