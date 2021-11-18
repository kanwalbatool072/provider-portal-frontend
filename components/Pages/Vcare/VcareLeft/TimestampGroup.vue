<template>
  <div class="time-stamp-group">
    <h4 class="font-600">Timestamp Group</h4>
    <a-card class="pb-5" :bordered="false">
      <div class="">
        <a-row
          v-for="(list, index) in getStartAppointment"
          :key="index"
          class="mb-4"
        >
          <a-col
            :xs="24"
            :sm="24"
            :md="3"
            :lg="4"
            :xl="3"
            class="pt-3"
            :class="index == 0 || index == 1 ? 'start-appt' : 'start'"
          >
            <img :src="list.image" />
          </a-col>
          <a-col
            :xs="24"
            :sm="24"
            :md="20"
            :lg="20"
            :xl="21"
            :class="index == 0 || index == 1 ? 'start-appt' : 'start'"
          >
            <a-card :bordered="false" class="description">
              <p class="mb-0">{{ list.description }}</p>
            </a-card>
          </a-col>
        </a-row>
      </div>
    </a-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('modules/vcare-calling', ['getStartAppointment'])
  }
}
</script>

<style></style>
