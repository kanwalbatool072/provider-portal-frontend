<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--LANGUAGE SECTION-->

  <a-modal
    id="languages"
    v-model="islanguageVisible"
    :footer="null"
    width="30%"
  >
    <!--LANGUAGE FORM  -->
    <a-form-model
      ref="languageForm"
      :hide-required-mark="true"
      label-align="left"
      :model="languageForm"
    >
      <h3 class="mt-3 font-600">Select Language</h3>
      <a-row :gutter="24">
        <!--LANGUAGE LIST COLUMN -->
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <a-list :bordered="false" :data-source="getLanguages">
            <a-list-item slot="renderItem" slot-scope="item">
              <a-radio-group v-model="languageForm.language" @change="onChange">
                <a-radio :value="item"> {{ item }}</a-radio>
              </a-radio-group>
            </a-list-item>
          </a-list>
        </a-col>
        <!-- END LANGUAGE LIST COLUMN  -->
      </a-row>
    </a-form-model>
    <!-- END LANGUAGE FORM -->
    <a-row :gutter="24" class="px-2 mt-2">
      <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
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
      </a-col>
    </a-row>
  </a-modal>
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
    ...mapGetters('modules/settings', [
      'islanguagesModalVisible',
      'getLanguages'
    ]),

    islanguageVisible: {
      // getter
      get() {
        return this.islanguagesModalVisible
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
      'handleLanguagesModal'
    ]),
    onChange() {
      console.log(this.languageForm)
    },
    async handleSave() {
      await this.$refs.languageForm.validate(valid => {
        if (valid) {
          this.loading = true
          setTimeout(async () => {
            await this.handleLanguageSubmit(this.languageForm)
            this.loading = false
            // Show Notification Popup
            this.$notification.success({
              message: 'Language Selected!',
              description: 'Language Select Successfully.'
            })
            this.loading = false
            this.$refs.languageForm.resetFields()
            this.handleLanguagesModal('')
          }, 1000)
        }
      })
    },

    handleCancel(e) {
      this.handleLanguagesModal('')
    }
  },

  onChange(e) {
    // console.log('radio checked', e.target.value)
  }
}
</script>
<!-- ************************** STYLE  ************************* -->
<style lang="scss">
#languages {
  .add-btn {
    height: 47px;
  }
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
  .ant-modal-content {
    border-radius: 17px;
  }
}
</style>
