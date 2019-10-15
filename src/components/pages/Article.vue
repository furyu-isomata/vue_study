<template>
    <div class="article">
        <h2>記事ページ</h2>
        <p>idは 「 {{ $route.params.id }} 」</p>
    </div>
</template>


<script>
	export default {
		name: 'Article',
	}
</script>