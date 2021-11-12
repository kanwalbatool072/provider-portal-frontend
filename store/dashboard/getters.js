export default {
  apptList(state) {
    const cardsData = [
      {
        title: 'Total Appointment Recieved',
        subTitle: '400'
      },
      {
        title: 'Total Patient Registered',
        subTitle: '30k'
      }
    ]
    return cardsData
  },
  getNewPatient(state) {
    return state.newPatient
  },
  chartOptions(state) {
    const areaOptions = {
      chart: {
        height: 350,
        type: 'bar'
      },
      plotOptions: {
        bar: {
          borderRadius: 2,
          dataLabels: {
            position: 'top' // top, center, bottom
          }
        }
      },
      colors: ['#423869'],
      dataLabels: {
        enabled: true,
        formatter(val) {
          return val
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ['#423869']
        }
      },

      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ],
        position: 'bottom',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        },

        tooltip: {
          enabled: true
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          formatter(val) {
            return val
          }
        }
      }
    }
    return areaOptions
  },

  // Get Area Chart Options
  getSeries(state) {
    const areaChart = [
      {
        name: 'series-1',
        data: [30, 20, 20, 15, 30, 20, 30, 10]
      }
    ]
    return areaChart
  },
  getNotifications(state) {
    return state.notifications
  },
  getMenuData(state) {
    return state.menuData
  },
  getTeleHealthAppointment(state) {
    return state.teleHealthAppointment
  }
}
