import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { plugin, defaultConfig } from '@formkit/vue'
import { de, fr, bg } from '@formkit/i18n'
import '@formkit/themes/genesis'

import { createAutoAnimatePlugin } from '@formkit/addons'



const myApp = createApp(App)
const config = defaultConfig({
    locales: { de, fr, bg },
    locale: 'en',
    theme: 'genesis',
    icons: {
      formkit: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 0.0182495H0V4.01533H4V8.01167L7.9989 8.01167V12.0088H4V16.0058H0V20.0029H4V16.0058H8V12.0088H11.9989V8.01167L8 8.01167V4.01459H4V0.0182495ZM11.9983 20.0029H15.9977H15.9983H19.9972H19.9977H23.9972V24H19.9977H19.9972H15.9983H15.9977H11.9983V20.0029Z" fill="currentColor"/></svg>`
    },
  
    plugins: [createAutoAnimatePlugin()],
  })
  
  
  // Install FormKit:
myApp.use(plugin, config)

// Install the router
myApp.use(router)

// Mount the Vue application
myApp.mount('#app')
