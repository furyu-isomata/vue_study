<template>
    <ul class="list">
        <li class="list-item" v-for="article in $store.state.ArticleList" v-bind:key="article.category">
            <a class="list-link" href="#">
                <img :src="article.img" alt="記事イメージ">
                <div class="list-detail">
                    <span class="list-category">{{ article.category }}</span>
                    <span class="list-title">{{ article.title }}</span>
                    <span class="list-caption">{{ article.caption }}</span>
                    <span class="list-author">{{ article.author }}</span>
                    <span class="list-date">{{ article.date }}</span>
                </div>
            </a>
        </li>
    </ul>

</template>


<script>
	export default {
		name: 'List',
        data() {
			return {
				list: this.$store.state.ArticleList,
            }
        },
        methods: {
			getCategory() {
				const category = this.list.map((r) => {
					return r.category;
				});
				const category2 = category.filter((x, i, self) =>{
					return self.indexOf(x) === i;
                });
                console.log(category2);

            }
        },
        created() {
			this.getCategory();
		},
	}
</script>
<style scoped lang="scss">
    .list {

        list-style-type: none;
        &-item {
            margin-bottom: 8px;
        }
        &-link {
            display: flex;
            align-items: center;
            img {
                margin-right: 8px;
            }
            span {
                margin-right: 8px;
            }
        }
        &-title {
            color: #2c3e50;
            font-weight: bold;
        }
        &-category {
            color: darkslateblue;
            font-size: 10px;
        }
        &-date{

        }
    }

</style>