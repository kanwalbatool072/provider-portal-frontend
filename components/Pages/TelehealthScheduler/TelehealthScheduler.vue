<!-- ************************** TEMPLATE  ************************* -->
<template>
  <div class="book-appointment pt-4">
    <a-row :gutter="24">
      <a-col :xs="24" :sm="24" :md="18" :lg="15" :xl="16">
        <h3 class="font-600 fs-extra-large px-2 pb-2">Telehealth Scheduler</h3>
        <TelehealthSchedulerForm />
      </a-col>
      <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <PatientDetail />
      </a-col>
    </a-row>
  </div>
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
import TelehealthSchedulerForm from './TelehealthSchedulerForm'
import PatientDetail from './PatientDetail'

export default {
  components: {
    TelehealthSchedulerForm,
    PatientDetail
  },
  data() {
    return {
      is_border: false,
      showUpComming: false,
      userData: []
    }
  }
}
</script>
