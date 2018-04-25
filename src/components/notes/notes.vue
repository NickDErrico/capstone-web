<template>
  <div id="notes">
    <v-container fluid>
       <v-layout row wrap>
         <v-flex xs12 sm7>
           <v-subheader class="blue darken-3 white--text">Patient</v-subheader>
         </v-flex>
         <v-flex xs12 sm7>
           <v-select
             v-if="patients"
             :items="patients"
             :filter="customFilter"
             v-model="a1"
             item-text="last_name"
             label="Select"
             autocomplete
             clearable
             :key="patients.id"
           ></v-select>
         </v-flex>
       </v-layout>
     </v-container>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12>
          <v-text-field box multi-line label="Notes"></v-text-field>
          <v-btn left dark color="blue darken-3">Submit</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <v-layout row>
      <v-flex xs12 sm12>
        <v-card>
          <v-toolbar color="blue darken-3" dark>
            <v-toolbar-title>Notes</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-list two-line>
            <template v-for="(item, index) in notes">
              <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
              <v-divider v-else-if="item.divider" :inset="item.inset" :key="item.patient_id"></v-divider>
              <v-list-tile avatar v-else :key="item.title" @click="">
                <v-list-tile-content>
                  <v-list-tile-title v-if="" v-html="item.patient_id ? item.patient_id : memo"></v-list-tile-title>
                  <b><v-list-tile-sub-title v-html="item.detail"></v-list-tile-sub-title></b>
                  <v-list-tile-sub-title v-html="item.date.slice(0, 10)"></v-list-tile-sub-title>
                </v-list-tile-content>
                  <span>
                    <v-tooltip bottom>
                     <v-icon dark color="primary" slot="activator" @click="">edit</v-icon>
                     <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                     <v-icon dark color="primary" slot="activator" @click="">delete</v-icon>
                     <span>Delete</span>
                    </v-tooltip>
                  </span>
              </v-list-tile>
              <v-divider></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { GET_NOTES, GET_PATIENTS, ADD_NOTE } from '../../store/mutation-types';
export default {
  data () {
    return {
      a1: null,
      memo: "Memo to self :",
      patientName: "",
      localStatePatients: []
    }
  },
  computed:{
    notes() {
      return this.$store.store.getters.notes;
    },
    patients() {
      return this.$store.store.getters.patients;
    },
  },
  created() {
    this.$store.store.dispatch(GET_NOTES).catch(() => {
      this.$router.push("/notes");
    })
  },
  getPatients() {
    this.$store.store.dispatch(GET_PATIENTS).catch(() => {
      patients.push(this.$store.store.patients);
      console.log('local patients', localStatePatients)
      this.$router.push("/notes");
    })
  },
  methods: {
    customFilter(patients, queryText, itemText) {
      const hasValue = val => val != null ? val : '';
      const text = hasValue(patients.last_name);
      const query = hasValue(queryText);
      return text.toString().toLowerCase().indexOf(query.toString().toLowerCase()) > -1;
    },
    getPatientName() {

    }
  }
}

</script>

<style lang="scss" scoped>
  #notes {
    height: 100vh;
    width: 100vw;
  }

  .list {
    padding-bottom: 0 !important;
  }

  .divider {
    max-height: 1px !important;
  }

</style>
