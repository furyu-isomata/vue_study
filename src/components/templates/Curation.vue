<template>
  <div class="hello">
    <Header msg="curation site"></Header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from '../molecule/Header'
export default {
  name: 'Curation',
  components: { Header }
}
</script>

<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
