<template>
  <div id="telehealth-scheduler">
    <TelehealthScheduler />
  </div>
</template>
<script>
import TelehealthScheduler from '@/components/Pages/TelehealthScheduler/TelehealthScheduler.vue'

export default {
  components: { TelehealthScheduler }
}
</script>
<style lang="scss">
@import '~/assets/scss/pages/telehealth-scheduler/telehealth-scheduler.scss';
</style>
