<template>
  <section class="container">
    <div class="columns">
      <div class="column">
        <h3 class="display-2">Test Results</h3>
          <line-chart
            class="chart"
            v-bind:style="{ 'background': `linear-gradient(0deg, rgb(232, 125, 125, .8) ${testRes.low}%, rgb(232, 125, 125, .8) ${testRes.low}%, rgb(108, 209, 123, .8) ${testRes.low}%, rgb(108, 209, 123, .8) ${testRes.high}%, rgb(232, 125, 125, .8) ${testRes.high}%, rgb(232, 125, 125, .8) ${testRes.high}%)` }"
            v-for="testRes in testInfo"
            :key="testRes.id"
            :testRes="testRes">
          </line-chart>
      </div>
    </div>
  </section>
</template>

<script>
  import LineChart from './LineChart.js'

  export default {
    components: {
      LineChart,
    },
    data(){
      return {
        testInfo:[]
      }
    },

    created( ){
      let results = this.$store.store.state.testResults;
      console.log('results', results)
      let obj = {};
      results.filter(item => item.patient_id == this.$route.params.id).map(item => {
        console.log('item', item)
        if(!obj[item.name]) {
          obj[item.name] = {
            name: item.name,
            results:[item.results],
            low:item.low,
            high:item.high,
            dates:[item.date.slice(0,10)]
          }
        }else{
          obj[item.name].results.push(item.results);
          obj[item.name].dates.push(item.date.slice(0,10));
        }
      })

      for(let key in obj){
        this.testInfo.push(obj[key]);
      }
    }


  }
</script>

<style lang="scss" scoped>

  .chart {
    background: white;
    box-shadow: 0px 2px 15px rgba(25, 25, 25, 0.27);
    margin:  25px 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

</style>
