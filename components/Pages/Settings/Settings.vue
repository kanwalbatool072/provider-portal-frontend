<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--SETTINGS-->
  <div class="settings pb-5 mb-5">
    <a-row class="mb-5 pb-5">
      <h3 class="setting-text font-600">Settings</h3>
      <a-row :gutter="24" class="mt-3">
        <!--SEARCH DOCUMENTS COLUMN -->
        <a-col :xs="15" :sm="18" :md="20" :lg="16" :xl="20">
          <h3
            class="mt-4 lang-text font-600 pointer"
            @click="handleLanguagesModal('')"
          >
            Change Language
          </h3>
          <a-divider class="mb-0" />
        </a-col>
      </a-row>
      <a-row :gutter="24" class="mt-3">
        <!--SEARCH DOCUMENTS COLUMN -->
        <a-col :xs="15" :sm="18" :md="20" :lg="16" :xl="20">
          <h3
            class="mt-1 lang-text font-600 pointer"
            @click="handleLocationModal('')"
          >
            Change Location
          </h3>
          <a-divider class="mb-0" />
        </a-col>
      </a-row>
      <a-row :gutter="24" class="mt-3">
        <!--SEARCH DOCUMENTS COLUMN -->
        <a-col :xs="15" :sm="18" :md="20" :lg="16" :xl="20">
          <h3 class="mt-1 lang-text font-600 pointer">
            Change Timing
          </h3>
          <a-divider class="mb-0" />
        </a-col>
      </a-row>

      <a-row :gutter="24" class="mt-4 mb-5 pb-5">
        <!--SEARCH DOCUMENTS COLUMN -->
        <a-col :xs="15" :sm="18" :md="20" :lg="18" :xl="18">
          <span class="lang-text">Receive notifications </span>
        </a-col>
        <!-- ENDS SEARCH DOCUMENTS COLUMN -->

        <!-- BADGE COLUMN -->
        <a-col :xs="7" :sm="6" :md="4" :lg="6" :xl="6">
          <div>
            <a-switch v-model="showBtn" />
          </div>
        </a-col>
        <!-- END BADGE COLUMN COLUMN -->
      </a-row>
      <a-row class="mb-5 pb-5">
        <div class="mb-5 pb-5"></div>
      </a-row>
    </a-row>
    <Languages />
    <Location />
  </div>
  <!-- END SETTINGS SECTION-->
</template>
<!-- ************************** SCRIPT  ************************* -->

<script>
// STORE
import { mapGetters, mapActions } from 'vuex'
// COMPONENTS
import Languages from './Modals/Languages'
import Location from './Modals/Location'

export default {
  components: {
    Languages,
    Location
  },
  data() {
    return {
      show: true,
      showBtn: true,
      educationForm: {
        document: null,
        resourceType: 1
      }
    }
  },

  // Call Anything On runtime
  computed: {
    ...mapGetters('modules/settings', [])
  },

  methods: {
    ...mapActions('modules/settings', [
      'handleLanguagesModal',
      'handleLocationModal'
    ])
  }
}
</script>
<style lang="scss"></style>
