
<template>
  <section v-if="contact" class="contact-edit">
    <h2>{{ displayTitle }}</h2>
    <button class="delete-btn" v-if="contact._id" @click="onRemove">X</button>
    <form class="edit-form" @submit.prevent="onSave">
      <input id="name" type="text" v-model="contact.name" placeholder="Name" />
      <input type="tel" v-model="contact.phone" placeholder="Phone"/>
      <input type="email" v-model="contact.email" placeholder="Email"/>
      <div class="actions">
        <button type="submit">Save</button>
        <button type="button" @click="back">Back</button>
      </div>
    </form>
  </section>
  <div v-else>Loading...</div>
</template>

<script>
import { contactService } from "@/services/contact.service.js";

export default {
  data() {
    return {
      contact: null,
    };
  },
  computed: {
    displayTitle() {
      return this.contact._id ? `Edit ${this.contact.name}` : "Add new contact";
    },
  },
  async created() {
    const _id = this.$route.params._id;
    if (_id) {
      const contact = await contactService.getById(_id);
      if (contact) {
        this.contact = contact;
        return;
      }
    }
    this.contact = await contactService.getEmptyContact();
  },
        methods: {
          back() {
            this.$router.push("/contact");
          },
          async onSave() {
            await this.$store.dispatch({type:'saveContact',contact:this.contact})
            this.back();
          },
          async onRemove(){
            await this.$store.dispatch({type:'removeContact',_id:this.contact._id})
            this.back();
          },
      
        },
};
</script>

<style lang="scss">
.contact-edit {
  
  .edit-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  
      > input {
        min-width: 300px;
        border-radius: 16px;
        height:1.5rem;
        padding:14px 24px;
      }
      button{
        margin-inline-end: 15px;
      }
    
  }
  .delete-btn{
    position:relative;
    left:400px;
    cursor: pointer;
    
  }
}
</style>