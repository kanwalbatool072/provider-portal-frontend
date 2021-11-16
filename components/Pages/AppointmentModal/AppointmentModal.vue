<!-- ************************** TEMPLATE  ************************* -->
<template>
  <div>
    <!--START APPOINTMENT MODAL" -->
    <a-modal
      id="modal-appointment"
      v-model="clinicAppointmentModal"
      centered
      width="35%"
      :footer="false"
    >
      <!--START CLINICAL APPOINTMENT CARD -->
      <a-card class="modal-card" :bordered="false">
        <!--START TELEHEALTH APPOINTMENT ROW -->
        <a-row class="mt-2">
          <h3 class="mb-3">Telehealth Appointment</h3>
          <!--START TELEHEALTH APPOINTMENT COLUMN -->
          <a-col class="mt-2" :span="24">
            <nuxt-link to="/registered-patients" @click.native="hideModal">
              <div class="telehealth-row">
                <a-row>
                  <!-- /images/Dashboard/micro.svg -->
                  <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="5">
                    <img
                      src="/images/Specialist/voice.svg"
                      class="clinic-appoint-ment-img"
                    />
                  </a-col>
                  <!--START AUDIO CALL COLUMN -->
                  <a-col
                    :xs="24"
                    :sm="24"
                    :md="16"
                    :lg="8"
                    :xl="19"
                    class="pt-1"
                  >
                    <h3 class="font-500 fs-medium mb-0">Audio Call</h3>
                    <p class="mb-0 fs-small">Make Voice Call with doctor</p>
                  </a-col>
                  <!--END AUDIO CALL COLUMN -->
                </a-row>
              </div>
            </nuxt-link>
            <!--START VIDEO CALL LINK-->
            <nuxt-link to="/registered-patients" @click.native="hideModal">
              <div class="mt-3 telehealth-row">
                <a-row>
                  <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="5">
                    <img
                      src="/images/Specialist/videocall.svg"
                      class="clinic-appoint-ment-img"
                    />
                  </a-col>
                  <a-col
                    :xs="24"
                    :sm="24"
                    :md="16"
                    :lg="8"
                    :xl="19"
                    class="pt-1"
                  >
                    <h3 class="font-500 fs-medium mb-0">Video Call</h3>
                    <p class="mb-0 fs-small">Make Video Call with doctor</p>
                  </a-col>
                </a-row>
              </div>
            </nuxt-link>
            <!--END VIDEO CALL LINK-->
          </a-col>
          <!--END CLINICAL APPOINTMENT COLUMN -->
        </a-row>
        <!--END  TELEHEALTH APPOINTMENT ROW -->
      </a-card>
    </a-modal>
    <!--END  CLINICAL APPOINTMENT CARD -->
  </div>
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AppointmentModal',
  components: {},

  data() {
    return {
      clinicAppointmentModal: false
    }
  },
  computed: {
    ...mapGetters('dashboard', [
      'getTeleHealthAppointment',
      'getClinicAppointment'
    ])
  },
  mounted() {
    this.$root.$on('appointment-modal', this.showAppointmentModal)
  },

  methods: {
    showAppointmentModal() {
      this.clinicAppointmentModal = true
    },
    hideModal() {
      this.clinicAppointmentModal = false
    },
    visitPage(title) {
      if (title == 'Audio Cal') {
        this.$router.push('/specialist')
      }
      if (title == 'Video Call') {
        this.$router.push('/specialist')
      }
    }
    // handleOk(e) {
    //   console.log(e)
    //   this.visible = false
    // },
  }
}
</script>
<style lang="scss"></style>
