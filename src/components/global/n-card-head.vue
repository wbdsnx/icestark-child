<template>
	<div class="n-card-head  flex-row betw alicent" :style="{
		width:width
	}">
		<span>{{value.title}}</span>
		<!-- <router-link class="toUrl" :to="value.url">更多</router-link> -->
		<router-link class="toUrl" :to="{path:value.url}">更多</router-link>
	</div>
</template>

<script>
	export default {
		name: 'n-card-head',
		props: {
			width: {
				type: String,
				default: ''
			},
			value: {
				type: Object,
				default: () => {} //title 显示标题  //url 跳转地址
			}
		}
	}
</script>

<style lang="less">
	.n-card-head {
		height: 0.72rem;

		span {
			font-size: 0.24rem;
			font-weight: 500;
			color: #111111;
		}

		.toUrl {
			color: rgba(85, 85, 85, 0.45);
			font-size: 0.16rem;
			font-weight: 500;
		}
	}
</style>
