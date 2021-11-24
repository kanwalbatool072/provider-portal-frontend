<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START NOTIFICATIONS SECTION -->
  <div class="all-notifications mt-4">
    <!--START NOTIFICATIONS CARD -->
    <a-card class="notifications px-4 pt-3" :bordered="false">
      <!--START NOTIFICATIONS ROW -->
      <a-row class="notification-header">
        <a-col :span="22">
          <h1>Notifications</h1>
        </a-col>
        <a-col :span="2" align="end">
          <img src="/images/Dashboard/more_icon.svg" alt="" />
        </a-col>
      </a-row>
      <!--START NOTIFICATIONS ROW -->
      <div class="notification">
        <div class="scroll-testing">
          <a-list item-layout="horizontal" :data-source="getNotifications">
            <a-list-item
              slot="renderItem"
              slot-scope="item"
              class="notifications-list pt-0"
            >
              <a-card :bordered="false" class="pointer">
                <a-list-item-meta :description="item.date">
                  <span slot="title">
                    {{ item.title }}
                  </span>

                  <img slot="avatar" :src="item.notefication_img" />
                </a-list-item-meta>
              </a-card>
            </a-list-item>
          </a-list>
        </div>
      </div>
      <!--START VIEW ALL SECTION -->
      <div class="notefications-footer">
        <nuxt-link to="all-notifications">
          <a-button
            type="primary"
            class="px-5 mb-2 view-btn"
            @click="$router.push('/all-notifications')"
          >
            View All
          </a-button>
        </nuxt-link>
      </div>
      <!--END VIEW ALL SECTION -->
    </a-card>
    <!--END NOTIFICATIONS CARD -->
  </div>
  <!--END NOTIFICATIONS SECTION -->
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Notifications',
  data() {
    return {}
  },
  computed: {
    ...mapGetters('modules/dashboard', ['getNotifications'])
  }
}
</script>
