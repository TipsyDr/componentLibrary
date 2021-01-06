<template>
	<div class="example">
		<z-switch v-model="val" @change="handleChange"></z-switch>
	</div>
</template>

<script lang="ts">
import { toRefs, defineComponent, reactive } from "@vue/composition-api";
import Toast from "./component/base/toast/Toast.vue";
export default defineComponent({
	name: "SwitchPage",
	setup(props, context: any) {
		const state = reactive({
			val: false
		});
		const handleChange = (val: boolean) => {
			context.root.$toast(val + '');
		};

		return {
			...toRefs(state),
			handleChange,
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