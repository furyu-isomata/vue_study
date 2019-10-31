<template>
    <div class="wrap">
        <h1 v-if="!category">全ての記事一覧</h1>
        <h1 v-else>{{ this.category }} の記事一覧</h1>
        <list :category="this.category" />
    </div>
</template>


<script>
    import List from "../molecule/List"
	export default {
		name: 'Top',
        components: {
			List,
        },
		props: {
			category: {
				type: String,
				default: null
			}
		}
	}
</script>
<style scoped lang="scss">
    .wrap {
        width: 750px;
        margin: 20px auto;
    }
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