<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START VCARE SECTION -->
  <div class="v-care pt-3">
    <!--START DOCTER LIST ROW  -->
    <a-row :gutter="24" type="flex">
      <!--START DOCTER LIST COLUMN  -->
      <a-col
        :xs="{ span: 24, order: 2 }"
        :sm="{ span: 24, order: 2 }"
        :md="{ span: 24, order: 2 }"
        :lg="{ span: 15, order: 0 }"
        :xl="{ span: 16, order: 0 }"
      >
        <VcareLeft />
      </a-col>
      <!--END  DOCTER LIST COLUMN  -->
      <!--START DOCTER DETAIL COLUMN  -->
      <a-col
        :xs="{ span: 24, order: 1 }"
        :sm="{ span: 24, order: 1 }"
        :md="{ span: 24, order: 1 }"
        :lg="{ span: 9, order: 0 }"
        :xl="{ span: 8, order: 0 }"
      >
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
