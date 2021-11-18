<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START EDIT PROFILE SECTION -->
  <div id="demo-profile">
    <!--START EDIT PROFILE ROW -->
    <a-row :gutter="24" class="mt-3">
      <!--START EDIT PROFILE COLUMN -->
      <a-col :xs="24" :sm="24" :md="18" :lg="16" :xl="16">
        <!--COMPONENT -->
        <DemoProfileForm />
      </a-col>
      <!--END EDIT PROFILE COLUMN -->
      <!--START EDIT PROFILE PICTURE -->
      <a-col :xs="24" :sm="24" :md="6" :lg="8" :xl="8">
        <!--START EDIT PROFILE ROW -->
        <DemoProfilePicture />
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
import DemoProfileForm from './DemoProfileForm'
import DemoProfilePicture from './DemoProfilePicture'
export default {
  name: 'EditProfile',
  components: {
    DemoProfileForm,
    DemoProfilePicture
  }
}
</script>
