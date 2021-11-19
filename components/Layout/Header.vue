<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START LAYOUT HEADER -->
  <div id="LayoutHeader">
    <!--START INPUT SERACH  ROW -->
    <a-row :gutter="16" type="flex" align="middle">
      <!--START INPUT SERACH  COLUMN -->
      <a-col :xs="15" :sm="16" :md="12" :lg="15" :xl="16" class="search-bar">
        <a-input-search
          v-if="search_filed"
          class="ant-input"
          placeholder="Search "
        />
        <br /><br />
      </a-col>
      <!--END INPUT SERACH  COLUMN -->
      <!--START DATE PICKER COLUMN -->
      <a-col class="mb-4" :xs="2" :sm="2" :md="6" :lg="5" :xl="4"> </a-col>
      <!--END DATE PICKER COLUMN -->
      <!--START BADGES COLUMN -->
      <a-col
        v-if="notification_icon"
        :xs="3"
        :sm="3"
        :md="4"
        :lg="4"
        :xl="4"
        class="text-right mb-4"
      >
        <a-badge status="warning">
          <!-- <a href="#" class="head-example" /> -->
          <nuxt-link to="/all-notifications">
            <a-icon type="bell" theme="filled" />
          </nuxt-link>

          <!-- <img
            src="/images/icons/Group 56280.svg"
            alt=""
            style="
              background-color: #8a8585;
              padding: 7px;
              color: white;
              border-radius: 5px;
              cursor: pointer;
            "
            @click="$router.push('view-all-notifications')"
          /> -->
        </a-badge>
      </a-col>
      <a-col :md="2" :sm="3" :xs="3" class="mb-4 toggler-icon">
        <a-icon type="menu-unfold" @click="showNavDrawer" />
      </a-col>
      <!--END BADGES COLUMN -->
    </a-row>
    <!--END INPUT SERACH ROW -->
    <NavBarDrawer :visible="visibleDrawer" />
  </div>
  <!--END LAYOUT HEADER -->
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
import NavBarDrawer from './NavBarDrawer.vue'
export default {
  name: 'Header',
  components: {
    NavBarDrawer
  },
  data() {
    return {
      date_picker: false,
      route_name: '',
      search_filed: true,
      notification_icon: true,
      visibleDrawer: false
    }
  },
  mounted() {
    this.$root.$on('close-menu-drawer', this.closeDrawr)
    this.$root.$on('hide-notification-icon', this.hideNotificationIcon)
    this.$root.$on('hide-search-filed', this.hideSearchFiesld)
    this.$root.$on('show-date-picker', val => {
      this.date_picker = val
    })
  },
  created() {
    this.route_name = this.$nuxt.$route.path

    if (this.route_name == '/drawing') {
      this.search_filed = false
    }
  },
  methods: {
    closeDrawr() {
      this.visibleDrawer = false
    },
    showNavDrawer() {
      this.visibleDrawer = !this.visibleDrawer
    },
    hideSearchFiesld() {
      // console.log('i am from drawing')
      this.search_filed = !this.search_filed
    },
    hideNotificationIcon() {
      this.notification_icon = !this.notification_icon
    }
    // showDatePicker() {
    //   this.date_picker = true
    // },
  }
}
</script>

<style lang="scss">
#LayoutHeader {
  .ant-input {
    background-color: #f5f5f5;
    border: antiquewhite;
    border-radius: 10px;
  }
  .ant-calendar-picker {
    .ant-input {
      background-color: #423869;
      border-radius: 10px;
      color: white;
      margin-left: 15px;
    }
    .anticon {
      color: white;
    }
  }
  .ant-badge-status-warning {
    background-color: #faad14;
    position: absolute;
    right: 10px;
    top: 7px;
  }
}
</style>
