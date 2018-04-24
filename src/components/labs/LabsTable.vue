<template>
  <v-card  class="elevation-7">
    <v-card-title class="blue darken-3 white--text">
      <b>Lab Results</b>
      <v-spacer></v-spacer>
      <v-text-field dark append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
    </v-card-title>
    <v-data-table must-sort :headers="headers" :items="testResults" :search="search">
      <template slot="items" slot-scope="testResults" v-for="(item, index) in testResults">
          <td class="text-xs-right"  :item-key="item.id">{{ item.id }}</td>
          <td class="text-xs-right" >{{ item.last_name }}, {{ item.first_name}}</td>
          <td class="text-xs-right" >{{ item.age }}</td>
          <td class="text-xs-right" >{{ item.sex }}</td>
          <td class="text-xs-right" >{{ item.height }} inches</td>
          <td class="text-xs-right" >{{ item.weight }} lbs.</td>
          <td class="text-xs-right" >{{ item.date.substring(0, 10) }}</td>
          <td class="text-xs-right" >{{ item.name }}</td>
          <td :class="item.results > item.low && item.results < item.high ? 'red': 'green' " class="text-xs-right">{{ item.results }}</td>
            <span class="right">
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
        return this.$store.store.getters.testResults;
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

  i{
    cursor: pointer !important;
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
