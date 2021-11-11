<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START LAYOUT SECTION -->
  <div class="dashboard-layout">
    <!--START LAYOUT COMPONENT -->
    <a-layout>
      <!--START LAYOUT SIDER -->
      <a-layout-sider width="115">
        <NavBar />
      </a-layout-sider>
      <!--END LAYOUT SIDER -->
      <a-layout :style="{ padding: '2rem' }">
        <!--START LAYOUT CONTENT -->
        <a-layout-content>
          <Header />
          <Nuxt />
        </a-layout-content>
        <!--END LAYOUT CONTENT -->
      </a-layout>
    </a-layout>
    <!--END LAYOUT COMPONENT -->
  </div>
  <!--END LAYOUT SECTION -->
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
// COMPONENT
import NavBar from '@/components/Layout/NavBar.vue'
import Header from '@/components/Layout/Header.vue'
export default {
  components: {
    [NavBar.name]: NavBar,
    Header
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/global/layouts/base';
.chat-icon {
  font-size: 30px;
  position: fixed;
  right: 33px;
  bottom: 10px;
  cursor: pointer;
}
</style>
