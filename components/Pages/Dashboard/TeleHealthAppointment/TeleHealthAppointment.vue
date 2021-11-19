<template>
  <div class="tele-health-appointment mt-2 pt-1">
    <a-card
      class="chart-container mt-1"
      title="Telehealth Appointment"
      :bordered="false"
    >
      <span slot="extra" class="fs-small font-500">
        <a-date-picker />
      </span>
      <!-- <h2>{{ graphHeading }}</h2> -->
      <ApexCharts
        type="bar"
        height="292"
        width="100%"
        :options="chartOptions"
        :series="getSeries"
        class="chart"
      />
    </a-card>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import VueApexCharts from 'vue-apexcharts'
export default {
  name: 'VitalsGraph',
  components: {
    ApexCharts: VueApexCharts
  },
  computed: {
    ...mapGetters('modules/dashboard', ['chartOptions', 'getSeries'])
  }
}
</script>
