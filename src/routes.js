import Home from './components/home/Home.vue';
import Profile from './components/patients/Patients.vue';
import Notes from './components/notes/Notes.vue';
import Appointments from './components/appointments/Appointments.vue';
import Labs from './components/labs/Labs.vue';

export const routes = [
  {path: '/', component: Home},
  {path: '/patients', component: Profile},
  {path: '/notes', component: Notes},
  {path: '/appointments', component: Appointments},
  {path: '/labs', component: Labs}
]
