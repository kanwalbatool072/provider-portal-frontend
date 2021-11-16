export default {
  HANDLE_LANGUAGE_SUBMIT(state, payload) {},
  HANDLE_LOCATION_SUBMIT(state, payload) {},
  HANDLE_LANGUAGES_MODAL(state, payload) {
    state.islanguagesModalVisible = !state.islanguagesModalVisible
  },
  HANDLE_LOCATION_MODAL(state, payload) {
    state.isLocationModalVisible = !state.isLocationModalVisible
  },

  HANDLE_ADD_CALL_MODAL(state, payload) {
    state.isAddCallModalVisible = !state.isAddCallModalVisible
  },

  HANDLE_SHARE_REVIEW_MODAL(state, payload) {
    state.isShareReviewModalVisible = !state.isShareReviewModalVisible
  }
}
