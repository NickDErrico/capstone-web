<template>
  <div>
    <PatientSingle
    v-for="patient in patients"
    v-bind:patients="patients"
    v-bind:key="patients.id"></PatientSingle>
  </div>
</template>

<script>
import axios from 'axios';
import PatientSingle from './PatientSingle.vue';
  export default {

  }
</script>
