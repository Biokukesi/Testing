<template>
  <HobbitonView/>
  <div id = "nav">
    <router-link to = '/HomeView'>Home</router-link>
    <router-link to = '/loginview'>Login</router-link>
    <router-link to = '/PsAndTs'>  Policies</router-link>
    <!-- <router-link to = '/PoliciesView'>Trans</router-link>    -->
  </div>

  <div>
    
  </div>
  <router-view/>
  <button @click = "back">Back</button>

  <button @click = "forward">Forward</button>
</template>


<script>
  
import HobbitonView from "./components/HobbitonView.vue";


  export default {
    methods: {
    back() {
      this.$router.go(-1)
    },

    forward() {
      this.$router.go(+1)
    }
  },
    name: 'App',
    components: {
    HobbitonView
    
    
}
       
}
</script>

<style>
#app {
  align-items: center;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
#nav{
  padding: 30px 20px 50px 20px;
}



#nav a{
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 15px;
}


#nav a.router-link-exact-active{
  color: white;
  background: green;  
  width: 200px;
}
img{
  height: 70px;
}
body{
  align-items: center;
  justify-content: center;
  
}
button{
 
     font-weight: bolder;
     margin: 30px;
     border-radius: 20px;
     border: crimson;
     padding: 10px;
     cursor: pointer;
     color: green;
}





</style>
