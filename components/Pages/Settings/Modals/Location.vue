<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--LOCATION SECTION-->
  <div class="location">
    <a-modal
      id="location"
      v-model="isLocationVisible"
      :dialog-style="{ top: '20px' }"
      :footer="null"
      width="30%"
    >
      <!--LANGUAGE FORM  -->
      <a-form-model
        ref="locationForm"
        :hide-required-mark="true"
        label-align="left"
        :model="locationForm"
      >
        <h3 class="mt-3 font-600">Select Location</h3>
        <a-row :gutter="24">
          <!--LOCATION LIST COLUMN -->
          <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <a-list :bordered="false" :data-source="getLocationlist">
              <a-list-item slot="renderItem" slot-scope="item">
                <a-row v-if="item == 'USA'" class="other-country-row">
                  <a-col :span="2">
                    <a-radio-group
                      v-model="locationForm.location"
                      @change="onChange"
                    >
                      <a-radio :value="item"> </a-radio>
                    </a-radio-group>
                  </a-col>
                  <a-col :span="22">
                    <a-dropdown
                      :trigger="['click']"
                      overlay-class-name="custum-dropdown-style"
                    >
                      <a class="dropdown-a" @click="e => e.preventDefault()">
                        {{ item }}
                        <a-icon type="down" />
                      </a>
                      <a-menu slot="overlay">
                        <a-menu-item key="0"> Alabama </a-menu-item>
                        <a-menu-item key="1"> Alaska </a-menu-item>

                        <a-menu-item key="3"> Arizona </a-menu-item>
                      </a-menu>
                    </a-dropdown>
                  </a-col>
                </a-row>
                <a-radio-group
                  v-if="
                    item != 'Other Country' && item != 'USA' && item != 'Canada'
                  "
                  v-model="locationForm.location"
                  @change="onChange"
                >
                  <a-radio :value="item">
                    {{ item }}
                  </a-radio>
                </a-radio-group>
                <a-row v-if="item == 'Canada'" class="other-country-row">
                  <a-col :span="2">
                    <a-radio-group
                      v-model="locationForm.location"
                      @change="onChange"
                    >
                      <a-radio :value="item"> </a-radio>
                    </a-radio-group>
                  </a-col>
                  <a-col :span="22">
                    <a-dropdown
                      :trigger="['click']"
                      overlay-class-name="custum-dropdown-style"
                    >
                      <a class="dropdown-a" @click="e => e.preventDefault()">
                        {{ item }}
                        <a-icon type="down" />
                      </a>
                      <a-menu slot="overlay">
                        <a-menu-item key="0"> China </a-menu-item>
                        <a-menu-item key="1"> Japan </a-menu-item>

                        <a-menu-item key="3"> New Zealand </a-menu-item>
                        <a-menu-item key="4"> Turkey </a-menu-item>
                      </a-menu>
                    </a-dropdown>
                  </a-col>
                </a-row>
                <a-row v-if="item == 'Other Country'" class="other-country-row">
                  <a-col :span="2">
                    <a-radio-group
                      v-model="locationForm.location"
                      @change="onChange"
                    >
                      <a-radio :value="item"> </a-radio>
                    </a-radio-group>
                  </a-col>
                  <a-col :span="22">
                    <a-dropdown
                      :trigger="['click']"
                      overlay-class-name="custum-dropdown-style"
                    >
                      <a class="dropdown-a" @click="e => e.preventDefault()">
                        {{ item }}
                        <a-icon type="down" />
                      </a>
                      <a-menu slot="overlay">
                        <a-menu-item key="0"> China </a-menu-item>
                        <a-menu-item key="1"> Japan </a-menu-item>

                        <a-menu-item key="3"> New Zealand </a-menu-item>
                        <a-menu-item key="4"> Turkey </a-menu-item>
                      </a-menu>
                    </a-dropdown>
                  </a-col>
                </a-row>
              </a-list-item>
            </a-list>
          </a-col>
          <!-- END LOCATION LIST COLUMN -->
        </a-row>
      </a-form-model>
      <!-- END LANGUAGE FORM  -->

      <!-- MODAL FOOTER -->
      <a-row :gutter="24" class="px-2 mt-5">
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <a-button
            class="add-btn mt-5"
            html-type="submit"
            type="primary"
            :loading="loading"
            block
            @click="handleSave"
          >
            Select Location
          </a-button>
        </a-col>
      </a-row>
      <!-- END MODAL FOOTER -->
    </a-modal>
  </div>
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
// STORE
import { mapGetters, mapActions } from 'vuex'

export default {
  // LOAD COMPONENTS
  components: {},
  data() {
    return {
      btnpadding: false,
      loading: false,
      locationForm: { location: null }
    }
  },
  // Call Anything On runtime
  computed: {
    ...mapGetters('modules/settings', [
      'isLocationModalVisible',
      'getLocationlist'
    ]),

    isLocationVisible: {
      // getter
      get() {
        return this.isLocationModalVisible
      },
      // setter
      set(newValue) {
        this.handleCancel()
      }
    }
  },
  // Call actions method
  methods: {
    ...mapActions('modules/settings', [
      'handlelocationSubmit',
      'handleLocationModal'
    ]),

    async handleSave() {
      await this.$refs.locationForm.validate(valid => {
        if (valid) {
          this.loading = true
          setTimeout(async () => {
            await this.handlelocationSubmit(this.locationForm)
            this.loading = false
            // Show Notification Popup
            this.$notification.success({
              message: 'Location  Selected!',
              description: 'Location Select Successfully.'
            })
            this.loading = false
            this.$refs.locationForm.resetFields()
            this.handleLocationModal('')
          }, 1000)
        }
      })
    },
    addpandding() {
      console.log('helo there')
      this.btnpadding = !this.btnpadding
    },

    handleCancel(e) {
      this.handleLocationModal('')
    },
    onChange(e) {
      // console.log('radio checked', e.target.value)
    }
  }
}
</script>
<!-- ************************** STYLE  ************************* -->
<style lang="scss"></style>
