export default {
  handleConfirmationModal({ commit }, payload) {
    commit('HANDLE_CONFIRMATION_MODAL', payload)
  },
  handleOfficialConsent({ commit }, payload) {
    commit('HANDLE_OFFICIAL_CONSENT', payload)
  }
}
