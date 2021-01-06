<template>
	<div id="app">
		<router-view class="app-view transition-fade"/>
	</div>
</template>

<style>
@import './common/style/normalize.css';
body,
html {
	height: 100%;
	width: 100%;
}
#app {
	height: 100%;
	width: 100%;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
