<template>
  <section class="app-header">
    <h2>HEADER</h2>
    <nav>
      <RouterLink to="/">Home </RouterLink> |
      <RouterLink to="/contact">Contacts </RouterLink>
      <RouterLink to="/statistic">Statistics </RouterLink>
    </nav>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" >
.app-header {
  background-color: lightcyan;
}
</style>