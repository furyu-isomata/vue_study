<template>
    <div class="hello">
        <h1>{{ $route.params.category }} カテゴリ記事一覧</h1>
        <list></list>
    </div>
</template>


<script>
	import List from "../molecule/List"
	export default {
		name: 'Category',
        components: {
			List
        }
	}
</script>