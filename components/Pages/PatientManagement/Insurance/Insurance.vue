<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START EDIT PROFILE SECTION -->
  <div class="Insurance">
    <!--START EDIT PROFILE ROW -->
    <a-row :gutter="24" class="mt-3">
      <!--START EDIT PROFILE COLUMN -->
      <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="16">
        <!--COMPONENT -->
        <InsuranceProfileForm />
      </a-col>
      <!--END EDIT PROFILE COLUMN -->
      <!--START EDIT PROFILE PICTURE -->
      <a-col :xs="24" :sm="24" :md="6" :lg="6" :xl="8">
        <!--START EDIT PROFILE ROW -->
        <InsuranceProfilePicture />
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
import InsuranceProfileForm from './InsuranceProfileForm'
import InsuranceProfilePicture from './InsuranceProfilePicture'
export default {
  components: {
    InsuranceProfileForm,
    InsuranceProfilePicture
  }
}
</script>
