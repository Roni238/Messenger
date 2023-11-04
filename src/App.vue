<template>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@100&family=Red+Hat+Display:wght@300&display=swap');

#app {
  font-family: 'Exo 2', sans-serif;
  font-family: 'Red Hat Display', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fee7c7;
  color: #5e5f61;
  height: 100vh;
}
body{
  margin: 0px;
}
</style>
<script>
export default {
  mounted(){
    console.log(process.env.VUE_APP_BASE_URL)
  }
}
</script>

