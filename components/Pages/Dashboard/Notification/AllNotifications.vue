<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START VIEW ALL NOTIFICATION SECTION -->
  <div id="view-all-notifications" class="pt-3 pb-5 mb-5">
    <!--START VIEW ALL NOTIFICATION ROW -->
    <a-row>
      <a-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22">
        <h1 class="fs-extera-large font-600">Notifications</h1>
      </a-col>
    </a-row>
    <!--END VIEW ALL NOTIFICATION ROW -->

    <!--START  NOTIFICATION IMAGE  ROW -->
    <a-row class="mt-0">
      <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <a-row
          v-for="(data, index) in getNotifications"
          :key="index"
          class="mt-3 all-notifications-list"
          :gutter="16"
        >
          <a-card
            :class="active_index == index ? 'change-background' : ''"
            @click="chageClass(index)"
          >
            <a-col :xs="4" :sm="2" :md="2" :lg="2" :xl="2" class="pr-1">
              <img :src="data.notefication_img" />
            </a-col>
            <a-col
              :xs="16"
              :sm="20"
              :md="20"
              :lg="20"
              :xl="20"
              class="pt-1 pl-5"
            >
              <h3 class="font-500 fs-medium mb-0 mt-1">{{ data.title }}</h3>
              <p class="mb-0 fs-small">{{ data.date }}</p>
            </a-col>
            <a-col
              :xs="4"
              :sm="2"
              :md="2"
              :lg="2"
              :xl="2"
              align="end"
              class="pt-2"
            >
              <a-icon
                v-if="active_index == index"
                type="delete"
                theme="filled"
                class="delete-icon"
              />
            </a-col>
          </a-card>
        </a-row>
      </a-col>
    </a-row>
    <!--END NOTIFICATION IMAGE  ROW -->
  </div>
  <!--END VIEW ALL NOTIFICATION SECTION-->
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Notifications',
  data() {
    return {
      active_index: null
    }
  },
  computed: {
    ...mapGetters('modules/dashboard', ['getNotifications'])
  },
  methods: {
    chageClass(index) {
      this.active_index = index
    }
  }
}
</script>
<style lang="scss">
#view-all-notifications {
  .ant-list-split,
  .ant-list-item {
    border: none;
  }

  .all-notifications-list {
    width: 100%;

    .ant-card {
      border-radius: 10px;
      .ant-card-body {
        padding: 15px;
      }
    }
    .change-background {
      background-color: #423869;
      // background-color: rgba(72, 65, 117, 0.2);
      // color: white;
      opacity: 1;
      img {
        background-color: white;
        border-radius: 5px;
      }
      h3 {
        color: white;
      }
      p {
        color: #d0d0d0;
      }
    }
  }
  i.delete-icon.anticon.anticon-delete {
    font-size: 20px;
    color: white;
    padding-top: 20px;
    background-color: #c8c8c859;
    padding: 8px;
    cursor: pointer;
    border-radius: 5px;
  }
}
</style>
