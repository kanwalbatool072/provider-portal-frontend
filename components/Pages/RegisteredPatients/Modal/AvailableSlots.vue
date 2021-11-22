<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START AVAILABLE SLOTS MODAL -->
  <a-modal
    id="available-slots"
    v-model="isAvailable"
    width="38%"
    @close="handleCancel"
  >
    <h3 class="font-600 px-3 mt-3">Select Available Slots</h3>
    <a-row :gutter="16" class="px-2 mx-1">
      <a-col
        id="month-picker"
        :xs="24"
        :sm="24"
        :md="24"
        :lg="24"
        :xl="24"
        class="p-0"
      >
        <DraggableCal
          :past-is-disabled="false"
          :months="12"
          class="fs-small font-400 m-0 dragable-month"
        ></DraggableCal> </a-col
    ></a-row>
    <a-row class="scheduler_btn px-3 mx-1">
      <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="pt-2">
        <VueCtkDateTimePicker
          v-model="dateRange"
          :no-keyboard="true"
          format="YYYY-MM-DD"
          formatted="||"
          :no-header="true"
          :auto-close="false"
          :no-button="true"
          :inline="true"
          :range="true"
          :no-button-now="true"
          :no-shortcuts="true"
          :disabled-dates="disableDates"
          @input="onRangeSelect"
        ></VueCtkDateTimePicker>
      </a-col>
    </a-row>
    <!--START AVAILABLE SLOTS DIV -->
    <div
      v-for="(slot, get_index) in getAvailableSlots"
      :key="get_index"
      class="available px-3"
    >
      <!--START AVAILABLE SLOT ROW -->
      <a-row>
        <!--START AVAILABLE SLOTS COLUMN -->
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <h4 class="pt-4 mb-0 font-600">{{ slot.title }}</h4>
          <!--START RADIO BUTTON GROUP -->
          <a-radio-group
            v-for="(time, index) in slot.availableSlots"
            :key="index"
            v-model="selectedSlot"
            default-value="c"
            button-style="solid"
            @change="onChange"
          >
            <a-radio-button
              class="mx-1 mt-2 fs-small slots-time"
              :value="time.time"
              :disabled="time.isAvailable"
            >
              {{ time.time }}
            </a-radio-button>
          </a-radio-group>
          <!--END RADIO BUTTON GROUP -->
        </a-col>
        <!--START AVAILABLE SLOTS COLUMN -->
      </a-row>
      <!--END AVAILABLE SLOT ROW -->
    </div>
    <!--END  AVAILABLE SLOTS DIV -->

    <!--START SYMPTOMS ROW -->
    <a-row class="mt-3 mx-4 selectedSlot px-3 py-2">
      <!--START FEVER COLUMN -->
      <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        {{ selectedDate }}
      </a-col>
      <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" align="right"
        >{{ selectedSlot }}
      </a-col>
      <!--START FEVER COLUMN -->
    </a-row>
    <!-- END SYMPTOMS ROW -->

    <!-- MODAL FOOTER -->
    <template slot="footer">
      <nuxt-link to="/telehealth-scheduler">
        <a-button
          class="add-btn"
          html-type="submit"
          block
          type="primary"
          :loading="loading"
        >
          Save & Continue
        </a-button>
      </nuxt-link>
    </template>
    <!-- END MODAL FOOTER -->
  </a-modal>
  <!--END AVAILABLE SLOTS MODAL -->
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
// STORE
import { mapGetters, mapActions } from 'vuex'
import DraggableCal from 'vue-draggable-cal'
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'
export default {
  // LOAD COMPONENTS
  components: {
    DraggableCal,
    VueCtkDateTimePicker
  },
  data() {
    return {
      loading: false,
      selectedSlot: '',
      value: ['china', 'Cough & Cold ', 'Dizzy'],
      dateRange: {},
      disableDates: ['2021-11-18', '2021-11-19', '2021-11-20'],
      selectedDate: ''
    }
  },
  computed: {
    ...mapGetters('modules/specialist', [
      'getAvailableSlotsModal',
      'getAvailableSlots'
    ]),

    // Call Anything On runtime

    isAvailable: {
      // getter
      get() {
        return this.getAvailableSlotsModal
      },
      // setter
      set(newValue) {
        this.handleCancel()
      }
    }
  },
  // Call actions method
  methods: {
    ...mapActions('modules/specialist', ['handleAvailableSlots']),

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
    onChange() {
      console.log(this.selectedSlot)
    },
    handleCancel(e) {
      this.handleAvailableSlots(false)
    },
    onRangeSelect(range) {
      console.log(range)
      this.selectedDate = range.start
      console.log(this.selectedDate)
      // if (range.start && range.end)
      //   this.calendar.changeView('timeGridWeek', {
      //     start: range.start,
      //     end: range.end
      //   })
    }
  }
}
</script>
<!-- ************************** STYLE  ************************* -->
<style lang="scss"></style>
