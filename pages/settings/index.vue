<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--  SETTING -->
  <div id="settings">
    <!-- COMPONENT -->
    <Settings />
  </div>
  <!-- END SETTING -->
</template>
<!-- ************************** SCRIPTS  ************************* -->
<script>
import Settings from '@/components/Pages/Settings/Settings'
export default {
  components: {
    Settings
  }
}
</script>
<!-- ************************** STYLES  ************************* -->
<style lang="scss">
@import '~/assets/scss/pages/setting/setting.scss';
</style>
