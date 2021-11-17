<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START ZOOM IN SECTION -->
  <div id="zoom-in">
    <!--COMPONENT -->
    <ZoomIn />
  </div>
  <!--END ZOOM IN SECTION -->
</template>
<!-- ************************** SCRIPTS  ************************* -->
<script>
import ZoomIn from '@/components/Pages/ZoomIn/ZoomIn'
export default {
  // COMPONENT
  components: {
    ZoomIn
  },
  transition: {
    afterLeave() {
      this.$root.$emit('hide-search-filed')
      this.$root.$emit('hide-notification-icon')
    }
  }
}
</script>

<style></style>
