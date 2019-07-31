<template>
    <meerkat>
        <figure class="sub_area js_gtm_event l-element">
            <a :href="linkUrl" :target="newWindow ? '_blank':false">
                <p>とりあえずコンポーネント表示</p>
                <img :src="imgUrl" alt="imgAlt">
                <h1 style="color:#fff">{{ imgAlt }}</h1>
            </a>
        </figure>
    </meerkat>
</template>

<script>
	import Meerkat from './Meerkat.vue'
	export default {
		components: { Meerkat },
		data() {
			return {
				bannerList: [
					{
						"linkUrl": "https://voyager-sp-dev-test.e-jumon.com/sp/machine/aroundtwenty/1",
						"imgUrl": "https://voyager-sp-dev-test.e-jumon.com/img/banner/banner_aroundtwenty_2.jpg",
						"imgAlt": "AROUND20で撮影すると、3枚コラージュ画像全員もらえる！！",
						"newWindow": false
					},
					{
						"linkUrl": "https://app.adjust.com/pbun2kx",
						"imgUrl": "https://s3-ap-northeast-1.amazonaws.com/pictlink-public-files-test/banner/icon/icon_present_002_1907.gif",
						"imgAlt": "フリューが作った　面倒くさくない！体重管理アプリ",
						"newWindow": true
					}
				],
				linkUrl: '',
                imgUrl: '',
                imgAlt: '',
                newWindow: ''
			}
		},
        methods: {
			getRandomBanner() {
				const bannerArray = Array.from(this.bannerList);
				const arrayIndex = Math.floor(Math.random() * bannerArray.length);
				this.linkUrl = bannerArray[arrayIndex].linkUrl;
				this.imgUrl = bannerArray[arrayIndex].imgUrl;
				this.imgAlt = bannerArray[arrayIndex].imgAlt;
				this.newWindow = bannerArray[arrayIndex].newWindow;
			}
        },
        created() {
			this.getRandomBanner();
        }
	}


</script>

<style scoped lang="scss">
    .meerkat-lead-text {
        display: block;
        margin-bottom: 8px;
        font-size: 2rem;
        font-weight: bold;
        letter-spacing: .2rem;
    }
    .btn-meerkat {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        height: 64px;
        background: #ff71a7;
        text-align: center;
        color: #fff;
        letter-spacing: .2rem;
        strong {
            font-size: 1.8rem;
            line-height: 1;
            font-weight: normal;
            span {
                display: block;
                margin-bottom: 8px;
                font-size: 1.4rem;
            }
        }
    }
</style>