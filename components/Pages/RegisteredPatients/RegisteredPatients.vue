<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START SPECIALIST SECTION -->
  <div class="specialist pt-4">
    <!--START DOCTER LIST ROW  -->
    <a-row :gutter="16">
      <!--AVAILABLE SPECIALIST -->
      <a-col :xs="24" :sm="24" :md="24" :lg="15" :xl="16">
        <AvailableSpecialist :title="title" />
      </a-col>
      <!--START DOCTER LIST COLUMN  -->
      <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <PatientList />
      </a-col>
      <!--END  DOCTER LIST COLUMN  -->
    </a-row>
    <!--END   DOCTER LIST ROW  -->
  </div>
  <!--END  SPECIALIST SECTION-->
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
import PatientList from './PatientList/PatientList.vue'
import AvailableSpecialist from './AvailableSpecialist.vue'

// COMPONENTS
export default {
  components: {
    PatientList,
    AvailableSpecialist
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showSpecialistDetails: false
    }
  },
  mounted() {
    this.$root.$on('show-specialist-details', this.showDoctorDetails)
  },
  methods: {
    showDoctorDetails() {
      this.showSpecialistDetails = true
    }
  }
}
</script>
