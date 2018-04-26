<template>
  <v-card  class="elevation-7">
    <v-card-title class="blue darken-3 white--text">
      <b>Lab Results</b>
      <v-spacer></v-spacer>
      <v-text-field dark append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
    </v-card-title>
    <v-data-table v-if="patients" :rows-per-page-items="[5, 10, 25, 50]" must-sort :headers="headers"  :items="patients" :search="search">
      <template slot="items" slot-scope="patients">
          <td class="text-xs-left">{{ patients.item.last_name }}, {{ patients.item.first_name}}</td>
          <td class="text-xs-left">{{ patients.item.age }}</td>
          <td class="text-xs-left">{{ patients.item.sex }}</td>
          <td class="text-xs-left">{{ patients.item.height }} inches</td>
          <td class="text-xs-left">{{ patients.item.weight }} lbs.</td>
            <span class="icons">
              <v-tooltip bottom>
               <v-icon dark color="primary" slot="activator" @click="$router.push(`/labstable/${patients.item.id}`)">local_hospital</v-icon>
               <span>Lab Results</span>
              </v-tooltip>
              <v-tooltip bottom>
               <v-icon dark color="primary" slot="activator" @click="$router.push(`/charts/${patients.item.id}`)">show_chart</v-icon>
               <span>Charts</span>
              </v-tooltip>
              <v-tooltip bottom>
               <v-icon dark color="primary" slot="activator" @click="$router.push(`/notes`)">assignment</v-icon>
               <span>Notes</span>
              </v-tooltip>
              <v-tooltip bottom>
               <v-icon dark color="primary" slot="activator" @click="">edit</v-icon>
               <span>Edit</span>
              </v-tooltip>
              <v-tooltip bottom>
               <v-icon dark color="primary" slot="activator" @click="">delete</v-icon>
               <span>Delete</span>
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
  import {GET_PATIENTS} from '../../store/mutation-types';
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
        }],
      }
    },
    computed:{
      patients() {
        return this.$store.store.state.patients;
      }
    },
    created() {
      this.$store.store.dispatch(GET_PATIENTS).catch(() => {
      })
    },
  }
</script>

<style lang="scss">

  i{
    cursor: pointer !important;
    margin-top: 13px;
    padding-right: 20px;
  }

  .text-xs-right {
    cursor: default !important;
  }
</style>
