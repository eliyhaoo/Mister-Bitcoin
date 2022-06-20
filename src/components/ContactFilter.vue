<template>
  <section class="contact-filter">
   
    <input @input="onFilterBy" v-model="filterBy.txt" type="text" placeholder="Search contact">
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        txt: "",
      },
    }
  },
  methods:{
    onFilterBy(){
      this.$emit('set-filter',this.filterBy)
    }
  }
};
</script>

<style lang="scss">
.contact-list {
  display: flex;
  flex-direction: column;
  gap: 15px;

}
</style>