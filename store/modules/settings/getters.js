export default {
  // Summary COLUMN

  islanguagesModalVisible(state) {
    return state.islanguagesModalVisible
  },
  isLocationModalVisible(state) {
    return state.isLocationModalVisible
  },
  isAddCallModalVisible(state) {
    return state.isAddCallModalVisible
  },
  isShareReviewModalVisible(state) {
    return state.isShareReviewModalVisible
  },
  getAddCall(state) {
    return state.addcall
  },
  getLanguages(state) {
    return state.languages
  },
  getLocationlist(state) {
    return state.locationlist
  },
  getTeleHealthAppointment(state) {
    return state.tele_health_appointment
  }
}
