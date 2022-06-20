
<template>
  <h1>Welcome to Contact-App</h1>
  <ContactFilter @set-filter="onFilter" />
  <ContactList :contacts="contactsToDisplay" />
<RouterLink to="/contact/edit">Add</RouterLink>
  
</template>

<script>
import ContactList from "@/components/ContactList.vue";
import ContactFilter from "@/components/ContactFilter.vue";
export default {
  data() {
    return {
      filterBy: {
        txt: "",
      },
    };
  },
  methods: {
    onFilter(filterBy) {
      this.filterBy = filterBy;
    },
  },
  computed: {
    contactsToDisplay() {
      const regex = new RegExp(this.filterBy.txt, "i");
      return this.contacts.filter((contact) => regex.test(contact.name));
   
    },
    contacts(){return this.$store.getters.contacts}
  },
   created() {
    this.$store.dispatch({ type: "loadContacts" });
  },
  components: {
    ContactList,
    ContactFilter,
  },
};
</script>

<style lang="sass">
</style>