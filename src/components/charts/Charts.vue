<template>
  <section class="container">
    <div class="columns">
      <div class="column">
        <h3>Test Results</h3>
          <line-chart
            class="chart"
             v-bind:style="{ 'background': `linear-gradient(0deg, rgba(245,3,3,.9) 5%, rgba(245,3,3,.9) 33%, rgba(67,253,29,.9) 33%, rgba(67,253,29,.9) 66%, rgba(245,3,3,.9) 66%, rgba(245,3,3,.9) 100%)` }"
            v-for="testRes in testInfo"
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

    created(){
      let results = this.$store.store.state.testResults;
      let obj = {};

      results.map(item => {
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
// $gradient: linear-gradient(180deg, rgba(242,15,15,1) 0%, rgba(67,253,29,1) `${obj.low}%`, rgba(67,253,29,1) `${obj.high}%`, rgba(245,3,3,1) 100%);

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

  a {
    color: #42b983;
  }
</style>
