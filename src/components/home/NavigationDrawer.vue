<template>
  <v-navigation-drawer id="nav-drawer" height="100vh" fixed  class="blue darken-1" dark>
    <v-toolbar id="toolbar" class="blue darken-3 text-white" dark>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title text-lg-center text-md-center">
            <span>Health App</span>
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-list dense class="pt-0">
      <v-list-tile @click="$router.push('/')">
        <v-list-tile-content>
          <v-list-tile-title class="text-lg-center text-md-center">Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>
      <v-list-tile @click="$router.push('/profile')">
        <v-list-tile-content>
          <v-list-tile-title class="text-lg-center text-md-center">Profile</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>
      <v-list-tile @click="$emit('dialog')">
        <v-list-tile-content>
          <v-list-tile-title class="text-lg-center text-md-center">Login/Register</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Home', displayLoggedOut: true },
          { title: 'Login/Register', displayLoggedOut: true },
          { title: 'Patients', displayLoggedOut: false }
        ],
        right: null,
      }
    },
  }
</script>
