<template>
  <v-app id="app">
    <v-navigation-drawer clipped v-model="drawer" app dark class="blue darken-2">
      <v-list dense>
        <v-list-tile @click="$router.push('/')"  v-if="!loggedIn">
          <v-list-tile-title>Login</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="$router.push('/profile')"  v-if="loggedIn">
          <v-list-tile-title>Profile</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="$router.push('/')"  v-if="loggedIn">
          <v-list-tile-title>Signout</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue darken-3" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer">&#9776;</v-toolbar-side-icon>
      <v-toolbar-title>Health App</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height fill-width>
        <v-layout justify-center align-center>
            <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="white" app>
      <span class="black--text">&copy; Nick D'Errico 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      loggedIn: true
    }),
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
