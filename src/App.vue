<template>
  <v-app id="app">
    <v-navigation-drawer clipped v-model="drawer" app dark class="blue darken-2">
      <v-list dense>
        <v-list-tile @click="$router.push('/')"  v-if="!loggedIn">
          <v-list-tile-title>Log in</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="$router.push('/profile')"  v-if="!loggedIn">
          <v-list-tile-title>Profile</v-list-tile-title>
        </v-list-tile>
        <!-- <v-list-tile @click="$router.push('/profile')"  v-if="loggedIn">
          <v-list-tile-title>Profile</v-list-tile-title>
        </v-list-tile> -->
        <v-list-tile @click="$router.push('/')"  v-if="loggedIn">
          <v-list-tile-title>Sign out</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue darken-3" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"><icon name="bars"></icon></v-toolbar-side-icon>
      <v-toolbar-title>Health App</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height fill-width>
        <v-layout justify-center align-center>
            <router-view ></router-view>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="white" app>
      <v-spacer></v-spacer>
      <span class="black--text">&copy; Nick D'Errico 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  import { CHECK_DOCTOR } from "./store/mutation-types";
  export default {
    data: () => ({
      drawer: false,
      loggedIn: true
    }),

    created(){
      let token = localStorage.getItem("doctor");
      if(token){
        this.$store.store.dispatch(CHECK_DOCTOR, token)
      }
    }
  }
</script>

<style lang="scss" >

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.footer {
  background-color: #1598AF;
  color: white;
}

.navigation-drawer__border {
  width:0 !important;
}

</style>
