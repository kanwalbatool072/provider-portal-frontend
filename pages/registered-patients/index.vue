<template>
  <div id="registered-patients">
    <RegisteredPatients
      title="All Registered Patients"
      :patient-data="doctorList"
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
    ...mapGetters('modules/registered-patients', ['doctorList'])
  }
}
</script>

<style lang="sass">
@import '~/assets/scss/pages/registered-patients/registered-patients.scss'
</style>
