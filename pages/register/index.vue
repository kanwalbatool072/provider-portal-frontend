<!-- ************************* TEMPLATE ************************ -->
<template>
  <!--REGISTER SECTION -->
  <div id="auth">
    <a-row>
      <!--LOGIN IMAGES COLUMN-->
      <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <AuthLeftSide />
      </a-col>
      <!--END LOGIN IMAGES COLUMN-->

      <!--LOGIN FORM COLUMN-->
      <a-col
        :xs="24"
        :sm="24"
        :md="24"
        :lg="12"
        :xl="12"
        class="p-5 vcare-login"
      >
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
            <hr class="auth-line mx-2" />
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
import AuthLeftSide from '@/components/Pages/Auth/AuthLeftSide'
// IMPORT COMONENT
export default {
  components: {
    AuthLeftSide
  },
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
    ...mapGetters('modules/auth', ['setValidation'])
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
          this.$router.push('/auth/login')
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/pages/auth/auth.scss';
</style>
