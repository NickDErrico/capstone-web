<template>
  <div id="notes">
    <EditNoteForm />
    <v-container grid-list-md>
      <v-layout row wrap>
      </v-layout>
    </v-container>
    <v-layout row>
      <v-flex xs12 sm12>
        <v-card>
          <v-toolbar color="blue darken-3" dark>
            <v-toolbar-title>Notes</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-list two-line v-if="notes">
            <template v-for="(item, index) in notes">
              <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
              <v-divider v-else-if="item.divider" :inset="item.inset" :key="item.patient_id"></v-divider>
              <v-list-tile avatar v-else :key="item.title">
                <v-list-tile-content>
                  <v-list-tile-title v-html="item.patient ? item.patient.last_name + ', ' + item.patient.first_name : memo"></v-list-tile-title>
                  <b><v-list-tile-sub-title v-html="item.detail"></v-list-tile-sub-title></b>
                  <v-list-tile-sub-title v-html="item.date.slice(0, 10)"></v-list-tile-sub-title>
                </v-list-tile-content>
                  <span>
                    <v-tooltip bottom>
                     <v-icon dark color="primary" slot="activator" @click="updateNote">edit</v-icon>
                     <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                     <v-icon dark color="primary" slot="activator" @click="removeNote(item['id'])">delete</v-icon>
                     <span>Delete</span>
                    </v-tooltip>
                  </span>
              </v-list-tile>
              <v-divider></v-divider>
            </template>
          </v-list>
          <!-- <p v-else> You have no notes </p> -->
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import {GET_NOTES, REMOVE_NOTE, UPDATE_NOTE} from '../../store/mutation-types';
import EditNoteForm from '../modals/EditNoteForm.vue';
export default {
  components: {
    EditNoteForm
  },
  data () {
    return {
      props: ['patient'],
      a1: null,
      memo: "Memo to self :",
      dailog: false
    }
  },
  computed:{
    notes() {
      let notesList = this.$store.store.getters.notes;
      let updatedNotes = notesList ? notesList.map(note => {
        note.patient = this.$store.store.getters.getPatientName(note.patient_id)
        return note
      }) : false
      return updatedNotes;
    },
  },
  created() {
    this.$store.store.dispatch(GET_NOTES);
  },
  methods: {
    customFilter(patients, queryText, itemText) {
      const hasValue = val => val != null ? val : '';
      const text = hasValue(patients.last_name);
      const query = hasValue(queryText);
      return text.toString().toLowerCase().indexOf(query.toString().toLowerCase()) > -1;
    },
    removeNote(id) {
      if(id) {
      let currNote = this.$store.store.state.notes.filter(item => item.id === id)[0]
        this.$store.store.dispatch(REMOVE_NOTE, currNote)
      }
    },
    updateNote() {

    }
  }
}

</script>

<style lang="scss" scoped>
  #notes {
    margin-top: 5vh;
    height: 100vh;
    width: 70vw;
  }

  .list {
    padding-bottom: 0 !important;
  }

  .divider {
    max-height: 1px !important;
  }

  .input-group--text-field-box {
    padding-top: 0 !important;
  }

  i{
    cursor: pointer !important;
    margin-top: 13px;
    padding-right: 20px;
  }

  .text-xs-right {
    cursor: default !important;
  }

</style>
