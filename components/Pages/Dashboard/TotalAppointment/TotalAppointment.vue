<template>
  <div class="total-appointment">
    <a-row :gutter="16">
      <a-col
        v-for="(list, key) in apptList"
        :key="key"
        :xs="24"
        :sm="24"
        :md="24"
        :lg="12"
        :xl="12"
      >
        <a-card class="appointment-card" :bordered="false">
          <span class="text-white">{{ list.title }}</span>
          <p class="m-0 fs-xl font-600 text-white pt-4 mt-3">
            {{ list.subTitle }}
          </p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('dashboard', ['apptList'])
  }
}
</script>

<style lang="scss">
.total-appointment {
  width: 100%;
  border-radius: 25px;
  align-items: center;
  background-image: linear-gradient(to right, #423869, #423869a6);
  background-size: cover;
  padding: 15px;
  .appointment-card {
    background: #ffffff63;
    border-radius: 16px;
  }
}
</style>
