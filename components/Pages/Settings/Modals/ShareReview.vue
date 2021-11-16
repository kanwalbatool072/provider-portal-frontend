<!-- ************************* TEMPLATE ************************ -->
<template>
  <!--START SHARE REVIEW SECTION -->
  <div>
    <!--START SHARE REVIEW MODAL -->
    <a-modal
      id="reviews-modal"
      v-model="isShareVisible"
      title=""
      centered
      width="28%"
      :footer="false"
      :dialog-style="{ top: '20px' }"
    >
      <!--START SHARE REVIEW FORM MODAL-->
      <a-form-model
        ref="locationForm"
        :hide-required-mark="true"
        label-align="left"
        :model="locationForm"
      >
        <h3 class="mt-3 font-600">Please Share Your Review</h3>
        <!--START SHARE REVIEW CARD -->
        <a-card class="modal-card" :bordered="false">
          <!--START SHARE REVIEW ROW -->
          <a-row>
            <h3 class="fs-medium font-500">
              Tell us about your experience, with Dr. John
            </h3>
            <a-col>
              <a-row
                v-for="(data, index) in getTeleHealthAppointment"
                :key="index"
                class="mt-3 telehealth-row"
                style="background-color: #423869"
              >
                <a-col :xs="24" :sm="24" :md="24" :lg="8" :xl="6">
                  <img src="/images/Dashboard/dr_david_james.svg" />
                </a-col>
                <a-col
                  :xs="24"
                  :sm="24"
                  :md="24"
                  :lg="16"
                  :xl="18"
                  class="pt-1"
                >
                  <h3 class="font-500 fs-medium mb-0" style="color: white">
                    {{ data.title }}
                  </h3>
                  <p class="mb-0 fs-small" style="color: white">
                    <img src="/images/Dashboard/building.svg" />
                    {{ data.description }}
                  </p>
                </a-col>
              </a-row>
            </a-col>
          </a-row>
          <!--END SHARE REVIEW ROW -->
        </a-card>
        <!--END SHARE REVIEW CARD -->
        <a-row class="mt-4">
          <a-col :span="24">
            <h4>Give us feedback</h4>
            <p>Write your suggestion here</p></a-col
          >
        </a-row>
        <!--START RATING STAR COLUMN -->
        <a-row :gutter="24">
          <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span>
              <a-rate :default-value="4" :tooltips="desc" />
              <span>{{ desc[value - 1] }}</span>
            </span>
          </a-col>
        </a-row>
        <!--END RATING STAR COLUMN -->
        <!--START RATING BUTTONS -->
        <a-row :gutter="24" class="mt-3">
          <!--START EXCELLENT BUTTON COLUMN -->
          <a-col :xs="24" :sm="24" :md="8" :lg="9" :xl="8">
            <a-button block class="ant-btn-rating" type="primary">
              Excellent
            </a-button>
          </a-col>
          <!--END EXCELLENT BUTTON COLUMN -->
          <!--START GOOD BUTTON COLUMN -->
          <a-col :xs="24" :sm="24" :md="8" :lg="7" :xl="8">
            <a-button block class="ant-btn-rating" type="primary">
              Good
            </a-button>
          </a-col>
          <!--END GOOD BUTTON COLUMN SECTION -->
          <!--START POOR BUTTON COLUMN -->
          <a-col :xs="24" :sm="24" :md="8" :lg="7" :xl="7">
            <a-button block class="ant-btn-rating px-2" type="primary">
              Poor
            </a-button>
          </a-col>
          <!--END POOR BUTTON COLUMN-->
        </a-row>
        <!--START RATING BUTTONS -->
        <a-row :gutter="24">
          <!--START DOCUMENT REQUEST COLUMN -->
          <a-col class="mt-3" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <a-textarea :rows="5" placeholder="Ex.Your feedback"></a-textarea>
          </a-col>
          <a-col align="end" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <span style="color: #979797">200char</span>
          </a-col>
          <!--END DOCUMENT REQUEST  COLUMN -->
        </a-row>
        <!--START SUBMIT FEEDBACK ROW -->
        <a-row :gutter="24" class="mt-3">
          <!--START SUBMIT FEEDBACK COLUMN -->
          <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <a-button
              class="add-btn"
              html-type="submit"
              type="primary"
              :loading="loading"
              block
              @click="handleSave"
            >
              Submit feedback
            </a-button>
          </a-col>
          <!--START SUBMIT FEEDBACK COLUMN -->
        </a-row>
        <!--START SUBMIT FEEDBACK ROW -->
      </a-form-model>
      <!--END  SHARE REVIEW FORM MODAL -->
    </a-modal>
    <!--END SHARE REVIEW MODAL -->
  </div>
  <!--END SHARE REVIEW SECTION -->
</template>
<!-- ************************** SCRIPTS  ************************* -->
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AppointmentModal',
  components: {},

  data() {
    return {
      clinicAppointmentModal: false,
      value: null,
      desc: ['Poor', 'Bad', 'Normal', 'Good', 'Excellent'],
      loading: false,
      locationForm: { value: null }
    }
  },
  computed: {
    ...mapGetters('modules/settings', [
      'isShareReviewModalVisible',
      'getClinicAppointment',
      'getTeleHealthAppointment'
    ]),
    isShareVisible: {
      // getter
      get() {
        return this.isShareReviewModalVisible
      },
      // setter
      set(newValue) {
        this.handleCancel()
      }
    }
  },
  methods: {
    ...mapActions('modules/settings', [
      'handlelocationSubmit',
      'handleShareReviewModal'
    ]),

    async handleSave() {
      await this.$refs.locationForm.validate(valid => {
        if (valid) {
          this.loading = true
          setTimeout(async () => {
            await this.handlelocationSubmit(this.locationForm)
            this.loading = false
            // Show Notification Popup
            this.$notification.success({
              message: 'Reviews  Submited!',
              description: 'Thank you Messages for the Reviews.'
            })
            this.loading = false
            this.$refs.locationForm.resetFields()
            this.handleShareReviewModal('')
          }, 1000)
        }
      })
    },

    handleCancel(e) {
      this.handleShareReviewModal('')
    },
    onChange(e) {
      // console.log('radio checked', e.target.value)
    }
  }
}
</script>
<style lang="scss"></style>
