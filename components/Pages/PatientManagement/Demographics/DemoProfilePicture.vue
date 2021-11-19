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
          <!-- <a-icon type="plus" /> -->
        </a-col>
        <!-- <a-col :xs="24" :sm="24" :md="16" :lg="8" :xl="19" class="pt-1">
        </a-col> -->
      </a-row>
      <!--END EDIT PROFILE PICTURE ROW-->
      <!--START DRIVING LICENSE ROW  -->
      <a-row class="mt-4">
        <a-col :xl="24" :lg="24" :md="24" :sm="24" :xs="24" align="center">
          <a-button type="primary" class="px-4">
            Insurance Card Front
          </a-button>
        </a-col>
      </a-row>
      <!--END DRIVING LICENSE ROW  -->
      <!--START INC CARD FRONT ROW  -->
      <a-row class="mt-2">
        <a-col :xl="24" :lg="24" :md="24" :sm="24" :xs="24" align="center">
          <a-button type="primary" class="px-4 mb-2">
            Insurance Card Back
          </a-button>
        </a-col>
      </a-row>
      <!--END INC CARD FRONT ROW  -->
      <!-- START DRIVING LICENSE ROW  -->
      <!-- <a-row class="mt-2">
        <a-col :span="24" align="center">
          <a-button type="primary" class="px-4">
            <img src="/images/Dashboard/camera.svg" class="camera-icon" />
            Ins. Card Back
          </a-button>
        </a-col>
      </a-row> -->
      <!--END DRIVING LICENSE ROW  -->
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
