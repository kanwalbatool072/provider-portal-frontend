<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START EDIT PROFILE SECTION -->
  <div class="edit-profile-form">
    <!--START EDIT PROFILE CARD -->
    <a-card :bordered="false" class="profile-form-card">
      <!--START FORM MODEL-->
      <a-form-model
        ref="editProfile"
        :hide-required-mark="true"
        :model="editProfile"
        label-align="left"
      >
        <!--START PATIENT ID ROW -->
        <a-row :gutter="24" class="px-4 pt-2">
          <!--START PATIENT ID COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Doctor ID'"
              prop="docterId"
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
              <a-input v-model="editProfile.docterId" placeholder="12345">
              </a-input>
            </a-form-model-item>
          </a-col>
          <!--END PATIENT ID COLUMN -->
          <!--START FIRST NAME COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'First Name'"
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
              <a-input v-model="editProfile.firstname" placeholder="John">
              </a-input>
            </a-form-model-item>
          </a-col>
          <!--END FIRST NAME COLUMN -->

          <!--START MIDDLE NAME COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Middle Name'"
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
              <a-input v-model="editProfile.middlename" placeholder="Shawn">
              </a-input>
            </a-form-model-item>
          </a-col>
          <!--END MIDDLE NAME COLUMN -->
          <!--START LAST NAME COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Last Name'"
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
              <a-input v-model="editProfile.lastname" placeholder="Wicks">
              </a-input>
            </a-form-model-item>
          </a-col>
          <!--END LAST NAME COLUMN -->

          <!--START SUFFIX COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Suffix'"
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
              <a-input v-model="editProfile.suffix" placeholder="Suffix">
              </a-input>
            </a-form-model-item>
          </a-col>
          <!--END SUFFIX  COLUMN -->

          <!--START SUFFIX COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Specialist'"
              prop="specialist"
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
                v-model="editProfile.specialist"
                default-value="Orthopedic"
                style="width: 100%"
              >
                <a-select-option value="1"> Orthopedic </a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
        </a-row>
        <!--END SUFFIX  COLUMN -->
        <a-row :gutter="24" class="px-4 ">
          <!--START DATE OF BIRTH  COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Date Of Birth'"
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
                v-model="editProfile.dateOfBirth"
                style="width: 100%"
              />
            </a-form-model-item>
          </a-col>
          <!--END DATE OF BIRTH COLUMN -->
          <!--START GENDER COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Gender'"
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
              <a-select
                v-model="editProfile.gender"
                default-value="Male"
                style="width: 100%"
              >
                <a-select-option value="1"> Male </a-select-option>
                <a-select-option value="2"> Female </a-select-option>
              </a-select>
            </a-form-model-item>
          </a-col>
          <!--END GENDER COLUMN -->

          <!--START SSN COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'SSN'"
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
              <a-input v-model="editProfile.ssn" placeholder="SSN2345678">
              </a-input>
            </a-form-model-item>
          </a-col>
          <!--END SSN COLUMN -->
          <!--START ADDRESS COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Address'"
              props="address"
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
              <a-input v-model="editProfile.address" placeholder="Flat 32b/11">
              </a-input>
            </a-form-model-item>
          </a-col>
          <!--END ADDRESS COLUMN -->

          <!--END PATIENT ID ROW -->
          <!--START ADDRESS ROW -->

          <!--START CITY COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'City'"
              prop="city"
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
              <a-input v-model="editProfile.city" placeholder="Texas City">
              </a-input>
            </a-form-model-item>
          </a-col>
          <!--END CITY COLUMN -->

          <!--START STATE COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'State'"
              prop="state"
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
              <a-input v-model="editProfile.state" placeholder="TX"> </a-input>
            </a-form-model-item>
          </a-col>
          <!--END ADDRESS COLUMN -->

          <!--END ADDRESS ROW -->
          <!--START ZIP ROW -->

          <!--START ZIP COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'ZIP'"
              prop="zip"
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
              <a-input v-model="editProfile.zip" placeholder="64587"> </a-input>
            </a-form-model-item>
          </a-col>
          <!--END ZIP COLUMN -->
          <!--START CELL PHONE COLUMN  -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Cell Phone'"
              prop="cellphone"
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
              <a-input v-model="editProfile.cellphone" placeholder="+123456789">
              </a-input>
            </a-form-model-item>
          </a-col>
          <!--END CELL PHONE COLUMN -->
          <!--START CELL PHONE COLUMN  -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'NPI'"
              prop="npi"
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
              <a-input v-model="editProfile.npi" placeholder="1234"> </a-input>
            </a-form-model-item>
          </a-col>
          <!--END CELL PHONE COLUMN -->
          <!--START CELL PHONE COLUMN  -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'DEA'"
              prop="dea"
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
              <a-input v-model="editProfile.dea" placeholder="12345678">
              </a-input>
            </a-form-model-item>
          </a-col>
          <!--END CELL PHONE COLUMN -->

          <!--START CELL PHONE COLUMN  -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Tax ID'"
              prop="tax_ID"
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
              <a-input v-model="editProfile.tax_ID" placeholder="123456">
              </a-input>
            </a-form-model-item>
          </a-col>
          <!--END CELL PHONE COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Phone Number'"
              prop="phonenumber"
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
                v-model="editProfile.phonenumber"
                placeholder="+123456789"
              >
              </a-input>
            </a-form-model-item>
          </a-col>
          <!--START EMAIL COLUMN  -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Email'"
              prop="email"
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
              <a-input v-model="editProfile.email" placeholder="test@gmail.com">
              </a-input>
            </a-form-model-item>
          </a-col>
          <!--END  EMAIL COLUMN  -->
          <!--START SUFFIX COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <a-form-model-item
              :label="'Suffix'"
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
              <a-input v-model="editProfile.suffix" placeholder="Suffix">
              </a-input>
            </a-form-model-item>
          </a-col>
          <!--END SUFFIX  COLUMN -->
        </a-row>
        <!--END ZIP ROW -->
      </a-form-model>
      <!--START FORM MODEL -->
      <a-row :gutter="24">
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" align="end">
          <a-button type="primary" class="px-5 my-3 mr-4"
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
import { mapGetters } from 'vuex'

export default {
  name: 'EditProfileForm',
  data() {
    return {
      selectedSlot: '',
      editProfile: {
        patientId: '12345',
        firstname: 'John',
        middlename: 'Shawn',
        lastname: 'Wicks',
        suffix: 'Suffix',
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
  computed: {
    ...mapGetters('book-appointment', ['getBloodGroup'])
  },
  methods: {
    moment
  }
}
</script>

<style></style>
