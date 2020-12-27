<template>
	<transition name="fade">
		<div class="toast" v-show="showToast">
			<span v-html="title || titlebak"></span>
		</div>
	</transition>
</template>

<script>
/**
 * 浮层，居中显示
 * @constructor
 * @alias module: Confirm
 * @param {Object} [option]
 * @param {boolean} [option.destroyOnMaskClicked] 点击遮罩层时是否销毁实例
 */

export default {
	name: "Toast",
	data() {
		return {
			showToast: false,
			title: "",
		};
	},
	props: {
		titlebak: "",
	},
	computed: {},
	methods: {
		/**
		 * 显示浮层
		 */

		show() {
			this.showToast = true;
		},
		/**
		 * 显示浮层
		 */
		hide(duration, fn) {
			setTimeout(() => {
				this.showToast = false;
				fn && fn();
			}, 2000);
		},
		/*
		 * 销毁
		 */
		destroy() {
			this.$destroy();
		},
	},
};
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}

.toast {
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	border-radius: 0.06rem;
	min-width: 1.06rem;
	padding: 0.13rem;
	// .wuji-background(CAM_X0608);
	background: rgba(0, 0, 0, 0.6);
	text-align: center;
	z-index: 1000;
	img {
		display: block;
		width: 0.42rem;
		height: 0.42rem;
		margin: 0.2rem auto 0;
	}
	span {
		color: #fff;
		font-size: 0.13rem;
		margin: 0;
	}
}
</style>
