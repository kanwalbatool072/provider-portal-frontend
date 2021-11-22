<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START EDIT PROFILE SECTION -->
  <div id="demo-profile">
    <!--START EDIT PROFILE ROW -->
    <a-row :gutter="24" class="mt-3" type="flex">
      <!--START EDIT PROFILE COLUMN -->

      <a-col
        :xs="{ span: 24, order: 2 }"
        :sm="{ span: 24, order: 2 }"
        :md="{ span: 17, order: 0 }"
        :lg="{ span: 15, order: 0 }"
        :xl="{ span: 16, order: 0 }"
      >
        <!--COMPONENT -->
        <DemoProfileForm />
      </a-col>
      <!--END EDIT PROFILE COLUMN -->
      <!--START EDIT PROFILE PICTURE -->
      <a-col
        :xs="{ span: 24, order: 1 }"
        :sm="{ span: 24, order: 1 }"
        :md="{ span: 7, order: 0 }"
        :lg="{ span: 9, order: 0 }"
        :xl="{ span: 8, order: 0 }"
      >
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
