<template>
  <div id="home">
    <v-container fluid  id="banner">
      <v-layout fill-width row wrap>
        <v-flex xs12>
          <div class="title-container">
            <h1 class="display-4">Healthy Me</h1>
          </div>
          <div class="sub-title-container">
            <h1 class="display-1">Helping connect doctors to their patients and patients to their health.</h1>
          </div>
          <div class="mission-statement">
            <h2>Our mission at Healthy Me &#8482; is to make keeping up with your health as painless as possible.
            With our clean <br /> and simple design user will be able to traverse their health as easily as they will Healthy Me &#8482;.
            Health Me &#8482; <br /> using cutting edge data visualization tools so patients and doctor won't have to worry about
            translating cryptic <br />test results, Healthy Me &#8482; takes care of that. Healthy Me &#8482; will allow your doctors
            more time to connect with<br /> you on a more personal level making trips to the doctors office enjoyable. </h2>
          </div>
          <Modal />
        </v-flex>
      </v-layout>
    </v-container>
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

<style lang="scss" scoped>
  #home {
    align-content: center !important;
  }

  #banner {
    align-items: center;
    background-position: right center;
    padding-top: 25vh !important;
    color: black;
    z-index: 0 !important;
    display: block;
    position: relative;
    width: 100vw;
    height: 89.5vh;
  }

  #banner::after {
    content: "";
    background-image: url('http://medicalfuturist.com/wp-content/uploads/2016/12/Tech-in-Healthcare.jpg');
    opacity: .3;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    background-size: cover;
  }

  .title-container {
    z-index: 1 !important;
  }

  .sub-title-container {
    z-index: 1 !important;
  }

  .mission-statement {
    margin-top: 5vh !important;
    z-index: 1 !important;
  }

</style>
