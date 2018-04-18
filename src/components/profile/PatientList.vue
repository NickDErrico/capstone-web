<template>
  <div>
    <PatientSingle v-for="patient in patients"></PatientSingle>
  </div>
</template>

<script>
import axios from 'axios';
import PatientSingle from './PatientSingle.vue';
  export default {
    data() {
      return {
        patients: [],
        errors: []
      }
    },
      created() {
        axios.get(`http://localhost:8000/patients`)
          .then(response => {
            this.patients = respose.data
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
      components: {
        PatientSingle
    }
  }
</script>
