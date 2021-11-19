<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START DOCTER  SECTION-->
  <div class="doctor-card" @click="showSpecialist(doctorList.scheduled)">
    <!--START HOVERABLE CARD-->
    <a-card hoverable :bordered="false">
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
    showSpecialist(val) {
      if (val == true) {
        this.$router.push('/patient-management')
        setTimeout(() => {
          this.$root.$emit('enable-btns')
        }, 1000)
      }
      if (val == false) {
        this.handleAvailableSlots()
        // this.$root.$emit('show-specialist-details')
      }
    }
  }
}
</script>

<style></style>
