<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START CONTAINER SECTION -->
  <div class="container"></div>
  <!--END CONTAINER SECTION -->
</template>
<!-- ************************** SCRIPTS  ************************* -->
<script>
export default {
  layout: 'auth',
  mounted() {
    this.$router.push('/auth/login')
  }
}
</script>

<style></style>
