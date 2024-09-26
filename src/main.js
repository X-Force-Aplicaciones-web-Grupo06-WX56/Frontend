import './assets/main.css'
import {createApp} from 'vue'
import App from './app.vue'
import PrimeVue from 'primevue/config';
import i18n from "@/i18n.js";

// PrimeVue CSS
import 'primeflex/primeflex.css';
import Toast from "primevue/toast";
import Toolbar from "primevue/toolbar";
import ConfirmDialog from "primevue/confirmdialog";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import SelectButton from "primevue/selectbutton";
import Drawer from "primevue/drawer";

// PrimeVue Theme
import Aura from '@primevue/themes/aura';
import FloatLabel from "primevue/floatlabel";
import InputText from "primevue/inputtext";
import router from "@/routes/index.js";


// Router


const app = createApp(App);
// PrimeVue
app.use(PrimeVue, {
        ripple: true,
        theme: {
            preset: Aura,
            darkModeSelector: 'System',
            cssLayer: false
        }
    }
)
    .component('pv-button', Button)
    .component('pv-confirm-dialog', ConfirmDialog)
    .component('pv-column', Column)
    .component('pv-data-table', DataTable)
    .component('pv-dialog', Dialog)
    .component('pv-drawer', Drawer)
    .component('pv-float-label', FloatLabel)
    .component('pv-input-text', InputText)
    .component('pv-select-button', SelectButton)
    .component('pv-toast', Toast)
    .component('pv-toolbar', Toolbar);

// Vue i18n
app.use(i18n);
app.use(router);
// Mount App
app.mount('#app');

