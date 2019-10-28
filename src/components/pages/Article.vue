<template>
    <div class="article">
        <h2>記事ページ</h2>
        <p>idは 「 {{ id }} 」</p>
    </div>
</template>


<script>
	export default {
		name: 'Article',
        props: {
			id: {
				type: Number
			}
        }
	}
</script>