<template>
    <div>
        <ul class="list">
            <li class="list-item" v-for="(article, key) in getLists" :key="key">
                <router-link class="list-link" :to="'/article/' + article.id">
                    <div class="list-img">
                        <img :src="article.img" alt="記事イメージ">
                    </div>

                    <div class="list-detail">
                        <p class="list-title">{{ article.title }}</p>
                        <p class="list-caption">{{ article.detail }}</p>
                        <div class="list-data">
                            <p class="list-category">{{ article.category }}</span>
                            <p class="list-author">{{ article.author }}</p>
                            <p class="list-date">{{ article.date }}</p>
                        </div>

                    </div>
                </router-link>
            </li>
        </ul>
        <paginate
            :page-count="getPageCount"
            :page-range="3"
            :margin-pages="2"
            :click-handler="clickCallback"
            :prev-text="'＜'"
            :next-text="'＞'"
            :container-class="'pagination'"
            :page-class="'page-item'">
        </paginate>
    </div>
</template>


<script>
	export default {
		name: 'List',
        data() {
			return {
				list: this.$store.state.ArticleList,
				parPage: 5,
				currentPage: 1
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
					const showCategory = this.list.filter(x => x.category === this.category);
					return showCategory;
                } else {
					return this.list;
                }
            },
			clickCallback: function (pageNum) {
				this.currentPage = Number(pageNum);
			}
        },
        created() {
			this.getCategory();
		},
        computed: {
			getLists: function() {
				let current = this.currentPage * this.parPage;
				let start = current - this.parPage;
				return this.getCategory().slice(start, current);
			},
			getPageCount: function() {
				return Math.ceil(this.getCategory().length / this.parPage);
			}
        }
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
            span {
                margin-right: 8px;
            }
        }
        &-img {
            display: flex;
            align-items: center;
            border: 1px solid #ccc;
            margin-right: 20px;
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
    .pagination {
        display: flex;
        list-style-type: none;
        width: 400px;
        margin: 30px auto;
        .page-item {
            list-style-type: none;
            margin-right: 10px;
            a {
                padding: 10px;
            }
        }
    }

</style>