<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START EDIT PROFILE SECTION -->
  <div class="demo-profile-form">
    <a-row v-for="(item, key) in getDocumentList" :key="key" class="mb-2">
      <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <a-card class="listCard">
          <a-row :gutter="16" class="description">
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="2">
              <img :src="item.avatar" />
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="21">
              <p class="mb-0 font-600">{{ item.title }}</p>
              <span class="doc-list-text">{{ item.description }}</span>
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="1" align="end">
              <a-icon type="right" />
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
  </div>
  <!--END EDIT PROFILE SECTION -->
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('modules/patient-management', ['getDocumentList'])
  }
}
</script>

<style></style>
