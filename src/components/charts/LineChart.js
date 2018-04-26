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
              label: this.testRes.name,
              backgroundColor: 'rgba(0, 0, 0, .7)',
              pointBackgroundColor: 'black',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              data: this.testRes.results
            }
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                fontColor: 'black',
                beginAtZero: true
              },
              gridLines: {
                fontColor: 'black',
                display: true
              }
            }],
            xAxes: [{
              ticks: {
                fontColor: 'black'
              },
              gridLines: {
              fontColor: 'black',
                display: true
              }
            }]
          },
          legend: {
            fontColor: 'black',
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450);
      this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)')
      this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
      this.gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
      this.renderChart(this.datacollection, this.options);
    },
  }

              // v-bind:style="{ 'background': `linear-gradient(180deg, rgba(245,3,3,1) 0%, rgba(245,3,3,1) 33%, rgba(67,253,29,1) 33%, rgba(67,253,29,1) 66%, rgba(245,3,3,1) 66%, rgba(245,3,3,1) 100%)` }"
