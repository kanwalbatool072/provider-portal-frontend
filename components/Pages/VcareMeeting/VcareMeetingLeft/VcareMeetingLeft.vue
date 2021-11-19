<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START VCARE LEFT SECTION-->
  <div class="vcare-left">
    <div class="vcare-img">
      <!--START VCARE  CALLING ROW -->
      <a-row class="text-center">
        <!--START VCARE CALLING COLUMN -->
        <a-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="24"
          :xl="24"
          align="end"
          class="p-3 mb-5"
        >
          <nuxt-link to="/zoom-in">
            <img src="/images/Vcarecalling/Icon material-fullscreen.svg"
          /></nuxt-link>
        </a-col>
        <!--END VCARE CALLING COLUMN -->

        <!--START VCARE ATTENDES COLUMN -->
        <!-- <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="pt-5">
          <a-row :gutter="16" class="pt-5 mt-5">
            <div class="pt-5 mt-5">
              <div class="pt-5 mt-5">
                <a-col
                  :xs="24"
                  :sm="24"
                  :md="24"
                  :lg="3"
                  :xl="3"
                  class="pl-4 pointer"
                >
                  <img src="/images/Vcarecalling/view attendees.svg" />
                </a-col>

                <a-col
                  :xs="24"
                  :sm="24"
                  :md="24"
                  :lg="18"
                  :xl="18"
                  class="pt-3 pointer"
                >
                  <img
                    src="/images/Vcarecalling/Bottom Bar.png"
                    height="50px"
                    @click="handleShareReviewModal('')"
                  />
                </a-col>

                <a-col
                  :xs="24"
                  :sm="24"
                  :md="24"
                  :lg="3"
                  :xl="3"
                  class="pr-5 pt-4 mt-2 pointer"
                >
                  <img
                    src="/images/Vcarecalling/Group 57059.svg"
                    height="30px"
                    @click="showVideoController"
                  />
                  <img
                    v-if="showController"
                    src="/images/Vcarecalling/video_controller.png"
                    class="video-controller"
                    @click="showDrawingPage"
                  />
                </a-col>
              </div>
            </div>
          </a-row>
        </a-col> -->
        <!--END VCARE ATTENDES COLUMN -->
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="pt-5">
          <a-row :gutter="16" class="pt-5 mt-5">
            <div class="pt-5 mt-5">
              <div class="pt-5 mt-5">
                <a-col
                  :xs="3"
                  :sm="3"
                  :md="3"
                  :lg="3"
                  :xl="3"
                  class="pl-4 pointer"
                >
                  <img src="/images/Vcarecalling/view attendees.svg" />
                </a-col>
                <a-col
                  :xs="17"
                  :sm="18"
                  :md="18"
                  :lg="18"
                  :xl="18"
                  class="pointer pt-3"
                >
                  <img
                    src="/images/Vcarecalling/Bottom Bar.png"
                    height="50px"
                    @click="handleShareReviewModal('')"
                  />
                </a-col>
                <a-col
                  :xs="4"
                  :sm="3"
                  :md="3"
                  :lg="3"
                  :xl="3"
                  class="pr-5 pt-4 mt-2"
                >
                  <img
                    src="/images/Vcarecalling/Group 57059.svg"
                    height="30px"
                    @click="showVideoController"
                  />
                  <img
                    v-if="showController"
                    src="/images/Vcarecalling/video_controller.png"
                    class="video-controller"
                    @click="showDrawingPage"
                  />
                </a-col>
              </div>
            </div>
          </a-row>
        </a-col>
      </a-row>
      <!--END VCARE CALLING ROW -->
    </div>
    <!--START COMPONENTS ROW -->
    <a-row :gutter="24" class="pt-4">
      <!--START TIME-STAM COMPONENT COLUMN -->
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <TimestamGroup />
      </a-col>
      <!--END TIME-STAM COMPONENT COLUMN -->
      <!--START MEETING COMPONENT COLUMN -->
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <Meeting />
      </a-col>
      <!--END MEETING COMPONENT COLUMN  -->
    </a-row>
    <!--END COMPONENTS ROW -->
  </div>

  <!--END VCARE LEFT SECTION" -->
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
import { mapActions } from 'vuex'
import Meeting from './Meeting.vue'
import TimestamGroup from './TimestampGroup.vue'
export default {
  // COMPONENTS
  components: {
    TimestamGroup,
    Meeting
  },
  data() {
    return {
      showController: false
    }
  },
  // METHODS
  methods: {
    showVideoController() {
      this.showController = !this.showController
    },
    showDrawingPage() {
      this.$router.push('/drawing')
      this.$root.$emit('hide-search-filed')
    },
    ...mapActions('modules/settings', ['handleShareReviewModal'])
  }
}
</script>

<style>
.video-controller {
  position: absolute;
  top: -157px;
  right: 42px;
}
</style>
