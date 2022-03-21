import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 'vuetify/dist/vuetify.min.css'
import {sync} from 'vuex-router-sync'
import store from '@/store/store'

loadFonts()
sync(store, router)

createApp(App)
  .use(router)
  .use(vuetify)
  .use(store)
  .mount('#app')
  store

