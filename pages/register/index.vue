<!-- ************************* TEMPLATE ************************ -->
<template>
  <!--REGISTER SECTION -->
  <div id="resigter">
    <a-row>
      <!--LOGIN IMAGES COLUMN-->
      <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="resigter-img">
        <div class="resigter-bg pl-5 pr-4 ml-2 mr-2">
          <p class="mb-4 mr-5 pr-5 text-justify fs-small">
            This system may only be accessed by authorized users, and each user
            can only view data associated with their specific account. By
            logging in, you are accepting the
            <a href="#" class="text-primary-light font-600 account-text">
              Terms and Conditions
            </a>
            this application.
          </p>
          <p class="mb-4">VCare version 1.0</p>
        </div>
      </a-col>
      <!--END LOGIN IMAGES COLUMN-->

      <!--LOGIN FORM COLUMN-->
      <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="p-5">
        <a-form-model
          ref="resigterForm"
          :model="resigterForm"
          :rules="setValidation.rules"
          :layout="formLayout"
          :hide-required-mark="true"
          label-align="left"
        >
          <a-row :gutter="16" class="p-5 mx-5 login-cridentials-box">
            <h2 class="mb-2 fs-extra-larg px-2 font-600 login-heading pt-5">
              Register
            </h2>
            <hr class="resigter-line mx-2" />
            <p class="px-2 fs-normal font-600 py-3 mb-1">
              Please enter your credentials
            </p>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <!--EMAIL COLUMN-->
              <a-form-model-item
                has-feedback
                prop="email"
                :colon="false"
                :wrapper-col="{
                  xl: 24,
                  lg: 24,
                  md: 24,
                  sm: 24,
                  xs: 24
                }"
              >
                <a-input v-model="resigterForm.email" placeholder="Email" />
              </a-form-model-item>
            </a-col>
            <!-- END EMAIL COLUMN-->

            <!--PASSWORD COLUMN-->
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <a-form-model-item
                prop="password"
                has-feedback
                :colon="false"
                :wrapper-col="{
                  xl: 24,
                  lg: 24,
                  md: 24,
                  sm: 24,
                  xs: 24
                }"
              >
                <a-input-password
                  v-model="resigterForm.password"
                  prop="password"
                  placeholder="Password"
                />
              </a-form-model-item>
            </a-col>
            <!--END PASSWORD COLUMN-->

            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="py-2">
              <a-checkbox> Receive news and updates from VCARE </a-checkbox>
            </a-col>
            <a-col
              :xs="24"
              :sm="24"
              :md="24"
              :lg="24"
              :xl="24"
              align="center"
              class="pt-4"
            >
              <!-- BUTTON COLUMN-->
              <a-button
                class="my-3"
                block
                :loading="loading"
                html-type="submit"
                @click="handleSubmit()"
              >
                <span v-if="loading == true"> Loading </span>
                <span v-else class="font-600">REGISTER</span>
              </a-button>
              <!-- END BUTTON COLUMN-->
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" align="center">
              Already have an account?
              <nuxt-link to="/auth/login"
                ><span class="font-600 account-text">Login</span></nuxt-link
              >
            </a-col>
          </a-row>
        </a-form-model>
      </a-col>
      <!--END LOGIN FORM COLUMN-->
    </a-row>
  </div>
  <!--END REGISTER SECTION-->
</template>
<!-- ************************** SCRIPTS  ************************* -->
<script>
// STORE
import { mapGetters } from 'vuex'
// IMPORT COMONENT
export default {
  layout: 'auth',
  data() {
    return {
      loading: false,
      resigterForm: {
        email: '',
        password: ''
      }
    }
  },
  // CALL ANYTHING ON RUN TIME
  computed: {
    ...mapGetters('auth', ['setValidation'])
  },
  // CALL ACTION METHOD
  methods: {
    async handleSubmit() {
      await this.$refs.resigterForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.disabled = true
          setTimeout(async () => {
            this.loading = false
            this.disabled = false
            // Show Notification Popup
            await this.$notification.success({
              message: 'Register Successfully!'
            })
          }, 1000)
        }
      })
    }
  }
}
</script>

<style lang="scss">
#resigter {
  .resigter-bg {
    position: absolute;
    bottom: 0;
    color: #aaa5bb;
  }
  .resigter-img {
    background-image: url('/images/1.png');
    background-size: cover;
    height: 100vh;
  }
  .resigter-line {
    width: 20px;
    border: 2px solid #04c6ff;
    border-radius: 5px;
    position: absolute;
    top: 135px;
  }
  .account-text {
    color: #04c6ff;
  }
  .ant-form-item {
    margin-bottom: 15px;
  }
  .ant-form-item-control {
    line-height: 50px;
    .ant-input {
      height: 40px;
    }
  }
  .ant-btn {
    height: 43px;
    background-color: #04c6ff;
    color: white;
    border: none;
  }
}
</style>
