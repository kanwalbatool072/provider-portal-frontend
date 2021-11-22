<template>
  <div>
    <a-drawer
      :placement="placement"
      :closable="false"
      :visible="visible"
      class="menu-drawer"
    >
      <div>
        <a-row>
          <a-col
            :xl="24"
            :lg="24"
            :md="24"
            :sm="24"
            :xs="24"
            align="end"
            class="clode-icon"
          >
            <a-icon type="close" @click="onClose" />
          </a-col>
        </a-row>
        <div class="user-info" @click="handlePageLinks('edit-profile')">
          <img
            src="/images/Dashboard/john_wicks.svg"
            alt="John Wicks"
            class="user-photo ml-5 pl-5"
          />
          <div class="user-name">
            <p class="mb-0 mt-1 text-white ml-5 pl-5">John Wicks</p>
            <span class="john-text ml-5 pl-5 text-white">Provider</span>
          </div>
        </div>

        <a-menu theme="dark" mode="inline">
          <a-menu-item key="1" @click="handlePageLinks('dashboard')">
            <img src="/images/icons/Group 57031.svg" alt="" />
            <span class="nav-text">Dashboard</span>
          </a-menu-item>
          <a-menu-item key="2" @click="showModal">
            <img src="/images/icons/Group 57032.svg" alt="" />
            <span class="nav-text">Appointments</span>
          </a-menu-item>
          <a-menu-item key="3" @click="handlePageLinks('registered-patients')">
            <img src="/images/icons/Group 57033.svg" alt="" />
            <span class="nav-text">Patients</span>
          </a-menu-item>
          <a-menu-item key="4" @click="handlePageLinks('patient-management')">
            <img src="/images/icons/Group 57034.svg" alt="" />
            <span class="nav-text">Documents</span>
          </a-menu-item>

          <a-menu-item key="6" @click="handlePageLinks('settings')">
            <img src="/images/icons/Group 57036.svg" alt="" />
            <span class="nav-text">Settings</span>
          </a-menu-item>
          <a-menu-item
            key="7"
            class="logout"
            @click="handlePageLinks('auth/login')"
          >
            <img src="/images/icons/logoutk.svg" alt="" />
            <span class="nav-text">Log Out</span>
          </a-menu-item>
        </a-menu>
        <!-- <AppointmentModal /> -->
      </div>
    </a-drawer>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      placement: 'left'
    }
  },
  methods: {
    ...mapActions('modules/specialist', ['handleAvailableSlots']),
    handlePageLinks(val) {
      this.$root.$emit('close-menu-drawer')
      this.$router.push(`/${val}`)
      this.handleAvailableSlots(false)
    },
    showModal() {
      this.$root.$emit('appointment-modal')
    },
    onClose() {
      this.$root.$emit('close-menu-drawer')
    },
    onChange(e) {
      this.placement = e.target.value
    }
  }
}
</script>
<style lang="scss">
@import '~/assets/scss/pages/menu-drawer/menu-drawer.scss';
</style>
