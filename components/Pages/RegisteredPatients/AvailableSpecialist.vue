<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START AVAILABE LIST SECTION -->
  <div class="available-list">
    <!--START AVAILABE LIST ROW -->
    <a-row :gutter="16">
      <!--START ALL AVAILABE SPECIALIST COLUMN  -->
      <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <h3 class="font-600 fs-extra-large">{{ title }}</h3>
      </a-col>
      <!--END ALL AVAILABE SPECIALIST COLUMN -->
      <!--START MENU ITEM COLUMN -->
      <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" align="end">
        <span class="pr-2 fs-small">Sort by :</span>
        <a-dropdown :trigger="['click']">
          <a
            class="ant-dropdown-link fs-normal font-500"
            @click="e => e.preventDefault()"
          >
            All <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item key="0">
              <a href="#">Ascending</a>
            </a-menu-item>
            <a-menu-item key="1">
              <a href="#">Descending</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-col>
      <!--END MENU ITEM COLUMN -->
    </a-row>
    <!--START AVAILABE LIST ROW -->
  </div>
  <!--END AVAILABE LIST SECTION -->
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style></style>
