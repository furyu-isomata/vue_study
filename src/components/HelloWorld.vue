<template>
  <div class="hello">
    <div class="sample">
      <h1>スライダーテスト</h1>
      <!-- Slickタグで対象タグを囲む -->
      <slick ref="slick" :options="slickOptions"><!-- refプロパティにslickを指定してオプションも設定する -->
        <div><img src="http://placehold.jp/3d4070/ffffff/750x480.png?text=1"></div>
        <div><img src="http://placehold.jp/3d4070/ffffff/750x480.png?text=2"></div>
        <div><img src="http://placehold.jp/3d4070/ffffff/750x480.png?text=3"></div>
      </slick>
      <!-- End -->
    </div>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>

  </div>
</template>

<script>
	import Slick from 'vue-slick' // Slick読み込み
	import '../../node_modules/slick-carousel/slick/slick.css' // Slickのcss読み込み
export default {
  name: 'HelloWorld',
  data () {
      return {
          // Slickのオプションを設定
          slickOptions: {
              arrows: true,
			  autoplay: true,
			  autoplaySpeed: 3000,
			  dots: true,
			  mobileFirst: true,
			  swipeToSlide: true
          }
      }
  },
  // コンポーネンツにSlickを登録
  components: {
      Slick
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  img {
    margin: 0 auto;
  }
</style>
