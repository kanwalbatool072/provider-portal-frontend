<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START DRAWING SECTION -->
  <div class="drawing-anything">
    <!--START MULTIPLE USER ROW -->
    <a-row :gutter="24">
      <a-col :xs="24" :sm="11" :md="11" :lg="14" :xl="16">
        <h3 class="font-600">Draw Anything</h3>
        <a-card :bordered="false">
          <a-row>
            <a-col
              :xs="24"
              :sm="24"
              :md="24"
              :lg="24"
              :xl="24"
              class="text-center py-5 my-5"
            >
              <img src="/images/Vcarecalling/drawing.svg" />
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" align="end">
              <img src="/images/Drawing/blue-icon.svg" />
              <img src="/images/Drawing/grey-icon.svg" />
            </a-col>
          </a-row>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="11" :md="11" :lg="10" :xl="8" class="mt-4 pt-2">
        <MultipleUserCalling />
      </a-col>
    </a-row>
    <!-- END MULTIPLE USER ROW -->
    <!--START ATTENDES ROW -->
    <a-row :gutter="16" class="pt-5 px-5 mx-5">
      <!--START ATTENDES COLUMN-->
      <a-col :xs="24" :sm="24" :md="24" :lg="3" :xl="4" class="pl-5">
        <img src="/images/Vcarecalling/view attendees.svg" />
      </a-col>
      <!-- END ATTENDES COLUMN -->
      <!--START BOTTOM BAR CALLING -->
      <a-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="18"
        :xl="11"
        class="pt-4 text-center"
      >
        <img src="/images/Vcarecalling/Bottom Bar.png" height="50px" />
      </a-col>
      <!-- END BOTTOM BAR CALLING -->
      <!--START VCARE COLUMN  -->
      <a-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="3"
        :xl="3"
        class="pt-4 mt-2"
        align="end"
      >
        <img
          src="/images/Vcarecalling/Group 57059.svg"
          height="30px"
          style="cursor: pointer"
          @click="$router.push('/vcare-meeting')"
        />
      </a-col>
      <!--END VCARE COLUMN  -->
    </a-row>
    <!-- END ATTENDES ROW -->
  </div>
  <!--END DRAWING SECTION -->
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
import MultipleUserCalling from './MultipleUserCalling/MultipleUserCalling.vue'
export default {
  components: {
    MultipleUserCalling
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/pages/multiple-user-calling/multiple-user-calling.scss';
</style>
