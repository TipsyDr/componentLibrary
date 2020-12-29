<template>
	<div class="swiper-container">
		<div
			class="swiper-touch"
			ref="touch"
			@touchstart="touchStart"
			@touchmove="touchMove"
			@touchend="touchEnd"
		>
			<div
				class="swiper-wrapper"
				:style="{
					transform: 'translate3d(' + slideEffect + 'px, 0px, 0px)',
					transitionDuration: tdurationTime + 'ms',
					width: count + '00%',
				}"
			>
				<slot name="swiper-item"></slot>
			</div>
		</div>
		<ul class="swiper-dots">
			<li
				v-for="num in count"
				:key="num"
				:class="currantIndex === num ? 'swiper-dots-active' : ''"
				@click="handleChangeCurrantIndex(num)"
			></li>
		</ul>
	</div>
</template>

<script lang="ts">
import {
	toRefs,
	defineComponent,
	reactive,
	onMounted,
	Ref,
} from "@vue/composition-api";

interface Props {
	count: number;
	springrange: number;
	tduration: number;
	isShowIndexBtn: boolean;
}
interface Swiper {
	// 开始触摸的位置
	startX: Ref<number>;
	// 滑动时的位置
	moveX: Ref<number>;
	// 结束触摸的位置
	endX: Ref<number>;
	// 移动距离
	disX: Ref<number>;
	// 回弹宽度
	springWidth: Ref<number>;
	// 当前位移像素
	slideEffect: Ref<number>;
	// 页面宽度
	btnWidth: Ref<number>;
	// 当前slide
	currantIndex: Ref<number>;
	// 过渡时间
	tdurationTime: Ref<number>;
	// 上次的位置
	lastEndSpead: Ref<number>;
	// c不可以切换上一张，a可以上下切换，b不能切换下一张
	status: Ref<string>;
	touchStart: (e: any) => void;
	touchMove: (e: any) => void;
	touchEnd: (e: any) => void;
	handleChangeCurrantIndex: (num: number) => void;
}
export default defineComponent({
	name: "ZSwiper",
	props: {
		count: {
			type: Number,
			default: 0,
		},
		isShowIndexBtn: {
			type: Boolean,
			default: true,
		},
		springrange: {
			type: Number,
			default: 0.2,
		},
		tduration: {
			type: Number,
			default: 300,
		},
	},
	setup(props: Props, context: any): Swiper {
		const state = reactive({
			// 开始触摸的位置
			startX: 0,
			// 滑动时的位置
			moveX: 0,
			// 结束触摸的位置
			endX: 0,
			// 移动距离
			disX: 0,
			// 回弹宽度
			springWidth: 0,
			// 当前位移像素
			slideEffect: 0,
			// 页面宽度
			btnWidth: 0,
			// 当前slide
			currantIndex: 1,
			// 过渡时间
			tdurationTime: 300,
			// 上次的位置
			lastEndSpead: 0,
			// c不可以切换上一张，a可以上下切换，b不能切换下一张
			status: "a",
		});

		onMounted(() => {
			state.btnWidth = context.refs.touch.offsetWidth;
			state.springWidth = props.springrange * state.btnWidth;
			state.tdurationTime = props.tduration;
		});

		const touchStart = (e: any) => {
			e = e || event;
			if (e.touches.length === 1) {
				// 记录开始位置
				state.startX = e.touches[0].clientX;
			}
		};
		const touchMove = (e: any) => {
			e = e || event;
			state.tdurationTime = 0;
			state.moveX = e.touches[0].clientX;
			state.disX = state.moveX - state.startX;
			// 在边界的时候做一些拉力的判断
			if (state.disX > 0 && state.currantIndex === 1) {
				state.slideEffect = state.disX / 3 + state.lastEndSpead;
			} else if (state.disX < 0 && state.currantIndex === props.count) {
				state.slideEffect = state.disX / 3 + state.lastEndSpead;
			} else {
				state.slideEffect = state.disX + state.lastEndSpead;
			}
			// disX不考虑回弹时小于0下一张大于0上一张
		};

		const next = () => {
			state.slideEffect = -state.btnWidth + state.lastEndSpead;
			state.currantIndex += 1;
		};
		const last = () => {
			state.slideEffect = state.btnWidth + state.lastEndSpead;
			state.currantIndex -= 1;
		};
		const forbidChange = () => {
			state.slideEffect = state.lastEndSpead;
		};
		const actions: any = {
			a: next,
			b: last,
			c: forbidChange,
		};

		const touchEnd = (e: any) => {
			e = e || event;
			state.tdurationTime = props.tduration;
			state.endX = e.changedTouches[0].clientX;
			if (Math.abs(state.disX) < state.springWidth && state.currantIndex) {
				state.status = "c";
			} else if (state.disX < 0 && state.currantIndex === props.count) {
				state.status = "c";
			} else if (state.disX > 0 && state.currantIndex === 1) {
				state.status = "c";
			} else if (state.disX > 0) {
				state.status = "b";
			} else if (state.disX < 0) {
				state.status = "a";
			}
			state.disX = 0;
			actions[state.status]();
			state.lastEndSpead = state.slideEffect;
		};

		const handleChangeCurrantIndex = (num: number) => {
			state.currantIndex = num;
			state.slideEffect = -state.btnWidth * (num - 1);
			state.lastEndSpead = state.slideEffect;
		};
		return {
			...toRefs(state),
			touchStart,
			touchMove,
			touchEnd,
			handleChangeCurrantIndex,
		};
	},
});
</script>

<style lang="less" scoped>
.swiper-container {
	position: relative;
	overflow: hidden;
	z-index: 1;
	width: 100%;
	background: #f5f5f5;
	.swiper-dots {
		position: absolute;
		right: 0;
		bottom: 0.1rem;
		height: 0.06rem;
		width: 100%;
		display: block;
		list-style: none;
		text-align: center;
		& > li {
			display: inline-block;
			width: 0.07rem;
			height: 0.07rem;
			margin: 0 0.04rem;
			background: #ccc;
			vertical-align: top;
			border-radius: 50%;
			opacity: 0.45;
		}
		.swiper-dots-active {
			opacity: 1;
		}
	}
}

.swiper-touch {
	width: 100%;
	position: relative;
	.swiper-wrapper {
		display: flex;
		position: relative;
		transition-property: transform, height, -webkit-transform, -moz-transform,
			-o-transform;
	}
}
</style>
