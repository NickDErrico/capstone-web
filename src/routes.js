import Home from './components/home/Home.vue';
import Profile from './components/patients/Patients.vue';
import Notes from './components/notes/Notes.vue';
import Appointments from './components/appointments/Appointments.vue';
import LabsTable from './components/labs/LabsTable.vue';
import Charts from './components/charts/Charts.vue';

export const routes = [
  {path: '/', component: Home},
  {path: '/patients', component: Profile},
  {path: '/notes', component: Notes},
  {path: '/appointments', component: Appointments},
  {path: '/labstable', component: LabsTable},
  {path: '/charts', component: Charts}
]
