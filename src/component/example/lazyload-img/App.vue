<template>
	<div class="lazyload-img">
		<img class="lazy" src="@/assets/img/error.jpg" :lazy="require('@/assets/img/1.png')" width="100%" />
		<img class="lazy" src="@/assets/img/error.jpg" :lazy="require('@/assets/img/2.png')" width="100%" />
		<img class="lazy" src="@/assets/img/error.jpg" :lazy="require('@/assets/img/3.png')" width="100%" />
		<img class="lazy" src="@/assets/img/error.jpg" :lazy="require('@/assets/img/4.png')" width="100%" />
		<img class="lazy" src="@/assets/img/error.jpg" :lazy="require('@/assets/img/5.png')" width="100%" />
		<img class="lazy" src="@/assets/img/error.jpg" :lazy="require('@/assets/img/6.png')" width="100%" />
		<img class="lazy" src="@/assets/img/error.jpg" :lazy="require('@/assets/img/7.png')" width="100%" />
		<img class="lazy" src="@/assets/img/error.jpg" :lazy="require('@/assets/img/8.png')" width="100%" />
	</div>
</template>

<script lang="ts">
import {
	defineComponent,
	onMounted,
} from "@vue/composition-api";
import lazyLoad from "./lazyload";


export default defineComponent({
	name: "LazyLoadImg",
	setup() {
		onMounted(() => {
			lazyLoad({});
		});
	},
});
</script>

<style lang="less" scoped></style>
