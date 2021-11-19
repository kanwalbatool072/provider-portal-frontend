<template>
  <div id="registered-patients">
    <RegisteredPatients title="All Scheduled Patients" />
  </div>
</template>

<script>
import RegisteredPatients from '@/components/Pages/RegisteredPatients/RegisteredPatients'
export default {
  components: {
    RegisteredPatients
  }
}
</script>

<style lang="sass">
@import '~/assets/scss/pages/registered-patients/registered-patients.scss'
</style>
