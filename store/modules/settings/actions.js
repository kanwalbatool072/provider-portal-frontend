export default {
  handleLanguageSubmit({ commit }, payload) {
    commit('HANDLE_LANGUAGE_SUBMIT', payload)
  },

  handlelocationSubmit({ commit }, payload) {
    // commit('HANDLE_CONTACT_SUBMIT', payload)
  },
  handleLanguagesModal({ commit }, payload) {
    commit('HANDLE_LANGUAGES_MODAL', payload)
  },

  handleLocationModal({ commit }, payload) {
    commit('HANDLE_LOCATION_MODAL', payload)
  },
  handleAddCallModal({ commit }, payload) {
    commit('HANDLE_ADD_CALL_MODAL', payload)
  },
  handleShareReviewModal({ commit }, payload) {
    commit('HANDLE_SHARE_REVIEW_MODAL', payload)
  }
}
