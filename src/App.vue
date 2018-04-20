<template>
  <v-app id="app">
    <v-navigation-drawer v-if="doctor" clipped v-model="drawer" app dark class="blue darken-2">
      <v-list dense>
        <v-list-tile @click="$router.push('/patients')">
          <icon name="users"></icon>
          <v-list-tile-title>Patients</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="$router.push('/labs')">
          <icon name="flask"></icon>
          <v-list-tile-title>Labs</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="$router.push('/appointments')">
          <icon name="calendar-check"></icon>
          <v-list-tile-title>Appointments</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="$router.push('/notes')">
          <icon name="notes-medical"></icon>
          <v-list-tile-title>Notes</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="logout">
          <icon name="sign-out-alt"></icon>
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
          <router-view></router-view>
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
  import { CHECK_DOCTOR, LOGOUT } from "./store/mutation-types";
  import { store } from './store/store';
  export default {
    data: () => ({
      drawer: false,
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

.list--dense .list__tile {
    font-size: 20px;
}

.navigation-drawer .list__tile__title {
    height: 3em;
    line-height: 3em;
    position: relative;
    text-align: center;
}

.fa-icon {
  margin-left: 1em;
  width: auto;
  height: 1.5em;
  max-width: 1.5em;
  max-height: 1.5em;
}
</style>
