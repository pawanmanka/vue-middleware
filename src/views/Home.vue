<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button class="btn btn-info" @click="login">Login</button>
    <button class="btn btn-danger" @click="logout">Logout </button>

    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  mounted() {
    
  },
  methods:{
      login(){
        this.$store.commit('loginAuth')
      },
      logout(){
        this.$store.commit('logout')
      }
  }
};
</script>
