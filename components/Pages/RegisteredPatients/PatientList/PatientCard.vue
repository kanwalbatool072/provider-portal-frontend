<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START DOCTER  SECTION-->
  <div class="doctor-card">
    <!--START HOVERABLE CARD-->
    <a-card
      hoverable
      :bordered="false"
      @click="showSpecialist(doctorList.scheduled, 'patient')"
    >
      <!--START DOCTER IMAGE LIST ROW-->
      <a-row class="pb-3">
        <!--START ICON COLUMN -->
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" align="end">
          <a-icon type="more" />
        </a-col>
        <!--END ICON COLUMN-->
        <!--START DOCTER IMAGE LIST COLUMN-->
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" align="center">
          <div class="p-3">
            <img :src="doctorList.image" height="92" />
          </div>
          <h2 class="mb-0 pt-2">{{ doctorList.title }}</h2>
          <span class="fs-normal font-400 patient-text">{{
            doctorList.email
          }}</span>
        </a-col>
        <a-row v-if="doctorList.timeList" :gutter="16">
          <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" align="center">
            <router-link to="/vcare"
              ><span>{{ doctorList.time }}</span></router-link
            >
          </a-col>
          <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" align="center">
            <span @click="showSpecialist(doctorList.scheduled, 'modal')">
              <img :src="doctorList.image1" height="25" />
            </span>
          </a-col>
        </a-row>
        <!--START DOCTER IMAGE LIST COLUMN-->
      </a-row>
      <!--END  DOCTER IMAGE LIST ROW-->
      <!--START ORITHOPEDICS TEMPLATES -->
      <template slot="actions" class="ant-card-actions">
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" align="center">
          <div class="card-text">
            <p class="mb-0 fs-normal font-400">PATIENT</p>
          </div>
        </a-col>
      </template>
      <!--END ORITHOPEDICS TEMPLATES-->
    </a-card>
    <!--END HOVERABLE CARD-->
  </div>
  <!--END DOCTER  SECTION-->
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
// SCRIPT
import { mapActions } from 'vuex'
export default {
  // PROPS
  props: {
    doctorList: {
      type: Object,
      default: null
    }
  },
  methods: {
    ...mapActions('modules/specialist', ['handleAvailableSlots']),
    showSpecialist(val1, val2) {
      console.log(val1, val2)
      // if (val == true) {
      //   this.$router.push('/patient-management')
      //   setTimeout(() => {
      //     this.$root.$emit('enable-btns')
      //   }, 300)
      // }
      if (val1 == false && val2 == 'modal') {
        this.handleAvailableSlots(true)
        // this.$root.$emit('show-specialist-details')
      }
      if (val1 == true && val2 == 'patient') {
        this.$router.push('/patient-management')
        setTimeout(() => {
          this.$root.$emit('enable-btns')
        }, 300)
      }
    }
  }
}
</script>

<style></style>
