<template>
	<div class="lazyload-img" v-lazy>
		<img src="./img/1.png" width="100%" />
		<img src="./img/2.png" width="100%" />
		<img src="./img/3.png" width="100%" />
		<img src="./img/4.png" width="100%" />
		<img src="./img/5.png" width="100%" />
		<img src="./img/6.png" width="100%" />
		<img src="./img/7.png" width="100%" />
		<img src="./img/8.png" width="100%" />
	</div>
</template>

<script lang="ts">
import {
	toRefs,
	defineComponent,
	reactive,
	computed,
	onMounted,
	Ref,
	onBeforeUnmount,
} from "@vue/composition-api";

export default defineComponent({
	name: "LazyLoadImg",
	setup(props, context) {
		const state = reactive({

		});
		const handleClick = (evt: any) => {
			context.emit("click", evt);
		};

		onMounted(() => {});

		onBeforeUnmount(() => {});

		return {
			...toRefs(state),
			handleClick,
		};
	},
});
</script>

<style lang="less" scoped></style>
