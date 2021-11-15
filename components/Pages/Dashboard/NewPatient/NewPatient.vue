<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START TOP-DOCTER SECTION-->
  <div class="new-patient">
    <!--START TOP-DOCTER CARD-->
    <a-card class="new-patient-list" :bordered="false">
      <!--START TOP-DOCTER ROW-->
      <a-row>
        <a-col :xl="22" :lg="22" :md="22" :sm="22" :xs="22">
          <h3>New Patient</h3>
        </a-col>
        <a-col :xl="2" :lg="2" :md="2" :sm="2" :xs="2">
          <img
            src="/images/Dashboard/more_icon.svg"
            alt=""
            style="cursor: pointer"
          />
        </a-col>
      </a-row>
      <!--END TOP-DOCTER ROW-->
      <!--START TOP-DOCTER LIST-->
      <a-list>
        <a-list item-layout="horizontal" :data-source="getNewPatient">
          <a-list-item
            slot="renderItem"
            slot-scope="item"
            class="top-doctors-list-items"
          >
            <a-card>
              <a-list-item-meta :description="item.description">
                <span slot="title">
                  {{ item.title }}
                </span>

                <img slot="avatar" :src="item.avatar" class="ml-2" />
              </a-list-item-meta>
              <a-tag
                :color="item.status == 'Absent' ? 'red' : 'cyan'"
                class="top-doctors-status mt-3"
              >
                {{ item.status }}
              </a-tag>
            </a-card>
          </a-list-item>
        </a-list>
      </a-list>
      <!--END TOP-DOCTER LIST-->
    </a-card>
    <!--START TOP-DOCTER CARD-->
  </div>
  <!--END TOP-DOCTER SECTION-->
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('modules/dashboard', ['getNewPatient'])
  }
}
</script>
<style></style>
