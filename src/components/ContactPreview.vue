<template>
  <div @click="onDetails" class="contact-preview">
    {{ contact.name }}
  </div>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      require: true,
    },
  },
  methods:{
    onDetails(){
      this.$router.push(`/contact/${this.contact._id}`)
    },
    
  }
};
</script>

<style lang="scss">
.contact-preview {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  background-color: lightgrey;
  align-items: center;
  padding: 15px 24px;
  max-width: 150px;
  border-radius: 18px;
  min-height:50px;
  &:hover{
    background-color: darken(lightgrey, 20%) ;
  }
}
</style>