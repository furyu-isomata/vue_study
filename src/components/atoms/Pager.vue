<template>
    <div>
        <ul>
            <li v-for="item in getItems">{{item}}</li>
        </ul>

    </div>
</template>

<script>
	export default {
		data() {
			return {
				list: this.$store.state.ArticleList,
				parPage: 10,
				currentPage: 1
			}
		},
		methods: {
			clickCallback: function (pageNum) {
				this.currentPage = Number(pageNum);
			}
		},
		computed: {
			getItems: function() {
				let current = this.currentPage * this.parPage;
				let start = current - this.parPage;
				return this.list.slice(start, current);
			},
			getPageCount: function() {
				return Math.ceil(this.list.length / this.parPage);
			}
		}
	};
</script>
<style scoped lang="scss">

</style>