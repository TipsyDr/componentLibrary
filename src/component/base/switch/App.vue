<template>
	<span class="switch" :class="{ 'switch-on': isChecked }" @click="toggle">
	</span>
</template>

<script lang="ts">
import { toRefs, defineComponent, reactive, watch } from "@vue/composition-api";

interface Props {
	value?: boolean;
}
interface ZSwitch {
	isChecked: boolean;
	toggle: () => void;
}

export default defineComponent({
	name: "ZSwitch",
	props: {
		value: {
			type: Boolean,
			default: false,
		},
	},
	setup(props, context) {
		const state = reactive({
			isChecked: props.value,
		});
		// 改变组件的的状态
		const toggle = () => {
			state.isChecked = !state.isChecked;
		};

		watch(
			() => state.isChecked,
			(isChecked) => {
				context.emit("change", isChecked);
			}
		);

		return {
			...toRefs(state),
			toggle,
		};
	},
});
</script>

<style lang="less" scoped>
.switch {
	position: relative;
	display: block;
	width: 0.5rem;
	height: 0.28rem;
	border-radius: 0.14rem;
	cursor: pointer;
	box-sizing: border-box;
	// 屏蔽移动端点击出现蓝色阴影
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.switch:before {
	content: " ";
	position: absolute;
	top: 0;
	left: 0;
	width: 0.5rem;
	height: 0.28rem;
	border-radius: 0.14rem;
	background: rgb(233, 233, 233);
	transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
}

.switch:after {
	content: " ";
	position: absolute;
	left: 0.02rem;
	top: 50%;
	width: 0.25rem;
	height: 0.25rem;
	margin-top: -25%;
	border-radius: 0.14rem;
	background: rgba(255, 255, 255);
	box-shadow: 0 0.01rem 0.03rem rgba(0, 0, 0, 0.42);
	transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
}

.switch-on:before {
	background: rgba(117, 89, 255);
}

.switch-on:after {
	transform: translateX(0.22rem);
}
</style>
