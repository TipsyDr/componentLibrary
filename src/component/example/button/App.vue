<template>
	<div class="example">
		<z-button></z-button>
	</div>
</template>

<script lang="ts">
import { toRefs, defineComponent, reactive } from "@vue/composition-api";
export default defineComponent({
	name: "App",
	setup() {
		const state = reactive({});

		return {
			...toRefs(state),
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
