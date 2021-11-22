<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START EDIT PROFILE-PICTURE SECTION -->
  <div class="edit-profile-picture">
    <!--START EDIT PROFILE PICTURE CARD  -->
    <a-card :bordered="false" class="edit-profile-card">
      <!--START EDIT PROFILE PICTURE ROW-->
      <a-row>
        <a-col :span="24" align="center">
          <img
            src="/images/Dashboard/dr_john.svg"
            alt=""
            class="mt-3 profile-pic"
          />
          <a-icon type="plus" />
        </a-col>
        <!-- <a-col :xs="24" :sm="24" :md="16" :lg="8" :xl="19" class="pt-1">
        </a-col> -->
      </a-row>
      <!--END EDIT PROFILE PICTURE ROW-->
      <!--START DRIVING LICENSE ROW  -->
      <a-row class="mt-4">
        <a-col :span="24" align="center">
          <a-upload name="file" :multiple="false" @change="handleChange">
            <a-button type="primary" class="license-btn">
              <a-row>
                <a-col :span="8" align="center">
                  <img src="/images/Dashboard/camera.svg" class="pt-1" />
                </a-col>
                <a-col :span="16">
                  <span>License</span>
                </a-col>
              </a-row>
            </a-button>
          </a-upload>
        </a-col>
      </a-row>
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
  },
  methods: {
    handleChange() {
      console.log('CHanges')
    }
  }
}
</script>

<style></style>
