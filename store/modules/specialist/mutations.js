export default {
  HANDLE_AVAILABLE_SLOTS(state, payload) {
    state.getAvailableSlots = !state.getAvailableSlots
  }
}
