<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START EDIT PROFILE SECTION -->
  <div class="demo-profile-form">
    <!--START EDIT PROFILE CARD -->
    <a-card :bordered="false" class="demo-profile-card">
      <!--START FORM MODEL-->
      <a-form-model
        ref="insuranceEditProfile"
        :hide-required-mark="true"
        :model="insuranceEditProfile"
        label-align="left"
      >
        <!--START PATIENT ID ROW -->
        <a-row :gutter="24" class="px-2">
          <h2 class="px-2 ml-1 primary-insurance font-500">
            Primary Insurance
          </h2>
          <!--START PATIENT ID COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Insurance Name'"
              prop="patientId"
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
                v-model="insuranceEditProfile.patientId"
                placeholder="Health Care"
              >
              </a-input>
            </a-form-model-item>
          </a-col>
          <!--END PATIENT ID COLUMN -->
          <!--START FIRST NAME COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Policy Number'"
              prop="firstname"
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
                v-model="insuranceEditProfile.firstname"
                placeholder="123548"
              >
              </a-input>
            </a-form-model-item>
          </a-col>
          <!--END FIRST NAME COLUMN -->

          <!--START MIDDLE NAME COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Insurance Group #'"
              prop="middlename"
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
                v-model="insuranceEditProfile.middlename"
                placeholder="221121"
              >
              </a-input>
            </a-form-model-item>
          </a-col>
          <!--END MIDDLE NAME COLUMN -->
          <!--START LAST NAME COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Eligibility Date'"
              prop="lastname"
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
                v-model="insuranceEditProfile.lastname"
                placeholder="22/10/21"
              />
            </a-form-model-item>
          </a-col>
          <!--END LAST NAME COLUMN -->

          <!--START SUFFIX COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Start Date'"
              prop="suffix"
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
                v-model="insuranceEditProfile.suffix"
                placeholder="22/10/21"
              />
            </a-form-model-item>
          </a-col>
          <!--END SUFFIX  COLUMN -->
          <!--START DATE OF BIRTH  COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'End Date'"
              prop="dateOfBirth"
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
                v-model="insuranceEditProfile.dateOfBirth"
                placeholder="22/10/21"
              />
            </a-form-model-item>
          </a-col>
          <!--END DATE OF BIRTH COLUMN -->
          <!--START GENDER COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Rx Group'"
              prop="gender"
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
                v-model="insuranceEditProfile.gender"
                placeholder="221121"
              />
            </a-form-model-item>
          </a-col>
          <!--END GENDER COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Insurance Company Name'"
              prop="companyName"
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
                v-model="insuranceEditProfile.companyName2"
                placeholder="221121"
              />
            </a-form-model-item>
          </a-col>
          <!--START SSN COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'BIN'"
              prop="ssn"
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
              <a-input v-model="insuranceEditProfile.ssn" placeholder="221121">
              </a-input>
            </a-form-model-item>
          </a-col>
          <!--END SSN COLUMN -->
        </a-row>
        <!--END PATIENT ID ROW -->
        <a-row :gutter="24" class="px-2 pt-5">
          <!--START PATIENT ID COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Insurance Name'"
              prop="patientId"
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
                v-model="insuranceEditProfile.patientId1"
                placeholder="Health Care"
              >
              </a-input>
            </a-form-model-item>
          </a-col>
          <!--END PATIENT ID COLUMN -->
          <!--START FIRST NAME COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Policy Number'"
              prop="firstname"
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
                v-model="insuranceEditProfile.firstname1"
                placeholder="123548"
              >
              </a-input>
            </a-form-model-item>
          </a-col>
          <!--END FIRST NAME COLUMN -->

          <!--START MIDDLE NAME COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Insurance Group #'"
              prop="middlename"
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
                v-model="insuranceEditProfile.middlename1"
                placeholder="221121"
              >
              </a-input>
            </a-form-model-item>
          </a-col>
          <!--END MIDDLE NAME COLUMN -->
          <!--START LAST NAME COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Eligibility Date'"
              prop="lastname"
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
                v-model="insuranceEditProfile.lastname1"
                placeholder="22/10/21"
              />
            </a-form-model-item>
          </a-col>
          <!--END LAST NAME COLUMN -->

          <!--START SUFFIX COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Start Date'"
              prop="suffix"
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
                v-model="insuranceEditProfile.suffix1"
                placeholder="22/10/21"
              />
            </a-form-model-item>
          </a-col>
          <!--END SUFFIX  COLUMN -->
          <!--START DATE OF BIRTH  COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'End Date'"
              prop="dateOfBirth"
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
                v-model="insuranceEditProfile.dateOfBirth1"
                placeholder="22/10/21"
              />
            </a-form-model-item>
          </a-col>
          <!--END DATE OF BIRTH COLUMN -->
          <!--START GENDER COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Rx Group'"
              prop="gender"
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
                v-model="insuranceEditProfile.gender1"
                placeholder="221121"
              />
            </a-form-model-item>
          </a-col>
          <!--END GENDER COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Insurance Company Name'"
              prop="companyName"
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
                v-model="insuranceEditProfile.companyName"
                placeholder="221121"
              />
            </a-form-model-item>
          </a-col>
          <!--START SSN COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'BIN'"
              prop="ssn"
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
              <a-input v-model="insuranceEditProfile.ssn1" placeholder="221121">
              </a-input>
            </a-form-model-item>
          </a-col>
          <!--END SSN COLUMN -->
        </a-row>
      </a-form-model>
      <!--START FORM MODEL -->
      <a-row :gutter="24">
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" align="end">
          <a-button type="primary" class="px-5 my-3 mr-2"
            >Save Changes</a-button
          >
        </a-col>
      </a-row>
    </a-card>
    <!--END EDIT PROFILE CARD -->
  </div>
  <!--END EDIT PROFILE SECTION -->
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
import moment from 'moment'

export default {
  data() {
    return {
      insuranceEditProfile: {
        patientId: '12345',
        firstname: 'John',
        middlename: 'Shawn',
        lastname: 'Wicks',
        suffix: '',
        dateOfBirth: '',

        gender: '1',
        ssn: 'SSN2345678',
        address: 'Flat 32b/11',
        city: 'Texas City',
        countery: 'USA',
        state: 'TX',
        zip: '64587',
        cellphone: '+1 234 56789',
        phonenumber: '+1 23456789',
        email: 'test@gmail.com'
      }
    }
  },
  // Call Anything On runtime

  methods: {
    moment
  }
}
</script>

<style></style>
