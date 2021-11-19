<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START DOCTER LIST  SECTION-->
  <div class="doctor-list">
    <div class="doctor-card-list">
      <!--START DOCTER CARD  ROW-->
      <a-row :gutter="[24, 24]" class="my-0">
        <!--START DOCTER CARD  COLUMN-->
        <a-col
          v-for="(doctor, index) in data"
          :key="index"
          :xs="24"
          :sm="11"
          :md="11"
          :lg="8"
          :xl="6"
        >
          <PatientCard :doctor-list="doctor" />
        </a-col>
        <!--END  DOCTER CARD  COLUMN-->
      </a-row>
      <!--END DOCTER CARD  ROW-->
    </div>
    <AvailableSlots />
  </div>

  <!--START DOCTER LIST  SECTION-->
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
// STORE
import { mapGetters, mapActions } from 'vuex'
import PatientCard from './PatientCard.vue'
import AvailableSlots from '@/components/Pages/RegisteredPatients/Modal/AvailableSlots'

export default {
  // COMPONENT
  components: {
    PatientCard,
    AvailableSlots
  },
  props: {
    data: {
      type: Array,
      default: null
    }
  },
  // CALL ANYTHING ON RUN TIME
  computed: {
    ...mapGetters('modules/registered-patients', ['doctorList'])
  },
  methods: {
    ...mapActions('modules/specialist', ['handleAvailableSlots'])
  }
}
</script>

<style></style>
