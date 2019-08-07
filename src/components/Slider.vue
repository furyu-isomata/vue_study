<template>
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
</template>

<script>
	import Slick from 'vue-slick' // Slick読み込み
	import '../../node_modules/slick-carousel/slick/slick.css' // Slickのcss読み込み
	export default {
		name: 'Sample',
		data () {
			return {
				slickOptions: {// Slickのオプションを設定
					arrows: false
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
    h1 {
        font-weight: normal;
    }
</style>