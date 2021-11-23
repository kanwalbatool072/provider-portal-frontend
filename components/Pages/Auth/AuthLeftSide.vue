<template>
  <div>
    <a-row>
      <a-col :xl="24" class="auth-img">
        <div class="auth-bg pl-5 pr-4 ml-2 mr-2">
          <p class="provider-app-text">Provider App</p>
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
    </a-row>
  </div>
</template>
<script>
export default {
  name: 'AuthLeftSide'
}
</script>
