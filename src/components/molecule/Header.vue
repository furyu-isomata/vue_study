<template>
    <div>
        <div class="header">
            <div class="header-logo">
                <router-link to="/"><img alt="Vue logo" src="../../assets/logo.png"></router-link>
            </div>
            <div class="header-menu">
                <router-link to="/diet">diet</router-link>
                <router-link to="/beauty">beauty</router-link>
            </div>

        </div>
        <router-view></router-view>
    </div>

</template>


<script>
	export default {
		name: 'Header'
	}
</script>
<style scoped lang="scss">
  .header {
      display: flex;
      background-color: aliceblue;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      &-logo {
        width: 50px;
          height: 50px;
          img {
              width: 100%;
          }
      }

      &-menu {
        a {
            color: #2c3e50;
            font-weight: bold;
            padding: 8px;
            margin-right: 8px;
        }
      }
  }
</style>