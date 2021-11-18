<template>
  <div class="meeting">
    <h4 class="font-600">In Meeting</h4>
    <a-card :bordered="false">
      <a-row
        v-for="(list, index) in meetingList"
        :key="index"
        class="mb-1 meeting-list"
        :gutter="16"
      >
        <a-col :xs="24" :sm="5" :md="5" :lg="8" :xl="5">
          <img :src="list.image" class="mt-1" />
        </a-col>
        <a-col :xs="24" :sm="17" :md="17" :lg="13" :xl="17">
          <h4 class="mb-0 fs-small">{{ list.title }}</h4>
          <p class="mb-0 fs-small">{{ list.description }}</p>
        </a-col>
        <a-col :xs="24" :sm="2" :md="2" :lg="3" :xl="2" align="end">
          <img :src="list.dotimage" />
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('modules/vcare-calling', ['meetingList'])
  }
}
</script>

<style></style>
