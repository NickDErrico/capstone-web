<template>
  <v-app id="app">
    <v-navigation-drawer v-if="doctor" clipped v-model="drawer" app dark class="blue darken-2">
      <v-list dense>
        <v-list-tile @click="$router.push('/patients')">
            <v-icon color="white">people</v-icon>
            <v-list-tile-title>Patients</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="$router.push('/labstable')">
          <v-icon color="white">local_hospital</v-icon>
          <v-list-tile-title>Labs</v-list-tile-title>
        </v-list-tile>
        <!-- <v-list-tile @click="$router.push('/charts')">
          <v-icon color="white">show_chart</v-icon>
          <v-list-tile-title>Charts</v-list-tile-title>
        </v-list-tile> -->
        <!-- <v-list-tile @click="$router.push('/appointments')">
          <v-icon color="white">perm_contact_calendar</v-icon>
          <v-list-tile-title>Appointments</v-list-tile-title>
        </v-list-tile> -->
        <v-list-tile @click="$router.push('/notes')">
          <v-icon color="white">assignment</v-icon>
          <v-list-tile-title>Notes</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="logout">
          <v-icon color="white">exit_to_app</v-icon>
          <v-list-tile-title>Sign out</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar clipped-left color="blue darken-3" dark fixed app>
      <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"><icon name="bars"></icon></v-toolbar-side-icon> -->
      <v-toolbar-title>Healthy Me</v-toolbar-title>
    </v-toolbar>
    <v-content fill-width class="router-view-content">
      <v-container fill-width class="router-view-container">
        <v-layout align-center justify-center>
            <router-view></router-view>
        </v-layout>
      </v-container fluid>
    </v-content>
    <v-footer color="grey" app>
      <!-- <v-spacer></v-spacer> -->
      <span class="black--text">&copy; Nick D'Errico 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  import { CHECK_DOCTOR, LOGOUT } from "./store/mutation-types";
  import { store } from './store/store';
  export default {
    data: () => ({
      drawer: true,
    }),
    computed:{
      doctor() {
        return this.$store.store.getters.doctor;
      }
    },
    created() {
      let token = localStorage.getItem("doctor");
      if(token){
        this.$store.store.dispatch(CHECK_DOCTOR, token)
      }
    },
    methods:{
      logout:function(){
        this.$store.store.dispatch(LOGOUT).then(()=>{
          this.$router.push("/")
        });
      }
    }
  }
</script>

<style lang="scss" scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.navigation-drawer__border {
  width:0 !important;
}

.navigation-drawer .list__tile__title {
    height: 3em;
    line-height: 3em;
    position: relative;
    text-align: center;
}

.toolbar__title {
  margin-left: 2vw;
}

i {
  padding: 0 !important;
  margin-left: .5em;
  margin-top: 0 !important;
  width: auto;
  height: 1.5em !important;
  max-width: 1.5em;
  max-height: 1.5em;
}

span {
  margin-left: 2vw;
}

.router-view-container {
  margin: 0 !important;
  padding: 0 !important;
  max-width: 2400px !important;
}

</style>
