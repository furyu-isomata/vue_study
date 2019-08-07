<template>
  <div class="l-element is-full-width">
    <slider :banner-list="bannerList" :img-url="imgUrl"></slider>
    {{ bannerList.linkUrl }}
  </div>
</template>

<script>
    import Slider from './Slider.vue'
    export default {
        components: {
            Slider
        },
        data() {
            return {
                bannerList: [
                    {
                        "linkUrl": "/sp/machine/tokimekirule/2",
                        "imgName": "bnr_tokimeki2.png",
                        "imgAlt": "TOKIMEKIRULE2 製品紹介ページはこちら",
                        "newWindow": false
                    },
                    {
                        "linkUrl": "/sp/machine/aroundtwenty/1",
                        "imgName": "bnr_around20.png",
                        "imgAlt": "フリューが大人のための、プリをつくりました。AROUND20",
                        "newWindow": false
                    },
                    {
                        "linkUrl": "/sp/machine/korekawa/3",
                        "imgName": "bnr_korekawa3.png",
                        "imgAlt": "コレカワついに、最終章。コレカワ fin 詳しくはこちら",
                        "newWindow": false
                    }
                ],
                imgUrl: '/img/banner/carousel/',
            }
        }
    }
</script>
