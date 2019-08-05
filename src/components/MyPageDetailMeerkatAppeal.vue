<template>
    <meerkat>
        <figure class="sub_area js_gtm_event l-element">
            <a :href="linkUrl" :target="newWindow ? '_blank':false">
                <img :src="imgPath" alt="imgAlt">
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
						"imgName": "bnr_aroud20.jpg",
						"imgAlt": "AROUND20で撮影すると、3枚コラージュ画像全員もらえる！！",
						"newWindow": false
					},
					{
						"linkUrl": "https://app.adjust.com/pbun2kx",
						"imgName": "bnr_yasegram.jpg",
						"imgAlt": "フリューが作った　面倒くさくない！体重管理アプリ",
						"newWindow": true
					}
				],
				linkUrl: '',
				imgPath: '',
                imgAlt: '',
                newWindow: ''
			}
		},
        methods: {
			getRandomBanner() {
				const bannerArray = Array.from(this.bannerList);
				const arrayIndex = Math.floor(Math.random() * bannerArray.length);

				const imgName = bannerArray[arrayIndex].imgName;
				this.linkUrl = bannerArray[arrayIndex].linkUrl;
				this.imgAlt = bannerArray[arrayIndex].imgAlt;
				this.newWindow = bannerArray[arrayIndex].newWindow;
				this.imgPath = this.bannerUrl(imgName);

			},
			bannerUrl(imgName){
				return this.imgPath = `/img/banner/meerkat/${imgName}.jpg`;
			},
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