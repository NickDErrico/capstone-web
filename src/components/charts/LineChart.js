import {Line} from 'vue-chartjs';

export default {
    extends: Line,
    props:['testRes'],
    data () {
      return {
        datacollection: {
          labels: this.testRes.dates,
          datasets: [
            {
              backgroundColor: 'rgba(255, 255, 255, .7)',
              fontColor: 'black',
              pointBackgroundColor: 'black',
              borderWidth: 1,
              pointBorderColor: 'black',
              data: this.testRes.results
            }
          ]
        },
        options: {
          title: {
            text: this.testRes.name,
            display: true,
            lineHeight: 1,
            fontSize: 24,
            fontStyle: 'bold',
            fontColor: 'black'
          },
          scales: {
            yAxes: [{
              ticks: {
                fontColor: 'black',
                beginAtZero: true
              },
              gridLines: {
                color: 'rgba(0, 0, 0, .2)',
                fontColor: 'black',
                display: true
              }
            }],
            xAxes: [{
              ticks: {
                fontColor: 'black'
              },
              gridLines: {
                color: 'rgba(0, 0, 0, .2)',
                fontColor: 'black',
                display: true
              }
            }]
          },
          legend: {
            display: false
          },
          layout: {
            padding: {
              bottom: 10,
              left: 10,
              right: 10
            }
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      this.renderChart(this.datacollection, this.options);
    },
  }
