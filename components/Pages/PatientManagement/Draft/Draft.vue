<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START EDIT PROFILE SECTION -->
  <div class="insurance">
    <!--START EDIT PROFILE ROW -->
    <a-row :gutter="24" class="mt-3">
      <!--START EDIT PROFILE COLUMN -->
      <a-col :xs="24" :sm="24" :md="18" :lg="16" :xl="16">
        <!--COMPONENT -->
        <h3 class="mt-3 fs-large font-600 pb-2">Diagnosis Code</h3>
        <DiagnosisTable />
        <h3 class="mt-3 fs-large font-600 pb-2">Insurance Payments</h3>
        <CptTable />
        <DraftCard />
      </a-col>
      <!--END EDIT PROFILE COLUMN -->
      <!--START EDIT PROFILE PICTURE -->
      <a-col :xs="24" :sm="24" :md="6" :lg="8" :xl="8">
        <!--START EDIT PROFILE ROW -->
        <DraftProfilePicture />
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
import DiagnosisTable from './DiagnosisTable'
import CptTable from './CptTable'
import DraftProfilePicture from './DraftProfilePicture'
import DraftCard from './DraftCard'
export default {
  components: {
    DiagnosisTable,
    CptTable,
    DraftProfilePicture,
    DraftCard
  }
}
</script>
