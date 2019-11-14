<template>
    <ul class="list">
        <li class="list-item" v-for="(article, key) in this.currentCategoryList" :key="key">
            <router-link class="list-link" :to="'/article/' + article.id">
                <div class="list-img">
                    <img :src="article.img" alt="記事イメージ">
                </div>
                <div class="list-detail">
                    <p class="list-title">{{ article.title }}</p>
                    <p class="list-caption">{{ article.caption }}</p>
                    <div class="list-data">
                        <p class="list-category">{{ article.category }}</p>
                        <p class="list-author">{{ article.author }}</p>
                        <p class="list-date">{{ article.date }}</p>
                    </div>
                </div>
            </router-link>
        </li>
    </ul>
</template>

<script>
    import { getArticleCategory, getArticleList } from '../../action';
	export default {
		name: 'List',
        data() {
			return {
                currentCategoryList: "",
            }
        },
        props: {
			'category': {
				type: String,
                default: null
            }
        },
        watch: {
			'$route' (to, from) {
				if(this.$route.params.category) {
					this.currentCategoryList = getArticleCategory(this.category);
				} else {
					this.currentCategoryList =  getArticleList();
                }
			}
        },
		created() {
			this.currentCategoryList =  getArticleList();
		},
	}
</script>
<style scoped lang="scss">
    .list {
        list-style-type: none;
        a {
            text-decoration: none;
        }
        &-item {
            margin-bottom: 8px;
        }
        &-link {
            display: flex;
            align-items: center;
            img {
                margin-right: 8px;
                width: 200px;
                height: auto;
            }
            span {
                margin-right: 8px;
            }
        }
        &-img {
            display: flex;
            align-items: center;
            border: 1px solid #ccc;
            margin-right: 20px;
            width: 150px;
            img {
                width: 150px;
                height: auto;
            }
        }
        &-detail {

            text-align: left;
        }
        &-data {
            display: flex;
            align-items: center;
        }

        &-title {
            font-size: 20px;
            color: #2c3e50;
            font-weight: bold;
            text-align: left;
        }
        &-category {
            font-size: 10px;
            color: #fff;
            background-color: #c9c9c9;
            margin-right: 20px;
            padding: 2px;

        }
        &-date{
            font-size: 10px;
        }
        &-author {
            font-size: 10px;
            margin-right: 20px;
        }
    }

</style>