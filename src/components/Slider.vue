<template>
    <div class="l-element">
        <slick
            ref="slick"
            :options="slickOptions">
            <div v-for="banner in bannerList">
                <a :href=banner.linkUrl :target="banner.newWindow ?
                    '_blank':false">
                    <img :src="`${imgUrl}${banner.imgName}`" :alt="banner.imgAlt">
                </a>
            </div>
        </slick>
    </div>

</template>

<script>
    import Slick from 'vue-slick';
    export default {
        components: { Slick },
        props: {
            bannerList: Array,
            imgUrl: String
        },
        data() {
            return {
                slickOptions: {
                    adaptiveHeight: true,
                    arrows: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    dots: true,
                    mobileFirst: true,
                    swipeToSlide: true,
                    infinite: true,
                    slidesPerRow: 1
                }
            };
        }
    }
</script>
<style scoped lang="scss">
    /* Slider */
    .slick-slider /deep/ {
        position: relative;
        display: block;
        box-sizing: border-box;
        user-select: none;
        touch-action: pan-y;
        -webkit-tap-highlight-color: transparent;
        padding: 0 8px;
        .slick-list {
            position: relative;
            display: block;
            overflow: hidden;
            margin: 0;
            padding: 0;
            &:focus {
                outline: none;
            }
            &.dragging {
                cursor: pointer;
                cursor: hand;
            }
        }
        .slick-track,
        slick-list {
            transform: translate3d(0, 0, 0);
        }
        .slick-track {
            position: relative;
            top: 0;
            left: 0;
            display: flex;
            margin-left: auto;
            margin-right: auto;
            &:before,
            &:after {
                display: table;
                content: '';
            }
            &:after {
                clear: both;
            }
        }
        .slick-loading {
            .slick-track {
                visibility: hidden;
            }
        }
        .slick-slide {
            float: left;
            height: 100%;
            min-height: 1px;
            img {
                display: block;
            }
            &.slick-loading {
                img {
                    display: none;
                }
            }
            &.dragging {
                img {
                    pointer-events: none;
                }
            }
        }
        [dir='rtl'] .slick-slide {
            float: right;
        }
        .slick-initialized {
            .slick-slide {
                display: block;
            }
        }
        .slick-loading {
            .slick-slide {
                visibility: hidden;
            }
        }
        .slick-vertical {
            .slick-slide {
                display: block;
                height: auto;
                border: 1px solid transparent;
            }
        }
        .slick-arrow.slick-hidden {
            display: none;
        }
        /* Arrow */
        .slick-arrow {
            .slick-prev {
            }
            .slick-next {
            }
        }
        /* Dots */
        .slick-dots {
            position: absolute;
            bottom: 0;
            display: block;
            width: 100%;
            padding: 0;
            margin: 0;
            list-style: none;
            text-align: center;
            li {
                position: relative;
                display: inline-block;
                width: 15px;
                height: 15px;
                padding: 0;
                cursor: pointer;
                button {
                    font-size: 0;
                    line-height: 0;
                    display: block;
                    width: 15px;
                    height: 15px;
                    padding: 5px;
                    cursor: pointer;
                    color: transparent;
                    border: 0;
                    outline: none;
                    background: transparent;
                    &:hover,
                    &:focus {
                        outline: none;
                        &:before {
                            opacity: 1;
                        }
                    }
                    &:before {
                        font-size: 30px;
                        line-height: 20px;
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 15px;
                        height: 15px;
                        content: '•';
                        text-align: center;
                        opacity: .25;
                        color: black;
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                    }
                }
                &.slick-active button:before {
                    opacity: .75;
                    color: black;
                }
            }
        }
    }
</style>