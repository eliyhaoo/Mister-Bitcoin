<template>
  <h1>Welcome to Mister-Bit</h1>
  <AppHeader />
  <main>
    <RouterView />
  </main>
</template>


<script >
import AppHeader from "@/components/AppHeader.vue";
export default {
  components: {
    AppHeader,
  },
};
</script>


<style lang="scss">
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu;
  font-weight: normal;
}
</style>
