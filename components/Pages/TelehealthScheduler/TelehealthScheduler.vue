<!-- ************************** TEMPLATE  ************************* -->
<template>
  <div class="pt-4">
    <a-row :gutter="24" type="flex">
      <a-col
        :xs="{ span: 24, order: 2 }"
        :sm="{ span: 24, order: 2 }"
        :md="{ span: 15, order: 0 }"
        :lg="{ span: 15, order: 0 }"
        :xl="{ span: 16, order: 0 }"
      >
        <h3 class="font-600 fs-extra-large px-2 pb-2">Telehealth Scheduler</h3>
        <TelehealthSchedulerForm />
      </a-col>
      <a-col
        class="pt-4 mt-3"
        :xs="{ span: 24, order: 1 }"
        :sm="{ span: 24, order: 1 }"
        :md="{ span: 9, order: 0 }"
        :lg="{ span: 9, order: 0 }"
        :xl="{ span: 8, order: 0 }"
      >
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
