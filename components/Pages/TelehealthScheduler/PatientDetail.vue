<template>
  <div>
    <a-card>
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
          <img src="/images/Specialist/single_doctor.svg" />
        </a-col>
        <!--START IMAGE COLUMN-->
      </a-row>
      <a-row :gutter="16" class="px-4 mx-1">
        <a-col :xs="24" :sm="24" :md="18" :lg="16" :xl="16" class="pt-1">
          <h3 class="font-500 pt-3 mb-0 fs-extra-large">Dr. David James</h3>
          <p class="fs-small font-400">Orithopedic Surgeon</p>
        </a-col>
        <!--END  DR DAVID JAMES COLUMN-->

        <!--START RATING COLUMN-->
        <a-col
          :xs="24"
          :sm="24"
          :md="18"
          :lg="8"
          :xl="8"
          align="center"
          class="pt-3"
        >
          <a-card class="rating"
            ><span class="fs-small">Rating</span>
            <p class="mb-0 fs-small">
              <a-rate v-model="value" :count="1" /> 5.0
            </p></a-card
          >
        </a-col>
        <!--END RATING COLUMN-->

        <!--START WORKING CARD COLUMN-->
        <a-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="24"
          :xl="24"
          class="pt-3 pb-3 working"
        >
          <a-card title="Working" size="small">
            <a slot="extra" href="#" class="fs-small text-white"
              >Mon - Fri 8 AM - 8 PM</a
            >
          </a-card>
          <p class="text-justify fs-small pt-3 mb-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna ali
          </p>
        </a-col>
        <!--END WORKING CARD COLUMN-->
      </a-row>
      <!--END  DR DAVID JAMES ROW-->

      <!--START SCHEDULE DATE SLOTS ROW-->

      <!--END SCHEDULER DATE ROW-->
    </a-card>
  </div>
</template>
<script>
export default {}
</script>
