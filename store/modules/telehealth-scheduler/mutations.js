export default {
  HANDLE_CONFIRMATION_MODAL(state, payload) {
    state.confirmationModal = !state.confirmationModal
  },
  HANDLE_OFFICIAL_CONSENT(state, payload) {
    state.getOfficialConsent = !state.getOfficialConsent
  }
}
