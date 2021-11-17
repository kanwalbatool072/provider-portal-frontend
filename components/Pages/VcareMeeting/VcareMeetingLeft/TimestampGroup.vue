<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START TIME STAMP SECTION-->
  <div class="time-stamp-group">
    <!--START TIME STAMP HEADING-->
    <h4 class="font-600">Timestamp Group</h4>
    <!--END TIME STAMP HEADING-->
    <!--START TIME STAMP CARD-->
    <a-card class="pb-5" :bordered="false">
      <div class="">
        <!--START TIME STAMP ROW-->
        <a-row
          v-for="(list, index) in getStartAppointment"
          :key="index"
          class="mb-4"
        >
          <!--START LIST IMAGE COLUMN-->
          <a-col
            :xs="24"
            :sm="24"
            :md="4"
            :lg="4"
            :xl="3"
            class="pt-3"
            :class="index == 0 || index == 1 ? 'start-appt' : 'start'"
          >
            <img :src="list.image" />
          </a-col>
          <!--END IMAGE LIST COLUMN-->
          <!--START LIST DESCRIPTIONS COLUMN-->
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
          <!--END LIST DESCRIPTIONS COLUMN-->
        </a-row>
        <!--START TIME STAMP ROW-->
      </div>
    </a-card>
    <!--START TIME STAMP CARD-->
  </div>
  <!--END TIME STAMP SECTION-->
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('modules/vcare-calling', ['getStartAppointment'])
  }
}
</script>

<style></style>
