export default {
  getBloodGroup() {
    const slotData = [
      {
        title: 'Blood Group',
        availableSlots: [
          {
            time: 'AB+',
            isAvailable: true
          },
          {
            time: 'AB-',
            isAvailable: false
          },
          {
            time: 'B+',
            isAvailable: false
          },
          {
            time: 'B-',
            isAvailable: false
          },
          {
            time: 'O+',
            isAvailable: false
          },
          {
            time: 'O-',
            isAvailable: false
          }
        ]
      }
    ]
    return slotData
  },
  teleHealthList() {
    const slotData = [
      {
        title: 'Join Call ',
        description: 'Meeting Link Available Soon',
        image: '/images/Specialist/voice.svg'
      },
      {
        title: 'Join Call ',
        description: 'Meeting Link Available Soon',
        image: '/images/Specialist/videocall.svg'
      },
      {
        title: 'Join Call ',
        description: 'Meeting Link Available Soon',
        image: '/images/Specialist/voice.svg'
      }
    ]
    return slotData
  },
  confirmationModal(state) {
    return state.confirmationModal
  },
  getConfirmationList() {
    const slotData = [
      {
        bookingId: 'Booking ID',
        idNumber: '#A806513'
      },
      {
        bookingId: 'Date',
        idNumber: '15 july,2021'
      },
      {
        bookingId: 'Time',
        idNumber: '2:00 PM'
      }
    ]
    return slotData
  },
  getOfficialConsent(state) {
    return state.getOfficialConsent
  },
  upcomingSchedule() {
    const slotData = [
      {
        title: 'Join Call ',
        description: 'Meeting Link Available Soon',
        image: '/images/Specialist/voice.svg'
      }
    ]
    return slotData
  }
}
