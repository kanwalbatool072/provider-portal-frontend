<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START NAVBAR SECTION -->
  <div id="NavBar">
    <nuxt-link to="/edit-profile">
      <div class="user-info">
        <img
          src="/images/Dashboard/john_wicks.svg"
          alt="John Wicks"
          class="user-photo"
        />
        <div class="user-name">
          <span>John Wicks</span>
        </div>
      </div>
    </nuxt-link>

    <a-menu theme="dark" mode="inline">
      <a-menu-item key="1" @click="$router.push('/dashboard')">
        <img src="/images/icons/Group 57031.svg" alt="" />
        <span class="nav-text">Dashboard</span>
      </a-menu-item>
      <a-menu-item key="2" @click="showModal">
        <img src="/images/icons/Group 57032.svg" alt="" />
        <span class="nav-text">Appointments</span>
      </a-menu-item>
      <a-menu-item key="3">
        <img
          src="/images/icons/Group 57033.svg"
          alt=""
          @click="$router.push('/registered-patients')"
        />
        <span class="nav-text">Patients</span>
      </a-menu-item>
      <a-menu-item key="4" @click="$router.push('/patient-management')">
        <img src="/images/icons/Group 57034.svg" alt="" />
        <span class="nav-text">Documents</span>
      </a-menu-item>
      <a-menu-item key="5" @click="$router.push('/payments')">
        <img src="/images/icons/Group 57035.svg" alt="" />
        <span class="nav-text">Payments</span>
      </a-menu-item>
      <a-menu-item key="6" @click="$router.push('/settings')">
        <img src="/images/icons/Group 57036.svg" alt="" />
        <span class="nav-text">Settings</span>
      </a-menu-item>
      <a-menu-item key="7" class="logout" @click="$router.push('/auth/login')">
        <img src="/images/icons/logoutk.svg" alt="" />
        <span class="nav-text">Log Out</span>
      </a-menu-item>
    </a-menu>
    <AppointmentModal />
  </div>
  <!--END NAV BAR SECTION -->
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
import AppointmentModal from '@/components/Pages/AppointmentModal/AppointmentModal'

export default {
  name: 'NavBar',
  components: { AppointmentModal },
  methods: {
    showModal() {
      this.$root.$emit('appointment-modal')
    }
  }
}
</script>

<style></style>
