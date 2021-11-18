<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START VCARE SECTION -->
  <div class="v-care pt-3">
    <!--START DOCTER LIST ROW  -->
    <a-row :gutter="24">
      <!--START DOCTER LIST COLUMN  -->
      <a-col :xs="24" :sm="24" :md="18" :lg="15" :xl="16">
        <VcareMeetingLeft />
      </a-col>
      <!--END  DOCTER LIST COLUMN  -->
      <!--START DOCTER DETAIL COLUMN  -->
      <a-col :xs="24" :sm="24" :md="6" :lg="9" :xl="8">
        <VcareMeetingRight />
      </a-col>
      <!--END  DOCTER DETAIL COLUMN  -->
    </a-row>
    <!--END   DOCTER LIST ROW  -->
  </div>
  <!--END  VCARE SECTION-->
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
import VcareMeetingLeft from './VcareMeetingLeft/VcareMeetingLeft'
import VcareMeetingRight from './VcareMeetingRight/VcareMeetingRight'
// COMPONENTS
export default {
  components: {
    VcareMeetingLeft,
    VcareMeetingRight
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/pages/vcaremeeting/vcaremeeting.scss';
</style>
