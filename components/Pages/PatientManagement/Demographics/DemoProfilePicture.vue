<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START EDIT PROFILE-PICTURE SECTION -->
  <div class="demo-profile-picture">
    <!--START EDIT PROFILE PICTURE CARD  -->
    <a-card :bordered="false" class="profile-picture">
      <!--START EDIT PROFILE PICTURE ROW-->
      <a-row>
        <a-col :xl="24" :lg="24" :md="24" :sm="24" :xs="24" align="center">
          <img
            src="/images/Dashboard/dr_john.svg"
            alt=""
            class="mt-1 profile-pic"
          />
        </a-col>
      </a-row>
      <!--END EDIT PROFILE PICTURE ROW-->
      <!--START DRIVING LICENSE ROW  -->
      <a-row class="mt-4">
        <a-col :xl="24" :lg="24" :md="24" :sm="24" :xs="24" align="center">
          <a-button type="primary" class="px-4">
            Driving License Front
          </a-button>
        </a-col>
      </a-row>
      <!--END DRIVING LICENSE ROW  -->
      <!--START INC CARD FRONT ROW  -->
      <a-row class="mt-2">
        <a-col :xl="24" :lg="24" :md="24" :sm="24" :xs="24" align="center">
          <a-button type="primary" class="px-4 mb-2">
            Driving License Back
          </a-button>
        </a-col>
      </a-row>
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
