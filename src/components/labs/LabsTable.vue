<template>
  <v-card  class="elevation-7">
    <v-card-title class="blue darken-3 white--text">
      <b>Lab Results</b>
      <v-spacer></v-spacer>
      <v-text-field dark append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
    </v-card-title>
    <v-data-table v-if="testResults" :rows-per-page-items="[25,50]" must-sort :headers="headers"  :items="testResults" :search="search">
      <template slot="items" slot-scope="testResults">
          <td class="text-xs-left">{{ testResults.item.last_name }}, {{ testResults.item.first_name}}</td>
          <td class="text-xs-left">{{ testResults.item.age }}</td>
          <td class="text-xs-left">{{ testResults.item.sex }}</td>
          <td class="text-xs-left">{{ testResults.item.height }} inches</td>
          <td class="text-xs-left">{{ testResults.item.weight }} lbs.</td>
          <td class="text-xs-left">{{ testResults.item.date.substring(0, 10) }}</td>
          <td class="text-xs-left">{{ testResults.item.name }}</td>
          <td :class="testResults.item.results > testResults.item.low && testResults.item.results < testResults.item.high ? 'red': 'green' " class="text-xs-right">{{ testResults.item.results }}</td>
            <span class="icons">
              <v-tooltip bottom>
               <v-icon dark color="primary" slot="activator" @click="">local_hospital</v-icon>
               <span>Lab Results</span>
              </v-tooltip>
              <v-tooltip bottom>
               <v-icon dark color="primary" slot="activator" @click="">show_chart</v-icon>
               <span>Charts</span>
              </v-tooltip>
              <v-tooltip bottom>
               <v-icon dark color="primary" slot="activator" @click="">assignment</v-icon>
               <span>Notes</span>
              </v-tooltip>
              <v-tooltip bottom>
               <v-icon dark color="primary" slot="activator" @click="">edit</v-icon>
               <span>Edit</span>
              </v-tooltip>
            </span>
        </template>
    </v-data-table>
    <v-alert slot="no-results" :value="true" color="error" icon="warning">
      Your search for "{{ search }}" found no results.
    </v-alert>
  </v-card>
</template>

<script>
  import {GET_TEST_RESULTS} from '../../store/mutation-types';
  export default {
    data() {
      return {
        search: '',
        headers: [{
          text: "Name",
          sortable: true,
          value: 'last_name'
        },
        {
          text: 'Age',
          sortable: true,
          value: 'age'
        },
        {
          text: 'Sex',
          sortable: true,
          value: 'sex'
        },
        {
          text: 'Height',
          sortable: true,
          value: 'height'
        },
        {
          text: 'Weight',
          sortable: true,
          value: 'weight'
        },
        {
          text: 'Date',
          sortable: true,
          value: 'date'
        },
        {
          text: 'Test Name',
          sortable: true,
          value: 'name'
        },
        {
          text: 'Results',
          sortable: true,
          value: 'results'
        }],
      }
    },
    computed:{
      testResults() {
        console.log(this.$store.store.state.testResults)
        return this.$store.store.state.testResults;
      }
    },
    created() {
      this.$store.store.dispatch(GET_TEST_RESULTS).catch(() => {
        this.$router.push("/labstable");
      })
    },
  }
</script>

<style lang="scss">

  i {
    cursor: pointer !important;
    margin-top: 13px;
    padding-right: 20px;
  }

  .text-xs-right {
    cursor: default !important;
  }
  .green{
    background-color: inherit !important;
    color: green;
  }

  .red{
    background-color: inherit !important;
    color: red;
  }

</style>
