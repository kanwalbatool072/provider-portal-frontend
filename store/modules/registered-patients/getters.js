export default {
  // Get cardsData
  doctorList(state) {
    const cardsData = [
      {
        title: 'Adrita Kha',
        email: 'Adritakhaaa@mail.com',
        image: '/images/Specialist/doctor1.svg'
      },
      {
        title: 'Adrita Kha',
        email: 'Adritakhaaa@mail.com',
        image: '/images/Specialist/doctor2.svg'
      },
      {
        title: 'Adrita Kha',
        email: 'Adritakhaaa@mail.com',
        image: '/images/Specialist/doctor3.svg'
      },
      {
        title: 'Adrita Kha',
        email: 'Adritakhaaa@mail.com',
        image: '/images/Specialist/doctor1.svg'
      },
      {
        title: 'Adrita Kha',
        email: 'Adritakhaaa@mail.com',
        image: '/images/Specialist/doctor2.svg'
      },
      {
        title: 'Adrita Kha',
        email: 'Adritakhaaa@mail.com',
        image: '/images/Specialist/doctor4.svg'
      },
      {
        title: 'Adrita Kha',
        email: 'Adritakhaaa@mail.com',
        image: '/images/Specialist/doctor1.svg'
      },
      {
        title: 'Adrita Kha',
        email: 'Adritakhaaa@mail.com',
        image: '/images/Specialist/doctor2.svg'
      },
      {
        title: 'Adrita Kha',
        email: 'Adritakhaaa@mail.com',
        image: '/images/Specialist/doctor4.svg'
      }
    ]
    return cardsData
  },
  getAvailableSlotsModal(state) {
    return state.getAvailableSlots
  },
  getAvailableSlots() {
    const slotData = [
      {
        title: 'Morning Slot',
        availableSlots: [
          {
            time: '07:00 am',
            isAvailable: false
          },
          {
            time: '07:30 am',
            isAvailable: false
          },
          {
            time: '08:00 am',
            isAvailable: false
          },
          {
            time: '08:30 am',
            isAvailable: false
          },
          {
            time: '09:00 am',
            isAvailable: false
          },
          {
            time: '09:30 am',
            isAvailable: true
          },
          {
            time: '10:00 am',
            isAvailable: false
          },
          {
            time: '10:30 am',
            isAvailable: false
          }
        ]
      },
      {
        title: 'Afternoon Slot',
        availableSlots: [
          {
            time: '12:00 pm',
            isAvailable: true
          },
          {
            time: '12:30 pm',
            isAvailable: false
          },
          {
            time: '01:00 pm',
            isAvailable: true
          },
          {
            time: '01:30 pm',
            isAvailable: false
          },
          {
            time: '02:00 pm',
            isAvailable: false
          },
          {
            time: '02:30 pm',
            isAvailable: false
          },
          {
            time: '03:00 pm',
            isAvailable: false
          },
          {
            time: '03:30 pm',
            isAvailable: true
          }
        ]
      },
      {
        title: 'Evening Slot',
        availableSlots: [
          {
            time: '05:00 pm',
            isAvailable: true
          },
          {
            time: '05:30 pm',
            isAvailable: false
          },
          {
            time: '06:00 pm',
            isAvailable: false
          },
          {
            time: '06:30 pm',
            isAvailable: false
          },
          {
            time: '07:00 pm',
            isAvailable: false
          },
          {
            time: '07:30 pm',
            isAvailable: true
          },
          {
            time: '08:00 pm',
            isAvailable: false
          },
          {
            time: '09:30 pm',
            isAvailable: false
          },
          {
            time: '10:00 pm',
            isAvailable: false
          },
          {
            time: '10:30 pm',
            isAvailable: false
          },
          {
            time: '11:00 pm',
            isAvailable: false
          },
          {
            time: '10:30 pm',
            isAvailable: false
          }
        ]
      }
    ]
    return slotData
  },
  getDocumentList(state) {
    return state.documentList
  }
}
