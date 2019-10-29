<template>
    <div>
        <h2>{{ this.category }}</h2>
        <ul class="list">
            <li class="list-item" v-for="(article, key) in this.getCategory()" :key="key">
                <router-link class="list-link" :to="'article/' + article.id">
                    <img :src="article.img" alt="記事イメージ">
                    <div class="list-detail">
                        <span class="list-category">{{ article.category }}</span>
                        <span class="list-title">{{ article.title }}</span>
                        <span class="list-caption">{{ article.detail }}</span>
                        <span class="list-author">{{ article.author }}</span>
                        <span class="list-date">{{ article.date }}</span>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>


<script>
	export default {
		name: 'List',
        data() {
			return {
				list: this.$store.state.ArticleList,
            }
        },
        props: {
			'category': {
				type: String,
                default: null
            }
        },
        methods: {
            getCategory() {
                if (this.category !== null) {
					console.log(`カテゴリーは${this.category}`);
					const showCategory = this.list.filter(x => x.category === this.category);
					return showCategory;
                } else {
					console.log(`カテゴリーはtopかな`);
					return this.list;
                }
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