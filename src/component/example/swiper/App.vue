<template>
	<div class="example">
		<z-swiper :count="3">
			<slot slot="swiper-item" v-for="(item, index) in swiperData">
				<div :key="index" style="width:100%;height: 200px;overflow: hidden;">
					<img :src="item.src" width="100%" />
				</div>
			</slot>
		</z-swiper>
	</div>
</template>

<script lang="ts">
import { toRefs, defineComponent, reactive } from "@vue/composition-api";
export default defineComponent({
	name: "Swiper",
	setup() {
		const state = reactive({
			swiperData: [
				{
					src:
						"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa1.att.hudong.com%2F62%2F02%2F01300542526392139955025309984.jpg&refer=http%3A%2F%2Fa1.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611759953&t=2a1c2f1a95feb98890a4c2b11637629c",
				},
				{
					src:
						"https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/w%3d580/sign=76ba00b1be096b6381195e583c318733/28a3b451f81986184a86281a4aed2e7389d4e6a0.jpg",
				},
				{
					src:
						"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg",
				},
			],
		});

		return {
			...toRefs(state)
		};
	},
});
</script>

<style lang="less" scopd>
.example {
	position: relative; 
    left: 50%; 
    top: 50%;
    transform: translate(-50%, -50%);
}
</style>

