<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--LANGUAGE SECTION-->
  <div>
    <a-modal
      id="add-call"
      v-model="isAddCallVisible"
      :footer="null"
      width="35%"
    >
      <!--LANGUAGE FORM  -->
      <a-form-model
        ref="languageForm"
        :hide-required-mark="true"
        label-align="left"
        :model="languageForm"
      >
        <a-row :gutter="24" class="pt-4">
          <!--LANGUAGE LIST COLUMN -->
          <a-col :xs="24" :sm="24" :md="24" :lg="15" :xl="18">
            <h3 class="mt-3 px-4 font-600 pt-2">Add to Call</h3>
          </a-col>
          <a-col class="mt-3" :xs="24" :sm="24" :md="24" :lg="3" :xl="6">
            <a-button
              class="add-btn"
              html-type="submit"
              type="primary"
              :loading="loading"
              @click="handleSave"
            >
              Done
            </a-button>
          </a-col>
        </a-row>
        <a-row>
          <a-col class="mt-3 px-3" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <a-input
              ref="userNameInput"
              v-model="userName"
              placeholder="Patient"
            >
              <span slot="prefix">
                <img src="/images/Appointment/search.svg" />
              </span>
              <a-tooltip slot="suffix" title="Extra information">
                <img src="/images/icons/filter.svg" />
              </a-tooltip>
            </a-input>
          </a-col>
        </a-row>
        <a-row :gutter="24">
          <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <a-list item-layout="horizontal" :data-source="getAddCall">
              <a-list-item
                slot="renderItem"
                slot-scope="item"
                class="top-doctors-list-items pb-0"
              >
                <a-list-item-meta :description="item.description">
                  <span slot="title">
                    {{ item.title }}
                  </span>

                  <img slot="avatar" :src="item.avatar" class="ml-2" />
                </a-list-item-meta>

                <a-checkbox class="px-4"> </a-checkbox>
              </a-list-item>
            </a-list>
          </a-col>
        </a-row>
        <!-- END LANGUAGE LIST COLUMN  -->
      </a-form-model>
      <!-- END LANGUAGE FORM -->
      <a-row :gutter="24" class="px-2 mt-2">
        <!-- <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <a-button
            class="add-btn"
            html-type="submit"
            type="primary"
            :loading="loading"
            block
            @click="handleSave"
          >
            Select Language
          </a-button>
        </a-col> -->
      </a-row>
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
      loading: false,
      languageForm: { language: [] }
    }
  },
  // Call Anything On runtime
  computed: {
    ...mapGetters('modules/settings', ['isAddCallModalVisible', 'getAddCall']),

    isAddCallVisible: {
      // getter
      get() {
        return this.isAddCallModalVisible
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
      'handleLanguageSubmit',
      'handleAddCallModal'
    ]),

    async handleSave() {
      await this.$refs.languageForm.validate(valid => {
        if (valid) {
          this.loading = true
          setTimeout(async () => {
            await this.handleLanguageSubmit(this.languageForm)
            this.loading = false
            // Show Notification Popup
            this.$notification.success({
              message: 'Call Added!',
              description: 'Call Added Successfully.'
            })
            this.loading = false
            this.$refs.languageForm.resetFields()
            this.handleAddCallModal('')
          }, 1000)
        }
      })
    },

    handleCancel(e) {
      this.handleAddCallModal('')
    }
  }
}
</script>
<!-- ************************** STYLE  ************************* -->
<style lang="scss">
#add-call {
  .ant-input {
    background-color: #f5f5f5;
    border: antiquewhite;
    border-radius: 12px;
    height: 42px;

    padding-left: 48px;
  }

  .add-btn {
    height: 35px;
    border-radius: 20px;
  }

  .anticon-search {
    margin-right: 310px;
    font-size: 26px;
    color: rgb(124, 118, 118);
  }
  .ant-list-item-meta-content {
    margin-top: 16px;
  }
  .ant-checkbox-inner {
    border-radius: 28px;
  }
  .ant-list-split .ant-list-item {
    border-bottom: none;
  }
  .ant-modal-close {
    padding: 0px;
    .ant-modal-close-icon {
      padding: 4px;
      background-color: #423869;
      border-radius: 17px;
      color: white;
      font-size: 12px;
      position: absolute;
      top: 12px;
      right: 12px;
    }
  }
}
</style>
