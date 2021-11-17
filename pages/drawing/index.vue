<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START DRAWING SECTON -->
  <div id="drawing">
    <!--COMPONENT -->
    <DrawingAnything />
  </div>
  <!--END DRAWING SECTION -->
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
import DrawingAnything from '@/components/Pages/DrawingAnything/DrawingAnything.vue'
export default {
  components: {
    DrawingAnything
  },

  transition: {
    afterLeave() {
      this.$root.$emit('hide-search-filed')
    }
  }
}
</script>

<style></style>
