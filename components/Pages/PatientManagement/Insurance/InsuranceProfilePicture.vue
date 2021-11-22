<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START EDIT PROFILE-PICTURE SECTION -->
  <div class="demo-profile-picture">
    <!--START EDIT PROFILE PICTURE CARD  -->
    <a-card class="insurance-card" :bordered="false">
      <!--START DOCTER IMAGE LIST ROW-->
      <a-row class="pb-3">
        <!--START ICON COLUMN -->
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" align="end">
          <a-icon type="more" />
        </a-col>
        <!--END ICON COLUMN-->
        <!--START DOCTER IMAGE LIST COLUMN-->
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" align="center">
          <div class="p-3">
            <img src="/images/Dashboard/dr_john.svg" height="92" />
          </div>
          <h2 class="mb-0 pt-2">David James</h2>
          <span class="fs-normal font-400 management-card-text">1234</span>
        </a-col>
        <!--START DOCTER IMAGE LIST COLUMN-->
      </a-row>
      <!--END  DOCTER IMAGE LIST ROW-->
      <!--START ORITHOPEDICS TEMPLATES -->
      <template slot="actions" class="ant-card-actions">
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" align="center">
          <div class="card-text">
            <p class="mb-0 fs-normal font-400 management-card-text">PATIENT</p>
          </div>
        </a-col>
      </template>
      <!--END ORITHOPEDICS TEMPLATES-->
    </a-card>
    <!--END EDIT PROFILE PICTURE CARD  -->
  </div>
  <!--END EDIT PROFILE-PICTURE SECTION -->
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
export default {
  name: 'EditProfilePicture',
  // PROPS

  data() {
    return {}
  }
}
</script>

<style></style>
