<template>
	<div class="n-tag" :style="{
		width:width,
		height:height,
		color:color,
		fontSize:fontSize,
		backgroundColor:bgColor,
		padding:padding
	}">
		{{title}}
	</div>
</template>

<script>
	export default {
		name: 'n-tag',
		props: {
			width: {
				type: String,
				default: ''
			},
			height: {
				type: String,
				default: ''
			},
			color:{
				type:String,
				default:''
			},
			bgColor: {
				type: String,
				default: '',
			},
			title: {
				type: String,
				default: ''
			},
			fontSize:{
				type:String,
				default:'14px'
			},
			padding: {
				type: String,
				default: '0 0 0 0'
			},
		},
		data() {
			return {}
		}
	}
</script>

<style lang="less">
	.n-tag {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		border-radius: 0.26rem;
		font-size: 0.14rem;
		
	}
</style>
