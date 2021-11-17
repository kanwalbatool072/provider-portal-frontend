<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START CONFIRMATION MODAL" -->
  <a-modal id="confirmation" v-model="isConfirm" width="30%" :footer="false">
    <!--START APPOINTMENT MODAL ICON ROW" -->
    <a-row class="px-4 pt-4 pb-3">
      <!--START DAVID JAMES COLUMN" -->
      <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="text-center">
        <img src="/images/Appointment/hippa_modal_icon.svg" height="80" />
        <h3 class="font-600 pt-3">Confirmation</h3>
        <p class="px-4 appointment-text">
          Your successfully created appointment for John Doe.
        </p>
      </a-col>
      <!--END DAVID JAMES COLUMN -->
      <!--START CONFIRMED LIST COLUMN-->
      <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <a-list :bordered="false">
          <a-list-item
            v-for="(list, index) in getConfirmationList"
            :key="index"
          >
            <span class="fs-normal font-500 font-poppins">{{
              list.bookingId
            }}</span>
            <span class="fs-normal font-600 font-poppins">
              {{ list.idNumber }}
            </span>
          </a-list-item>
        </a-list>
      </a-col>
      <!--END CONFIRMED LIST COLUM -->
    </a-row>
    <!--END APPOINTMENT MODAL ICON ROW" -->

    <!--START BUTTON  ROW" -->
    <a-row :gutter="16" class="px-4">
      <!--START CANCEL BUTTON COLUMN -->
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mb-3">
        <a-button key="back" class="cancel-btn" block @click="handleCancel">
          Cancel
        </a-button>
      </a-col>
      <!--END CANCEL BUTTON COLUMN -->
      <!--START JOIN BUTTON COLUMN -->
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" block>
        <a-button
          class="add-btn"
          html-type="submit"
          block
          type="primary"
          :loading="loading"
          @click="showConfirmationModal('')"
        >
          Join Call
        </a-button>
      </a-col>
      <!--END JOIN BUTTON COLUMN -->
    </a-row>
    <!--END BUTTON  ROW" -->
    <!-- END MODAL FOOTER -->
  </a-modal>
  <!--END CONFIRMATION MODAL" -->
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
// STORE
import { mapGetters, mapActions } from 'vuex'

export default {
  // LOAD COMPONENTS
  components: {},
  data() {
    return {
      loading: false
    }
  },
  // Call Anything On runtime
  computed: {
    ...mapGetters('modules/telehealth-scheduler', [
      'confirmationModal',
      'getConfirmationList'
    ]),

    isConfirm: {
      // getter
      get() {
        return this.confirmationModal
      },
      // setter
      set(newValue) {
        this.handleCancel()
      }
    }
  },
  // Call actions method
  methods: {
    ...mapActions('modules/telehealth-scheduler', [
      'handleConfirmationModal',
      'handleOfficialConsent'
    ]),

    // async handleSave() {
    //   this.loading = true
    //   await setTimeout(async () => {
    //     await this.handleAvailableSlots()
    //     this.loading = false
    //     // Show Notification Popup
    //     await this.$notification.success({
    //       message: 'Get Appointment!',
    //       description: 'Get Appointment Successfully.',
    //     })
    //     this.loading = false
    //   }, 1000)
    // },

    handleCancel(e) {
      this.$root.$emit('show-Upcomming-schedule')
      this.handleConfirmationModal('')
    },
    showConfirmationModal() {
      this.handleOfficialConsent('')
      this.handleConfirmationModal('')
    }
  }
}
</script>
<!-- ************************** STYLE  ************************* -->
<style lang="scss">
@import '~/assets/scss/pages/telehealth-scheduler/telehealth-scheduler.scss';
</style>
