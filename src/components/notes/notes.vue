<template>
  <div id="notes">
    <v-container fluid>
       <v-layout row wrap>
         <v-flex xs12 sm6>
           <v-subheader>Patient</v-subheader>
         </v-flex>
         <v-flex xs12 sm6>
           <v-select
             :items="this.patients"
             :filter="customFilter"
             v-model="a1"
             item-text="last_name"
             label="Select"
             autocomplete
             clearable
             :key="this.patients.id"
           ></v-select>
         </v-flex>
       </v-layout>
     </v-container>
    <v-container grid-list-md>
      <v-layout row wrap >
        <v-flex xs12>
          <v-text-field box multi-line label="Notes"></v-text-field>
          <v-btn left dark color="blue darken-3">Submit</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { GET_PATIENTS } from '../../store/mutation-types';
export default {
  data () {
    return {
      a1: null,
    }
  },
  computed:{
    patients() {
      return this.$store.store.getters.patients;
    }
  },
  created() {
    this.$store.store.dispatch(GET_PATIENTS).catch(() => {
      this.$router.push("/notes");
    })
  },
  methods: {
    customFilter(patients, queryText, itemText) {
      const hasValue = val => val != null ? val : ''
      const text = hasValue(patients.last_name)
      const query = hasValue(queryText)
      return text.toString()
      .toLowerCase()
      .indexOf(query.toString().toLowerCase()) > -1
    }
  }
}

</script>

<style lang="scss" scoped>
  #notes {
    height: 100vh;
    width: 100vw;
  }

</style>
