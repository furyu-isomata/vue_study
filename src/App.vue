<template>
  <div id="app">
    <Curation msg="curation site"/>
  </div>
</template>

<script>
import Curation from './components/templates/Curation.vue'

export default {
  name: 'app',
  components: {
	  Curation
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
