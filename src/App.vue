<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<z-switch @change="handleChange"></z-switch>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Toast from "./component/base/toast/Toast.vue";

export default Vue.extend({
	name: "App",
	setup(props, context: any) {
    const handleChange = () => {
      context.root.$toast('toast');
    };
    return {
      handleChange
    }
  },
});
</script>
Toast

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
