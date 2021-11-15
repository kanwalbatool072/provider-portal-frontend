<template>
  <div id="patient-management">
    <PatientManagement />
  </div>
</template>

<script>
import PatientManagement from '@/components/Pages/PatientManagement/PatientManagement'
export default {
  components: {
    PatientManagement
  }
}
</script>

<style lang="sass">
@import '~/assets/scss/pages/patient-management/patient-management'
</style>
