<template>
    <div class="hello">
        <h1>top</h1>
    </div>
</template>


<script>
	export default {
		name: 'Top',
        created() {
			this.$store.commit('increment')
			console.log(this.$store.state.count);

        }
	}
</script>