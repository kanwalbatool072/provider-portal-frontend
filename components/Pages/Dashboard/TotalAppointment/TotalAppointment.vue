<template>
  <div class="total-appointment">
    <a-row :gutter="16">
      <a-col
        v-for="(list, key) in apptList"
        :key="key"
        :xs="12"
        :sm="12"
        :md="12"
        :lg="12"
        :xl="12"
      >
        <a-card class="appointment-card" :bordered="false">
          <span class="text-white fs-normal appt-title">{{ list.title }}</span>
          <p class="font-600 text-white  pt-3 pb-1 m-0 appt-text">
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
    ...mapGetters('modules/dashboard', ['apptList'])
  }
}
</script>

<style lang="scss">
.total-appointment {
  width: 100%;
  border-radius: 25px;
  align-items: center;
  background-image: linear-gradient(to right, #766aa2, #7b6fe1);
  // box-shadow: 0px 26px 20px -16px rgba(118, 106, 162, 0.38);
  box-shadow: -2px 22px 41px -23px rgba(123, 111, 225, 1);
  background-size: cover;
  padding: 15px;
  .appointment-card {
    background: #c5bcf369;
    border-radius: 16px;
  }
}
</style>
