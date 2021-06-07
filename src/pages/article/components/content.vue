<template>
	<div class="article-content flex-col alistart">
		<div class="title">{{article.title}}</div>
		<div class="statistic flex-row alicent">
			<div class="tag">农技文章</div>
			<div class="read">阅读量：{{article.readCount}}人</div>
			<div class="fabulous">点赞量：{{article.fabulousCount}}人</div>
		</div>
		<div class="content" v-html="article.content"></div>
		<div class="tools flex-row alicent">
			<div class="collect flex-row">
				<img class="icon" src="@/assets/icon/collect.png" alt="" />
				<span class="label">收藏</span>
			</div>
			<div class="fabulous flex-row">
				<img class="icon" src="@/assets/icon/collect.png" alt="" />
				<span class="label">点赞</span>
			</div>
			<div class="share flex-row">
				<img class="icon" src="@/assets/icon/share.png" alt="" />
				<span class="label">分享</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'article-content',
		props: {
			article: {
				type: Object,
				default: () => {}
			},
		},
		data() {
			return {}
		},
		methods: {

		}
	}
</script>

<style lang="less">
	.article-content {
		padding-top: 0.24rem;
		.title {
			font-size: 0.18rem;
			font-weight: 500;
			color: #111111;
			margin-bottom: 0.16rem;
		}
		
		.tag,
		.read,
		.fabulous {
			color: rgba(17, 17, 17, 0.45);
		}
		.tag,.read{
			margin-right: 0.24rem;
		}
		.content{
			width: 100%;
			margin-top: 0.08rem;
			padding-bottom: 0.24rem;
			border-bottom: 0.01rem solid rgba(222, 222, 222, 1);
		}
		.tools {
			width: 100%;
			height: 0.6rem;
			
			.icon {
				width: 0.32rem;
				height: 0.32rem;
			}

			.label {
				margin-left: 0.12rem;
				margin-right: 0.48rem;
				font-size: 18px;
				font-weight: 400;
				color: rgba(0, 0, 0, 0.45);
			}
		}
	}
</style>
