import { plugin, defaultConfig } from '@formkit/vue'
<template>
    <div>
        
    <loginForms/>
    </div>
</template>

<script>
import loginForms from "../components/loginForms.vue";



export default {
  name: 'App',
  components: {
    loginForms
}
}

  
</script>

