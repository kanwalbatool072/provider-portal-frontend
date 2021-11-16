<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START APPOINTMENT SECTION  -->
  <div>
    <!--START APPOINTMENT FORM CARD  -->
    <a-card :bordered="false" class="appointment-form">
      <!--START FORM MODAL -->
      <a-form-model
        ref="appointmentForm"
        :hide-required-mark="true"
        :model="appointmentForm"
        :rules="rules"
        label-align="left"
      >
        <!--START FULL NAME ROW -->
        <a-row :gutter="24" class="px-4 pt-2">
          <!--START FLL NAME COLUMN-->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Date'"
              prop="date"
              has-feedback
              :colon="false"
              :label-col="{
                xl: 24,
                lg: 24,
                md: 24,
                sm: 24,
                xs: 24
              }"
              :wrapper-col="{
                xl: 24,
                lg: 24,
                md: 24,
                sm: 24,
                xs: 24
              }"
            >
              <a-date-picker
                v-model="appointmentForm.date"
                style="width: 100%"
              />
            </a-form-model-item>
          </a-col>
          <!--END FULL NAME COLUMN-->
          <!--START MOBILE NUMBER COLUMN  -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'From'"
              prop="timeFrom"
              has-feedback
              :colon="false"
              :label-col="{
                xl: 24,
                lg: 24,
                md: 24,
                sm: 24,
                xs: 24
              }"
              :wrapper-col="{
                xl: 24,
                lg: 24,
                md: 24,
                sm: 24,
                xs: 24
              }"
            >
              <a-time-picker
                v-model="appointmentForm.timeFrom"
                style="width: 100%"
                :default-value="moment('12:00', 'HH:mm')"
                format="HH:mm"
              />
            </a-form-model-item>
          </a-col>
          <!--END MOBILE NUMBER COLUMN -->
          <!--START DATE OF BIRTH COLUMN  -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'To'"
              prop="timeTo"
              has-feedback
              :colon="false"
              :label-col="{
                xl: 24,
                lg: 24,
                md: 24,
                sm: 24,
                xs: 24
              }"
              :wrapper-col="{
                xl: 24,
                lg: 24,
                md: 24,
                sm: 24,
                xs: 24
              }"
            >
              <a-time-picker
                v-model="appointmentForm.timeTo"
                style="width: 100%"
                :default-value="moment('12:00', 'HH:mm')"
                format="HH:mm"
              />
            </a-form-model-item>
          </a-col>
          <!--END DATE OF BIRTH COLUMN  -->
          <!--START TIME COLUMN  -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Duration'"
              prop="timeiDuration"
              has-feedback
              :colon="false"
              :label-col="{
                xl: 24,
                lg: 24,
                md: 24,
                sm: 24,
                xs: 24
              }"
              :wrapper-col="{
                xl: 24,
                lg: 24,
                md: 24,
                sm: 24,
                xs: 24
              }"
            >
              <a-input
                v-model="appointmentForm.timeiDuration"
                style="width: 100%"
              >
              </a-input>
              <!-- <a-time-picker
                v-model="appointmentForm.timeiDuration"
                style="width: 100%"
                :default-value="moment('12:00', 'HH:mm')"
                format="HH:mm"
              /> -->
            </a-form-model-item>
          </a-col>
          <!--END TIME COLUMN  -->
          <!--START  SPECIALIST COLUMN  -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Provider'"
              prop="provider"
              has-feedback
              :colon="false"
              :label-col="{
                xl: 24,
                lg: 24,
                md: 24,
                sm: 24,
                xs: 24
              }"
              :wrapper-col="{
                xl: 24,
                lg: 24,
                md: 24,
                sm: 24,
                xs: 24
              }"
            >
              <a-select
                v-model="appointmentForm.provider"
                default-value="orthopadic"
                style="width: 100%"
              >
                <a-select-option value="orthopadic">
                  Orthopadic
                </a-select-option>
                <a-select-option value="lucy"> Lucy </a-select-option>
                <a-select-option value="Yiminghe"> yiminghe </a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <!--END SPECIALIST COLUMN  -->
          <!--START GENDER COLUMN  -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Location'"
              prop="location"
              has-feedback
              :colon="false"
              :label-col="{
                xl: 24,
                lg: 24,
                md: 24,
                sm: 24,
                xs: 24
              }"
              :wrapper-col="{
                xl: 24,
                lg: 24,
                md: 24,
                sm: 24,
                xs: 24
              }"
            >
              <a-select
                v-model="appointmentForm.location"
                default-value="orthopadic"
                style="width: 100%"
              >
                <a-select-option value="orthopadic">
                  Orthopadic
                </a-select-option>
                <a-select-option value="lucy"> Lucy </a-select-option>
                <a-select-option value="Yiminghe"> yiminghe </a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <!--END GENDER COLUMN  -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Service Profile'"
              prop="serviceProfile"
              has-feedback
              :colon="false"
              :label-col="{
                xl: 24,
                lg: 24,
                md: 24,
                sm: 24,
                xs: 24
              }"
              :wrapper-col="{
                xl: 24,
                lg: 24,
                md: 24,
                sm: 24,
                xs: 24
              }"
            >
              <a-select
                v-model="appointmentForm.serviceProfile"
                default-value="orthopadic"
                style="width: 100%"
              >
                <a-select-option value="orthopadic">
                  Orthopadic
                </a-select-option>
                <a-select-option value="lucy"> Lucy </a-select-option>
                <a-select-option value="Yiminghe"> yiminghe </a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Appt Status'"
              prop="apptStatus"
              has-feedback
              :colon="false"
              :label-col="{
                xl: 24,
                lg: 24,
                md: 24,
                sm: 24,
                xs: 24
              }"
              :wrapper-col="{
                xl: 24,
                lg: 24,
                md: 24,
                sm: 24,
                xs: 24
              }"
            >
              <a-select
                v-model="appointmentForm.apptStatus"
                default-value="orthopadic"
                style="width: 100%"
              >
                <a-select-option value="orthopadic">
                  Orthopadic
                </a-select-option>
                <a-select-option value="lucy"> Lucy </a-select-option>
                <a-select-option value="Yiminghe"> yiminghe </a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Visit Reason'"
              prop="visitReason"
              has-feedback
              :colon="false"
              :label-col="{
                xl: 24,
                lg: 24,
                md: 24,
                sm: 24,
                xs: 24
              }"
              :wrapper-col="{
                xl: 24,
                lg: 24,
                md: 24,
                sm: 24,
                xs: 24
              }"
            >
              <a-select
                v-model="appointmentForm.visitReason"
                default-value="orthopadic"
                style="width: 100%"
              >
                <a-select-option value="orthopadic">
                  Orthopadic
                </a-select-option>
                <a-select-option value="lucy"> Lucy </a-select-option>
                <a-select-option value="Yiminghe"> yiminghe </a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Appt Type'"
              prop="apptType"
              has-feedback
              :colon="false"
              :label-col="{
                xl: 24,
                lg: 24,
                md: 24,
                sm: 24,
                xs: 24
              }"
              :wrapper-col="{
                xl: 24,
                lg: 24,
                md: 24,
                sm: 24,
                xs: 24
              }"
            >
              <a-select
                v-model="appointmentForm.apptType"
                default-value="orthopadic"
                style="width: 100%"
              >
                <a-select-option value="orthopadic">
                  Orthopadic
                </a-select-option>
                <a-select-option value="lucy"> Lucy </a-select-option>
                <a-select-option value="Yiminghe"> yiminghe </a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Topic for Group Appt'"
              prop="apptGroup"
              has-feedback
              :colon="false"
              :label-col="{
                xl: 24,
                lg: 24,
                md: 24,
                sm: 24,
                xs: 24
              }"
              :wrapper-col="{
                xl: 24,
                lg: 24,
                md: 24,
                sm: 24,
                xs: 24
              }"
            >
              <a-select
                v-model="appointmentForm.apptGroup"
                default-value="orthopadic"
                style="width: 100%"
              >
                <a-select-option value="orthopadic">
                  Orthopadic
                </a-select-option>
                <a-select-option value="lucy"> Lucy </a-select-option>
                <a-select-option value="Yiminghe"> yiminghe </a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="12" :lg="24" :xl="24">
            <a-form-model-item
              :label="'Write your problem'"
              prop="problem"
              has-feedback
              :colon="false"
              :label-col="{
                xl: 24,
                lg: 24,
                md: 24,
                sm: 24,
                xs: 24
              }"
              :wrapper-col="{
                xl: 24,
                lg: 24,
                md: 24,
                sm: 24,
                xs: 24
              }"
            >
              <a-textarea
                v-model="appointmentForm.problem"
                placeholder="Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod Lorem ip sum dolor sit amet, consetetur sadipscing. Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod Lorem ip sum dolor sit amet, consetetur sadipscing."
                :rows="6"
              />
            </a-form-model-item>
          </a-col>
          <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" align="end">
            <a-button
              type="primary"
              class="px-5 my-4 mt-5"
              @click="bookAppointment"
              >Book Appointment</a-button
            >
          </a-col>
        </a-row>
      </a-form-model>
      <!--END FORM MODAL  -->
    </a-card>
    <!--START APPOINTMENT FORM CARD  -->
    <Confirmation />
    <OfficialConsent />
  </div>
  <!--END APPOINTMENT SECTION   -->
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
import moment from 'moment'

export default {
  data() {
    return {
      selectedSlot: '',
      appointmentForm: {
        date: '',
        timeFrom: '',
        timeTo: '',
        timeiDuration: '',
        provider: '',
        location: '',
        serviceProfile: '',
        apptStatus: '',
        visitReason: '',
        apptType: '',
        apptGroup: '',
        problem: ''
      },
      rules: {
        date: [{ required: true, message: 'This field is Required' }],
        timeFrom: [
          {
            required: true,
            message: 'This field is Required'
          }
        ],
        timeTo: [
          {
            required: true,
            message: 'This field is Required'
          }
        ],
        timeiDuration: [
          {
            required: true,
            message: 'This field is Required'
          }
        ],
        provider: [
          {
            required: true,
            message: 'This field is Required'
          }
        ],
        location: [
          {
            required: true,
            message: 'This field is Required'
          }
        ],
        serviceProfile: [
          {
            required: true,
            message: 'This field is Required'
          }
        ],
        apptStatus: [
          {
            required: true,
            message: 'This field is Required'
          }
        ],
        visitReason: [
          {
            required: true,
            message: 'This field is Required'
          }
        ],
        apptType: [
          {
            required: true,
            message: 'This field is Required'
          }
        ],
        apptGroup: [
          {
            required: true,
            message: 'This field is Required'
          }
        ],
        problem: [
          {
            required: true,
            message: 'This field is Required'
          }
        ]
      }
    }
  },
  methods: {
    moment,
    async bookAppointment() {
      console.log('inside function')
      await this.$refs.appointmentForm.validate(valid => {
        if (valid) {
          console.log('inside validation')
          this.loading = true
          this.disabled = true
          setTimeout(async () => {
            this.loading = false
            this.disabled = false

            // Show Notification Popup
            this.$notification.success({
              message: 'Successfull'
            })

            await this.$refs.appointmentForm.resetFields()
          }, 1000)
        }
      })
    }
  }
  // Call Anything On runtime
}
</script>

<style></style>
