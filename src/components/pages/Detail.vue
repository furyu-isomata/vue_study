<template>
    <div>
        <div class="article" v-for="(article, key) in this.getArticle()" :key="key">
            <h2 class="article-title">{{ article.title }}</h2>
            <div>
                <img :src="article.img" alt="記事画像">
            </div>
            <div class="article-data">
                <p class="article-category">{{ article.category }}</p>
                <p class="article-date">更新日{{ article.date }}</p>
                <p class="article-author">{{ article.author }}</p>
            </div>

            <div class="article-text">
                <p>{{ article.detail }}</p>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		props: {
			id: {
				type: Number,
            }
		},
		data() {
			return {
				list: this.$store.state.ArticleList,

			}
		},
        methods: {
            getArticle() {
                const articleId = this.$route.params.articleId;
                const article = this.list.filter(x => x.id === articleId);
				console.log(article);
                return article;
            }
        },
		created() {
			this.$store.commit('increment');
			this.getArticle();
			console.log(this.list);
		}
	};
</script>
<style scoped lang="scss">
    .article {
        &-title {

        }
        &-data {
            display: flex;
        }
        &-category {
            color: #fff;
            background-color: #ccc;
            margin-right: 20px;
            padding: 4px;
        }
        &-date {
            margin-right: 20px;
        }
    }
</style>