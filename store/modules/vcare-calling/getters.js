export default {
  getStartAppointment() {
    const slotData = [
      {
        description: 'Appointment starts at 8:01 PM',
        image: '/images/Appointment/check-mark.svg'
      },
      {
        description: 'Prescribed medicine at 8:25 PM',
        image: '/images/Appointment/check-mark.svg'
      },
      {
        description: 'Recommend lab test at 8:30 PM',
        image: '/images/Vcarecalling/check-mark.svg'
      },
      {
        description: 'Doctor consult advice at 8:35 PM',
        image: '/images/Vcarecalling/check-mark.svg'
      }
    ]
    return slotData
  },
  meetingList() {
    const slotData = [
      {
        image: '/images/Appointment/vcare_group_3.svg',
        title: 'Antonia Thomas',
        description: 'Patient',
        dotimage: '/images/Vcarecalling/Ellipse 1350.svg'
      },
      {
        image: '/images/Appointment/vcare_group_1.svg',
        title: 'Sydney Sweeney',
        description: 'Patient',
        dotimage: '/images/Vcarecalling/Ellipse 1350.svg'
      },
      {
        image: '/images/Appointment/vcare_group_2.svg',
        dotimage: '/images/Vcarecalling/Ellipse 1350.svg',
        title: 'Troy Hunt',
        description: 'Patient'
      },
      {
        image: '/images/Appointment/vcare_group_1.svg',
        title: 'Antonia Thomas',
        description: 'Patient',
        dotimage: '/images/Vcarecalling/Ellipse 1350.svg'
      },
      {
        image: '/images/Appointment/vcare_group_4.svg',
        title: 'Antonia Thomas',
        description: 'Patient',
        dotimage: '/images/Vcarecalling/Ellipse 1350.svg'
      }
    ]
    return slotData
  }
}
