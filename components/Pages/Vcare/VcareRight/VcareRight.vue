<template>
  <div class="vcare-right">
    <a-card class="chat-header" :bordered="false">
      <a-row :gutter="16">
        <a-col :xs="24" :sm="16" :md="16" :lg="16" :xl="18">
          <a-row>
            <a-col :xs="24" :sm="5" :md="4" :lg="8" :xl="6">
              <div class="online-icon">
                <img src="/images/Vcarecalling/Rectangle 13.svg" />
                <img
                  src="/images/Vcarecalling/green online.svg"
                  class="green-online-img"
                />
              </div>
            </a-col>
            <a-col :xs="24" :sm="19" :md="20" :lg="16" :xl="18" class="pt-2">
              <h4 class="mb-0 font-600">Dr. David James</h4>
              <span class="fs-extra-small">Orthopedic Surgeon</span>
            </a-col>
          </a-row>
        </a-col>
        <a-col :xs="24" :sm="8" :md="8" :lg="8" :xl="6"
          ><a-row :gutter="16" class="pt-2 mt-1 pointer">
            <a-col :xs="24" :sm="8" :md="8" :lg="8" :xl="10" class="pl-3">
              <img src="/images/Appointment/search.svg" />
            </a-col>
            <a-col class="pointer" :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
              <img src="/images/Vcarecalling/setting.svg" />
            </a-col>
            <a-col class="pointer" :xs="24" :sm="8" :md="8" :lg="8" :xl="6">
              <img src="/images/Vcarecalling/dots.svg" />
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </a-card>
    <a-card class="vcare-chat" :bordered="false">
      <a-row>
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <p class="fs-small text-center today-text">Today</p>
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="19">
          <p class="text-left fs-small para px-2">
            Please lie down on the bed and move your knee slowly, I have to
            check
          </p>
          <p class="today-text fs-small">12:00 PM</p>
          <img src="/images/Vcarecalling/chat card.svg" />
          <img src="/images/Vcarecalling/chat card.svg" class="ml-2" />
          <p class="today-text fs-small mt-1">9:30 PM</p>
        </a-col>
      </a-row>
      <a-row>
        <a-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="24"
          :xl="24"
          align="end"
          class="pb-1"
        >
          <a-card class="blue-card">
            <span>Yes , doctor</span>
          </a-card>
        </a-col>
        <p class="today-text fs-small text-right">12:00 PM</p>
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
          <p class="text-left fs-small para px-2">
            There is nothing to worry about, Its just a normal pain after
            surgery.
          </p>
          <p class="today-text fs-small">12:00 PM</p>
        </a-col>
      </a-row>
      <a-row>
        <a-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="24"
          :xl="24"
          align="end"
          class="pb-1 mt-2"
        >
          <a-card class="blue-card medicine">
            <span>Do I need any medicine ?</span>
          </a-card>
        </a-col>
        <p class="today-text fs-small text-right">10:10 PM</p>
      </a-row>
      <a-row :gutter="8" class="mt-3">
        <a-col :xs="24" :sm="24" :md="18" :lg="18" :xl="20">
          <a-input placeholder="Type message here">
            <span slot="prefix">
              <img src="/images/Vcarecalling/pin.svg" />
            </span>
          </a-input>
        </a-col>
        <a-col :xs="24" :sm="24" :md="6" :lg="6" :xl="4">
          <img src="/images/Vcarecalling/Group 57009.svg" />
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
