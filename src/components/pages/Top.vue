<template>
    <div class="hello">
        <h1>top</h1>
        <list></list>
    </div>
</template>


<script>
    import List from "../molecule/List"
	export default {
		name: 'Top',
        components: {
			List
        },
        created() {
			this.$store.commit('increment')
			console.log(this.$store.state.count);

        }
	}
</script>