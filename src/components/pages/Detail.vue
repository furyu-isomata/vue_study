<template>
    <!--記事詳細ページ-->
    <div>
        <div class="article" v-for="(article, key) in this.getArticle()" :key="key">
            <h2 class="article-title">{{ article.title }}</h2>
            <div>
                <img :src="article.img" alt="記事イメージ">
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
            'id': {
                type: Number,
                default: null
            }
        },
        data() {
            return {
                list: this.$store.state.articleList
            }
        },
        methods: {
            getArticle() {
                if( this.list != null) {
                    const articleId = Number(this.$route.params.articleId);
                    const article = this.list.filter((element) => {
                        return (element.id === articleId);
                    });
                    return article;
                }
            }
        },
        created() {
            this.getArticle();
    },
};
</script>

<style scoped lang="scss">
    .article {
        max-width: 700px;
        margin: 0 auto;

        &-data {
            display: flex;
            justify-content: center;
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