import { createApp } from 'vue'
import { Quasar } from 'quasar'
// files
import App from './App.vue'
import router from './router'
import './index.css'
import 'quasar/dist/quasar.css'
import '@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css'
import '@quasar/extras/material-icons/material-icons.css'

const app = createApp(App)

app.use(router)
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})
app.mount('#app')
