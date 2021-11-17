<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START ZOOM IN SECTION -->
  <div class="zoom-in mx-5 px-5">
    <!--START VCARE BACK-GORUND IMAGE SECTION -->
    <div class="vcare-img mx-5">
      <!--START VCARE MEETING ROW -->
      <a-row class="text-center">
        <!--START VCARE MEETING COLUMN -->
        <a-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="24"
          :xl="24"
          align="end"
          class="p-3 mb-5"
        >
          <nuxt-link to="/vcare-meeting">
            <img src="/images/Vcarecalling/Icon material-fullscreen.svg"
          /></nuxt-link>
        </a-col>
        <!--END VCARE MEETING COLUMN -->
        <!--START ATTENDES SVG COLUMN -->
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="pt-5">
          <a-row :gutter="16" class="pt-5 mt-5">
            <div class="pt-5 mt-5">
              <div class="pt-5 mt-5">
                <a-col :xs="24" :sm="24" :md="24" :lg="3" :xl="3" class="pl-4">
                  <!-- ATTENDES SVG  -->
                  <img src="/images/Vcarecalling/view attendees.svg" />
                </a-col>
                <a-col
                  :xs="24"
                  :sm="24"
                  :md="24"
                  :lg="18"
                  :xl="18"
                  class="pt-3"
                >
                  <!--BOTTOM BAR SVG -->
                  <img
                    src="/images/Vcarecalling/Bottom Bar.png"
                    height="50px"
                  />
                </a-col>
                <a-col
                  :xs="24"
                  :sm="24"
                  :md="24"
                  :lg="3"
                  :xl="3"
                  class="pr-5 pt-4 mt-2"
                >
                  <img
                    src="/images/Vcarecalling/Group 57059.svg"
                    height="30px"
                  />
                </a-col>
              </div>
            </div>
          </a-row>
        </a-col>
        <!--END  ATTENDES SVG COLUMN -->
      </a-row>
      <!--END VCARE MEETING ROW -->
    </div>
    <!--START VCARE BACK-GORUND IMAGE SECTION -->
  </div>
  <!--END ZOOM IN SECTION -->
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
export default {
  mounted() {
    this.$root.$emit('hide-search-filed')
    this.$root.$emit('hide-notification-icon')
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/pages/zoom-in/zoom-in.scss';
</style>
