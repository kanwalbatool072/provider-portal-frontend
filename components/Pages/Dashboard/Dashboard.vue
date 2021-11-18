<template>
  <div class="dashbaord">
    <a-row :gutter="24">
      <a-col :xs="24" :sm="24" :md="13" :lg="15" :xl="16">
        <a-row>
          <TotalAppointment />
        </a-row>
        <a-row>
          <TeleHealthAppointment />
        </a-row>
        <a-row>
          <Notification />
        </a-row>
      </a-col>
      <a-col :xs="24" :sm="24" :md="11" :lg="9" :xl="8"
        ><a-row>
          <NewPatient />
        </a-row>
        <a-row>
          <Menu />
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import TotalAppointment from './TotalAppointment/TotalAppointment'
import NewPatient from './NewPatient/NewPatient'
import TeleHealthAppointment from './TeleHealthAppointment/TeleHealthAppointment'
import Notification from './Notification/Notification'
import Menu from './Menu/Menu'
export default {
  components: {
    TotalAppointment,
    NewPatient,
    Notification,
    TeleHealthAppointment,
    Menu
  }
}
</script>

<style></style>
