<template>
  <div id="app">
    <v-app>
      <NavigationDrawer app />
      <v-toolbar class="blue darken-3"></v-toolbar>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
    <Modal />
  </div>
</template>

<script>
import NavigationDrawer from '../src/components/home/NavigationDrawer.vue';
import Modal from '../src/components/home/Modal.vue';

  export default {
    components: {
      NavigationDrawer,
      Modal
    }
  }
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin: 30px;
}

.footer {
  background-color: #1598AF;
  color: white;
}

.navigation-drawer__border {
  width:0 !important;
}

</style>
