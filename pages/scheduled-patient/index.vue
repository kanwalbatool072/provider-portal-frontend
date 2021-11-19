<template>
  <div id="registered-patients">
    <RegisteredPatients
      title="All Scheduled Patients"
      :patient-data="scheduledList"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import RegisteredPatients from '@/components/Pages/RegisteredPatients/RegisteredPatients'
export default {
  components: {
    RegisteredPatients
  },
  computed: {
    ...mapGetters('modules/scheduled-patient', ['scheduledList'])
  }
}
</script>

<style lang="sass">
@import '~/assets/scss/pages/registered-patients/registered-patients.scss'
</style>
