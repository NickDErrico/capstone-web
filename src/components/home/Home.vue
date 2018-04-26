<template>
  <div id="home">
    <h1 class="display-4">Healthy Me</h1>
    <h1>Helping connect doctors to their patients and patients to their health.</h1>
    <Modal />
  </div>
</template>

<script>
import Modal from '../../components/modals/Modal.vue';

export default {
  components: {
    Modal,
  }
}
</script>

<style lang="scss" >

  #home {
    margin-top: 17.5%;
    margin-left: 24%;
  }
</style>
