<template>
  <div id="home">
    <h1 id="title">Health App</h1>
    <h1>Helping you connect with your patients</h1>
    <Modal />
  </div>
</template>

<script>
import Modal from '../../components/Modal.vue';

export default {
  components: {
    Modal,
  }
}
</script>

<style lang="scss">
  #title {
    font-size: 4em;
  }
</style>
