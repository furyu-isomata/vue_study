<template>
    <div class="meerkat-wrapper" v-if="isShow">
        <div class="close" v-on:click="close"></div>
        <slot></slot>
    </div>
</template>

<script>
	export default {
		data() {
			return {
				isShow: true
			}
		},
		methods: {
			close: function () {
				this.isShow = false
			}
		}
	}
</script>

<style scoped lang="scss">
    .meerkat-wrapper {
        background: rgba(0,0,0,0.7);
        position: fixed;
        bottom: 0;
        width: 100%;
        padding: 16px 24px 8px;
        box-sizing: border-box;
        color: #fff;
        text-align: center;
        .close {
            position: absolute;
            top: 8px;
            right: 8px;
            width: 20px;
            height: 20px;
            background: #989898;
            border-radius: 50%;
            cursor: pointer;
            &:after {
                content: '×';
                display: inline-block;
                margin-top: -3px;
                color: #fff;
                font-size: 2rem;
            }
        }
    }
</style>