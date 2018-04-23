<template>
  <v-layout row id="result-list">
   <v-flex xs9 sm9 md9 lg9>
     <v-card>
       <v-toolbar color="blue darken-3" dark>
         <v-toolbar-title>Tests</v-toolbar-title>
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
         <template v-for="(item, index) in testResults">
           <v-divider v-if="item.divider"  :key="index"></v-divider>
           <v-list-tile :key="item.id" @click="">
             <v-list-tile-content>
               <v-list-tile-title id="test-name">
                 {{ item.first_name }}
                 {{ item.last_name }}
                 {{ item.age }}
                 {{ item.sex }}
                 {{ item.height }}inches
                 {{ item.weight }}lbs
                 {{ item.date }}
                 {{ item.name }}
                 {{ item.results }}
                 <span>
                   <icon name="flask" onclick=""></icon>
                   <icon name="chart-line" onclick=""></icon>
                   <icon name="notes-medical" onclick=""></icon>
                   <icon name="edit" onclick=""></icon>
                 </span>
               </v-list-tile-title>
               <!-- <v-list-tile-sub-title v-html="item.email"></v-list-tile-sub-title> -->
               <!-- <v-divider></v-divider> -->
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
  import {GET_TEST_RESULTS} from "../../store/mutation-types"
  export default {
    data () {
      return {
        searchbar: false
      }
    },
    methods: {

    },
    computed:{
      testResults() {
        return this.$store.store.getters.testResults;
      }
    },
    created() {
      this.$store.store.dispatch(GET_TEST_RESULTS).catch(() => {
        this.$router.push("/labs");
      })
    },
    components: {
      Icon
    }
  }
</script>

<style lang="scss">
  #test-list {
    position: relative;
  }

</style>
