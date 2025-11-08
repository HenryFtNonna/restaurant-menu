import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons'

library.add( faChampagneGlasses)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')

