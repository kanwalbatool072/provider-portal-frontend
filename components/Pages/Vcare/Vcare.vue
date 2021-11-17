<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START VCARE SECTION -->
  <div class="v-care pt-3">
    <!--START DOCTER LIST ROW  -->
    <a-row :gutter="24">
      <!--START DOCTER LIST COLUMN  -->
      <a-col :xs="24" :sm="24" :md="18" :lg="14" :xl="16">
        <VcareLeft />
      </a-col>
      <!--END  DOCTER LIST COLUMN  -->
      <!--START DOCTER DETAIL COLUMN  -->
      <a-col :xs="24" :sm="24" :md="6" :lg="10" :xl="8">
        <VcareRight />
      </a-col>
      <!--END  DOCTER DETAIL COLUMN  -->
    </a-row>
    <!--END   DOCTER LIST ROW  -->
  </div>
  <!--END  VCARE SECTION-->
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
import VcareLeft from './VcareLeft/VcareLeft'
import VcareRight from './VcareRight/VcareRight'
// COMPONENTS
export default {
  components: {
    VcareLeft,
    VcareRight
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/pages/vcare/vcare.scss';
</style>
