<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START EDIT PROFILE SECTION -->
  <div class="edit-profile">
    <!--START EDIT PROFILE ROW -->
    <a-row :gutter="24">
      <!--START EDIT PROFILE COLUMN -->
      <a-col :xs="24" :sm="24" :md="18" :lg="16" :xl="16">
        <h3 class="font-600 fs-extra-large px-2 pb-2">Edit Profile</h3>
        <!--COMPONENT -->
        <EditProfileForm />
      </a-col>
      <!--END EDIT PROFILE COLUMN -->
      <!--START EDIT PROFILE PICTURE -->
      <a-col :xs="24" :sm="24" :md="6" :lg="8" :xl="8">
        <h3 class="font-600 px-2 pb-2"></h3>
        <!--START EDIT PROFILE ROW -->
        <a-row :gutter="[16, 16]" class="my-4 py-2">
          <a-col :xs="24" :sm="11" :md="11" :lg="24" :xl="24" class="pt-0 pb-2">
            <EditProfilePicture />
          </a-col>
        </a-row>
        <!--START EDIT PROFILE ROW -->
      </a-col>
      <!--END EDIT PROFILE PICTURE -->
    </a-row>
    <!--START EDIT PROFILE ROW -->
  </div>
  <!--END EDIT  PROFILE SECTION -->
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
import EditProfileForm from './EditProfileForm'
import EditProfilePicture from './EditProfilePicture'
export default {
  name: 'EditProfile',
  components: {
    EditProfileForm,
    EditProfilePicture
  }
}
</script>
