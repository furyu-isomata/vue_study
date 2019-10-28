<template>
    <div class="hello">
        <h1>{{ $route.params.category }} 記事一覧</h1>
        <list category="$route.params.category"></list>
    </div>
</template>


<script>
	import List from "../molecule/List"
	export default {
		name: 'Category',
        components: {
			List
        },
        props: {
			category: {
				type: String
			}
        }
	}
</script>