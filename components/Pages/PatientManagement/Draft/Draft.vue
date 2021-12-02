<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START EDIT PROFILE SECTION -->
  <div class="insurance">
    <!--START EDIT PROFILE ROW -->
    <a-row :gutter="24" class="mt-3" type="flex">
      <!--START EDIT PROFILE COLUMN -->
      <a-col
        :xs="{ span: 24, order: 2 }"
        :sm="{ span: 24, order: 2 }"
        :md="{ span: 18, order: 0 }"
        :lg="{ span: 16, order: 0 }"
        :xl="{ span: 16, order: 0 }"
      >
        <!--COMPONENT -->
        <h3 class="mt-3 fs-large font-600 pb-2">Diagnosis Code</h3>
        <DiagnosisTable />
        <h3 class="mt-3 fs-large font-600 pb-2">CPT/HCPS Code</h3>
        <CptTable />
        <DraftCard />
      </a-col>
      <!--END EDIT PROFILE COLUMN -->
      <!--START EDIT PROFILE PICTURE -->
      <a-col
        :xs="{ span: 24, order: 1 }"
        :sm="{ span: 24, order: 1 }"
        :md="{ span: 6, order: 0 }"
        :lg="{ span: 8, order: 0 }"
        :xl="{ span: 8, order: 0 }"
      >
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
