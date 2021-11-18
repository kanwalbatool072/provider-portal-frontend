<template>
  <div class="vcare-left">
    <div class="vcare-img">
      <a-row class="text-center">
        <a-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="24"
          :xl="24"
          align="end"
          class="p-3 pointer"
        >
          <img src="/images/Vcarecalling/Icon material-fullscreen.svg" />
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <p class="py-4">Meeting will be started shortly</p>
          <img
            src="/images/Vcarecalling/vcare-text.svg"
            class="py-4 font-500"
          />
          <a-row :gutter="16" class="pt-5">
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
              class="pointer pt-3"
            >
              <img src="/images/Vcarecalling/Bottom Bar.png" height="50px" />
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
                style="cursor: pointer"
                @click="$router.push('/vcare-meeting')"
              />
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
    <a-row :gutter="24" class="pt-4">
      <a-col :xs="24" :sm="124" :md="12" :lg="12" :xl="12">
        <TimestamGroup />
      </a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <Meeting />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Meeting from './Meeting.vue'
import TimestamGroup from './TimestampGroup.vue'

export default {
  components: {
    TimestamGroup,
    Meeting
  },
  methods: {}
}
</script>

<style></style>
