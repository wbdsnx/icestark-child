<template>
	<router-link :to="{path:'/articleDetail'}" tag="div">
	<div class="article-cover box">
		<div class="top">
			<img class="cover" :src="article.coverImg" />
		</div>
		<div class="middle">
			{{article.title}}
		</div>
		<div class="bottom flex-row betw">
			<span>农技文章</span>
			<span>{{article.readCount}}人阅读</span>
		</div>
	</div>
	</router-link>
</template>

<script>
	export default {
		name: 'article-cover',
		data() {
			return {}
		},
		props: {
			article: {
				type: Object,
				default: () => {}
			}
		}
	}
</script>

<style lang="less">
	.article-cover {
		width: 3.42rem;
		height: 3.1rem;
		img.cover {
			width: 3.42rem;
			height: 2.02rem;
		}

		.middle {
			font-weight: 500;
			margin-top: 0.24rem;
			width: 2.94rem;
			height: 0.4rem;
			color: #000;
			margin-left: 0.24rem;
			margin-right: 0.24rem;
			text-overflow: ellipsis;
			overflow: hidden;
		}

		.bottom {
			margin-left: 0.24rem;
			margin-right: 0.24rem;
		}
	}
</style>
