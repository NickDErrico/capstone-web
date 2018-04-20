<template>
  <v-layout row id="patient-list">
   <v-flex xs8 sm8  offset-sm2>
     <v-card>
       <v-toolbar color="blue darken-1" dark>
         <v-toolbar-title>Patients</v-toolbar-title>
         <v-spacer></v-spacer>
           <v-flex sm4 md 6>
            <v-text-field
              name="input-2"
              placeholder="Search"
              class="input-group--focused"
            ></v-text-field>
          </v-flex>
          <v-btn icon @click="">
           <icon name="search"></icon>
         </v-btn>
       </v-toolbar>
       <v-list one-line>
         <template v-for="(item, index) in patients">
           <v-divider v-if="item.divider"  :key="index"></v-divider>
           <v-list-tile :key="item.id" @click="">
             <v-list-tile-content>
               <v-list-tile-title>{{item.first_name}}  {{item.last_name}}</v-list-tile-title>
               <v-list-tile-sub-title v-html="item.email"></v-list-tile-sub-title>
             </v-list-tile-content>
           </v-list-tile>
         </template>
       </v-list>
     </v-card>
   </v-flex>
 </v-layout>
</template>

<script>
import Icon from 'vue-awesome/components/Icon.vue';
  import {GET_PATIENTS} from "../../store/mutation-types"
  export default {
    data () {
      return {
        searchbar: false
      }
    },
    methods: {

    },
    computed:{
      patients() {
        return this.$store.store.getters.patients;
      }
    },
    created() {
      this.$store.store.dispatch(GET_PATIENTS).catch(() => {
        this.$router.push("/");
      })
      console.log(this.$store.store.state);
    },
    components: {
      Icon
    }
  }
</script>

<style lang="scss">
  #patient-list {
    margin-top: 45%;
  }
  
</style>
