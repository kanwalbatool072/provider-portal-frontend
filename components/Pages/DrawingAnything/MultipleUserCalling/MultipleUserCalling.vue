<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START MULTIPLE-USER CALLING SECTION -->
  <div class="multiple-user-calling">
    <!--START MULTIPLE-USER CALLING CARD -->
    <a-card class="blue-calling-card px-3">
      <!--TABS -->
      <a-tabs default-active-key="1">
        <a-tab-pane key="1">
          <span slot="tab">
            <a-icon type="user" />
            20
          </span>
          <img src="/images/Drawing/multipleuser.svg" />
          <a-row>
            <a-col
              :xs="24"
              :sm="24"
              :md="24"
              :lg="24"
              :xl="24"
              align="center"
              class="pt-3"
            >
              <img
                src="/images/Drawing/greenuser.svg"
                @click="handleAddCallModal('')"
              />
            </a-col>
          </a-row>
          <p class="meeting-duration mt-4 mb-0">Meeting Duration</p>
          <p class="meeting-txt">48m 20s</p>
          <a-card class="meeting-icon-box px-4">
            <a-row :gutter="16" class="text-center">
              <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                <img src="/images/Drawing/projector.svg" />
                <p>PRESENT</p>
              </a-col>
              <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                <img src="/images/Drawing/video-camera.svg" />
                <p>VIDEO</p>
              </a-col>

              <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                <img src="/images/Drawing/microphone.svg" />

                <p>MUTE</p>
              </a-col>
              <a-divider class="mb-2" />
              <nuxt-link to="/vcare-meeting">
                <p class="mb-0">
                  <img src="/images/Drawing/exit.svg" /><span
                    class="exit-meeting pl-2"
                    >EXIT MEETING</span
                  >
                </p>
              </nuxt-link>
            </a-row>
          </a-card>
        </a-tab-pane>
        <a-tab-pane key="2">
          <span slot="tab">
            <a-icon type="android" />
            11
          </span>
          <img src="/images/Drawing/multipleuser.svg" />
          <a-row>
            <a-col
              :xs="24"
              :sm="24"
              :md="24"
              :lg="24"
              :xl="24"
              align="center"
              class="pt-3"
            >
              <img
                src="/images/Drawing/greenuser.svg"
                @click="handleAddCallModal('')"
              />
            </a-col>
          </a-row>
          <p class="meeting-duration mt-4 mb-0">Meeting Duration</p>
          <p class="meeting-txt">48m 20s</p>
          <a-card class="meeting-icon-box px-4">
            <a-row :gutter="16" class="text-center">
              <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                <img src="/images/Drawing/projector.svg" />
                <p>PRESENT</p>
              </a-col>
              <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                <img src="/images/Drawing/video-camera.svg" />
                <p>VIDEO</p>
              </a-col>

              <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                <img src="/images/Drawing/microphone.svg" />

                <p>MUTE</p>
              </a-col>
              <a-divider class="mb-2" />
              <nuxt-link to="/vcare-meeting">
                <p class="mb-0">
                  <img src="/images/Drawing/exit.svg" /><span
                    class="exit-meeting pl-2"
                    >EXIT MEETING</span
                  >
                </p>
              </nuxt-link>
            </a-row>
          </a-card>
        </a-tab-pane>
        <a-tab-pane key="3">
          <span slot="tab">
            <a-icon type="android" />
            info
          </span>
          <img src="/images/Drawing/multipleuser.svg" />
          <a-row>
            <a-col
              :xs="24"
              :sm="24"
              :md="24"
              :lg="24"
              :xl="24"
              align="center"
              class="pt-3"
            >
              <img
                src="/images/Drawing/greenuser.svg"
                @click="handleAddCallModal('')"
              />
            </a-col>
          </a-row>
          <p class="meeting-duration mt-4 mb-0">Meeting Duration</p>
          <p class="meeting-txt">48m 20s</p>
          <a-card class="meeting-icon-box px-4">
            <a-row :gutter="16" class="text-center">
              <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                <img src="/images/Drawing/projector.svg" />
                <p>PRESENT</p>
              </a-col>
              <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                <img src="/images/Drawing/video-camera.svg" />
                <p>VIDEO</p>
              </a-col>

              <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                <img src="/images/Drawing/microphone.svg" />

                <p>MUTE</p>
              </a-col>
              <a-divider class="mb-2" />
              <nuxt-link to="/vcare-meeting">
                <p class="mb-0">
                  <img src="/images/Drawing/exit.svg" /><span
                    class="exit-meeting pl-2"
                    >EXIT MEETING</span
                  >
                </p>
              </nuxt-link>
            </a-row>
          </a-card>
        </a-tab-pane>
      </a-tabs>
      <!--TABS -->
    </a-card>
    <!--END MULTIPLE-USER CALLING CARD -->
    <Addcall />
  </div>
  <!--END MULTIPLE-USER CALLING SECTION -->
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
import { mapActions } from 'vuex'
import Addcall from '@/components/Pages/Settings/Modals/Addcall'
export default {
  components: {
    Addcall
  },
  methods: {
    ...mapActions('modules/settings', ['handleAddCallModal'])
  }
}
</script>

<style></style>
