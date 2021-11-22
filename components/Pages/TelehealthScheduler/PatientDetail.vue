<template>
  <div>
    <a-card class="patient-detail-card px-4 pb-3">
      <!--START IMAGE ROW-->
      <a-row>
        <!--START IMAGE COLUMN-->
        <a-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="24"
          :xl="24"
          align="center"
          class="pt-3"
        >
          <img src="/images/Specialist/single_doctor.svg" style="width:100%" />
        </a-col>
        <!--START IMAGE COLUMN-->
      </a-row>
      <a-row :gutter="16" class=" mx-1">
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="pt-1">
          <a-row>
            <a-col :xs="12" :sm="12" :md="12" :lg="15" :xl="12">
              <h3 class="mb-0">John Adam</h3>
              <span class="sub-heading">24 yrs. M</span>
            </a-col>
            <a-col :xs="12" :sm="12" :md="12" :lg="9" :xl="12" align="right">
              <span class="sub-heading">11/25/1996</span></a-col
            >
          </a-row>
        </a-col>
        <a-col :xl="24" class="mt-2">
          <a-button block type="primary">
            <a-row>
              <a-col :xl="12" :lg="12" :md="12" :sm="12" :xs="12" align="left"
                >Insurance
              </a-col>
              <a-col :xl="12" :lg="12" :md="12" :sm="12" :xs="12" align="right">
                <span class="btn-sub-heading">Medicare</span>
              </a-col>
            </a-row>
          </a-button>
        </a-col>
        <a-col :xl="24">
          <a-button block type="primary" class="mt-2">
            <a-row>
              <a-col :xl="12" :lg="12" :md="12" :sm="12" :xs="12" align="left"
                >Balance
              </a-col>
              <a-col :xl="12" :lg="12" :md="12" :sm="12" :xs="12" align="right"
                ><span class="btn-sub-heading">$20</span>
              </a-col>
            </a-row>
          </a-button>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>
<script>
export default {}
</script>
