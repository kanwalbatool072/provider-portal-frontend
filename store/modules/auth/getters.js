export default {
  setValidation(state) {
    const validation = {
      rules: {
        email: [
          { required: true, message: 'Please Provide Your Email!' },
          {
            type: 'email',
            message: 'Please Enter Valid E-mail!'
          }
        ],
        password: [{ required: true, message: 'Please Provide Your Password!' }]
      }
    }

    return validation
  }
}
