<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--SETTINGS SECTION-->
  <div class="patient-management mb-5 pb-5">
    <!--START AVAILABE LIST ROW -->
    <a-row>
      <a-col :xs="24" :sm="24" :md="16" :lg="15" :xl="16">
        <a-row :gutter="16" class="my-3">
          <!--START ALL AVAILABE SPECIALIST COLUMN  -->
          <a-col :xs="12" :sm="12" :md="6" :lg="12" :xl="12">
            <h3 v-if="btnName == 'all_demo'" class="font-600 fs-extra-large">
              Demographics
            </h3>
            <h3 v-if="btnName == 'insurance'" class="font-600 fs-extra-large">
              Insurance
            </h3>
            <h3 v-if="btnName == 'draft'" class="font-600 fs-extra-large">
              Draft
            </h3>
            <h3 v-if="btnName == 'documents'" class="font-600 fs-extra-large">
              Documents
            </h3>
          </a-col>
          <!--END ALL AVAILABE SPECIALIST COLUMN -->
          <!--START MENU ITEM COLUMN -->
          <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" align="end">
            <span class="pr-2 fs-small">Sort by :</span>
            <a-dropdown :trigger="['click']">
              <a
                class="ant-dropdown-link fs-normal font-500"
                @click="e => e.preventDefault()"
              >
                All <a-icon type="down" />
              </a>
              <a-menu slot="overlay">
                <a-menu-item key="0">
                  <a href="#">Ascending </a>
                </a-menu-item>
                <a-menu-item key="1">
                  <a href="#">Descending </a>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </a-col>
          <!--END MENU ITEM COLUMN -->
        </a-row>
      </a-col>
    </a-row>
    <!--START AVAILABE LIST ROW -->
    <!--START SETTING FORM-->
    <a-form-model
      ref="documentsForm"
      :hide-required-mark="true"
      label-align="left"
      :model="documentsForm"
    >
      <!--START DOCUMENTS BUTTONS  ROW-->
      <a-row class="px-1" :gutter="16">
        <a-col :xs="24" :sm="24" :md="18" :lg="16" :xl="11">
          <!--SEARCH DOCUMENTS COLUMN -->
          <a-card class="clinic-documents-btn" :bordered="false">
            <a-button
              type="danger"
              class="ml-1 btn-group"
              :class="btnName != 'all_demo' ? 'documents-btn' : ''"
              :disabled="enableBtn"
              @click="changePaymentType('all_demo')"
            >
              Demographics</a-button
            >

            <a-button
              type="danger"
              class="ml-1 btn-group"
              :class="btnName != 'insurance' ? 'documents-btn' : ''"
              :disabled="enableBtn"
              @click="changePaymentType('insurance')"
            >
              Insurance</a-button
            >
            <a-button
              type="danger"
              class="ml-1 btn-group"
              :class="btnName != 'draft' ? 'documents-btn' : ''"
              :disabled="enableBtn"
              @click="changePaymentType('draft')"
            >
              Draft</a-button
            >
            <a-button
              type="danger"
              class="ml-1 btn-group"
              :class="btnName != 'documents' ? 'documents-btn' : ''"
              @click="changePaymentType('documents')"
            >
              Documents</a-button
            >
          </a-card>
        </a-col>
      </a-row>
      <!--END DOCUMENTS BUTTONS  ROW-->
    </a-form-model>
    <!--END SETTING FORM-->
    <Demographics v-if="btnName == 'all_demo'" />
    <Insurance v-if="btnName == 'insurance'" />
    <Draft v-if="btnName == 'draft'" />
    <Documents v-if="btnName == 'documents'" />

    <!-- <SubmitDocument /> -->
  </div>
  <!-- END SETTINGS SECTION-->
</template>
<!-- ************************** SCRIPT  ************************* -->

<script>
import Demographics from './Demographics/Demographics'
import Insurance from './Insurance/Insurance'
import Draft from './Draft/Draft'
import Documents from './Documents/Documents'
// import SubmitDocument from './Modal/SubmitDocument'
// COMPONENTS

export default {
  components: {
    Demographics,
    Insurance,
    Draft,
    Documents
    //    SubmitDocument
  },

  data() {
    return {
      btnName: 'documents',
      documentsForm: {
        document: null
      },
      enableBtn: true
    }
  },
  // Call Anything On runtime
  computed: {},
  mounted() {
    this.$root.$on('enable-btns', this.enableBtns)
  },
  //
  // mounted() {
  //   this.$root.$on('show-unsign-document', this.showUnsignDoc)
  // },

  methods: {
    enableBtns() {
      this.enableBtn = false
      this.btnName = 'all_demo'
    },
    changePaymentType(btnName) {
      // console.log(btnName)
      // console.log('helo')
      this.btnName = btnName
      // if (btnName == 'request_doc') {
      //   this.$root.$emit('show-date-picker', true)
      // } else {
      //   this.$root.$emit('show-date-picker', false)
      // }
    }
  }
}
</script>
<style lang="scss"></style>
