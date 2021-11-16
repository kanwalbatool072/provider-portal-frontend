<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START EDIT-PROFILE SECTION -->
  <div id="edit-profile">
    <!--COMPONENT -->
    <EditProfile />
  </div>
  <!--END EDIT-PROFILE SECTION -->
</template>
<!-- ************************** SCRIPTS  ************************* -->
<script>
import EditProfile from '@/components/Pages/Dashboard/EditProfile/EditProfile'
export default {
  // COMPONENT
  components: {
    EditProfile
  }
}
</script>
<style lang="scss">
@import '~/assets/scss/pages/editprofile/editprofile.scss';
</style>
