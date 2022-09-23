<template>
<div id = "app">
  <HobbitonView/>
  <div id = "nav">
    <router-link to = '/HomeView'>Home</router-link>
    <router-link to = '/loginview'>Login</router-link>
    <router-link to = '/PsAndTs'>  Policies</router-link>
    <!-- <router-link to = '/PoliciesView'>Trans</router-link>    -->
  </div>

  
  <transition name = "router-anim" >
     <router-view/>
  </transition>
  <button @click = "back">Back</button>

  <button @click = "forward">Forward</button>
</div>
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
#nav a.router-link-exact-active:hover{
  color: white;
  background: crimson;
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
.router-anim-enter-active{
  animation: coming 1s;
  animation-delay: .5s;
  opacity: 0;
}

.router-anim-leave-active{
  animation: going 1s;
}

@keyframes going{
  from{
    transform: translate(0);
  }
  to{
    transform: translate(-50px);
    opacity: 0;
  }
}

@keyframes coming{
  from{
    transform: translate(-50px);
    opacity: 0;
  }
  to{
    transform: translate(0);
    opacity: 1;
  }
}
.page{
  position: static;
  width: inherit;
}





</style>
