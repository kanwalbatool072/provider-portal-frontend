<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START MENU SECTION -->
  <div class="menu mt-4">
    <!--START MENU CARD  -->
    <a-card class="menu-card pb-5" :bordered="false">
      <!--START MENU ROW -->
      <a-row>
        <a-col :span="22">
          <h1>Menu</h1>
        </a-col>
        <a-col :span="2"> </a-col>
      </a-row>
      <!--START MENU ROW -->

      <!--START MENU ITEM ICON -->
      <div class="pb-5 mb-5">
        <a-list item-layout="horizontal" :data-source="getMenuData">
          <a-list-item slot="renderItem" slot-scope="item" class="menu-list">
            <a-list-item-meta
              :description="item.date"
              @click="showMenuData(item.title)"
            >
              <span slot="title">
                {{ item.title }}
              </span>

              <img slot="avatar" :src="item.menu_icon" />
            </a-list-item-meta>
          </a-list-item>
        </a-list>
      </div>
      <!--END MENU ITEM ICON -->
    </a-card>
    <!--START MENU CARD -->
  </div>
  <!--END MENU SECTION -->
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Menu',
  // data() {
  //   return {
  //     data,
  //   }
  // },
  computed: {
    ...mapGetters('modules/dashboard', ['getMenuData'])
  },
  methods: {
    showMenuData(title) {
      if (title == 'Edit profile') {
        this.$router.push('/edit-profile')
      }
      if (title == 'Call Recording') {
        this.$router.push('/recordings')
      }
      if (title == 'Timestamp') {
        this.$router.push('/time-stamp')
      }

      if (title == 'Prescription/Lab Report') {
        this.$router.push('/e-prescriptions')
      }
      if (title == 'Education Center') {
        this.$router.push('/patient-education')
      }
    }
  }
}
</script>
