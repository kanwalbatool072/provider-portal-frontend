<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START DRAWING SECTION -->
  <div class="drawing-anything">
    <!--START MULTIPLE USER CALLING -->
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
    <!--END MULTIPLE USER CALLING -->
  </div>
  <!--END DRAWING SECTION -->
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
import MultipleUserCalling from '@/components/Pages/DrawingAnything/MultipleUserCalling/MultipleUserCalling.vue'
export default {
  components: {
    MultipleUserCalling
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/pages/drawing-anything/drawing-anything.scss';
</style>
