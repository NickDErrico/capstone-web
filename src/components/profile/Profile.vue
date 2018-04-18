<template>
  <div class="profile-container">
    <h1>Doctor Profile</h1>
    <PatientList />
  </div>
</template>

<script>
import PatientList from './PatientList.vue';
  export default {
    components: {
      PatientList
    },
}
</script>
