<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START AVAILABLE SLOTS MODAL -->
  <a-modal
    id="available-slots"
    v-model="isAvailable"
    width="35%"
    @close="handleCancel"
  >
    <h3 class="font-600 px-3 mt-3">Select Available Slots</h3>
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
    <a-row class="px-3 mt-3 mx-1">
      <h4 class="pb-3 pt-2 mb-0 font-600">Symptoms</h4>

      <!--START FEVER COLUMN -->
      <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <a-select v-model="value" mode="multiple" style="width: 100%">
          <a-select-option value="fever"> Fever </a-select-option>
        </a-select>
      </a-col>
      <!--START FEVER COLUMN -->
    </a-row>
    <!-- END SYMPTOMS ROW -->

    <!-- MODAL FOOTER -->
    <template slot="footer">
      <nuxt-link to="/book-appointment">
        <a-button
          class="add-btn"
          html-type="submit"
          block
          type="primary"
          :loading="loading"
          @click="handleAvailableSlots('')"
        >
          Continue
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

export default {
  // LOAD COMPONENTS
  components: {},
  data() {
    return {
      loading: false,
      selectedSlot: '',
      value: ['china', 'Cough & Cold ', 'Dizzy']
    }
  },
  computed: {
    ...mapGetters('modules/specialist', [
      'getAvailableSlotsModal',
      'getAvailableSlots'
    ]),

    watch: {
      value(val) {
        // console.log(`selected:`, val)
      }
    },
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

    handleCancel(e) {
      this.handleAvailableSlots('')
    }
  }
}
</script>
<!-- ************************** STYLE  ************************* -->
<style lang="scss"></style>
