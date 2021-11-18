<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START MEETING SECTION -->
  <div class="meeting">
    <h4 class="font-600">In Meeting</h4>
    <!--START MEETING CARD -->
    <a-card :bordered="false">
      <!--START MEETING LIST ROW -->
      <a-row
        v-for="(list, index) in meetingList"
        :key="index"
        class="mb-1 meeting-list"
        :gutter="16"
      >
        <!--START IMAGE LIST COLUMN -->
        <a-col :xs="24" :sm="24" :md="20" :lg="8" :xl="5">
          <img :src="list.image" class="mt-1" />
        </a-col>
        <!--END IMAGE LIST COLUMN  -->
        <!--START TITTLE  COLUMN-->
        <a-col :xs="24" :sm="24" :md="20" :lg="13" :xl="17">
          <h4 class="mb-0 fs-small">{{ list.title }}</h4>
          <p class="mb-0 fs-small" style="opacity: 1">{{ list.description }}</p>
        </a-col>
        <!--START TITTLE COLUMN -->
        <!--START LIST DOT IMAGE COLUMN -->
        <a-col :xs="24" :sm="24" :md="20" :lg="3" :xl="2" align="end">
          <img :src="list.dotimage" />
        </a-col>
        <!--END LIST DOT IMAGE COLUMN -->
      </a-row>
      <!--END MEETING_LIST ROW -->
    </a-card>
    <!--END MEETING CARD -->
  </div>
  <!--END MEETING SECTION -->
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('modules/vcare-calling', ['meetingList'])
  }
}
</script>

<style></style>
