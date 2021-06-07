<template>
	<div class="article-detail frame box pad-hori-24">
		<article-content :article="article" />
	</div>
</template>

<script>
	import ArticleContent from './components/content.vue'
	export default {
		data() {
			return {
				article: {
					title: '蔬菜瓜果养殖',
					content: `<p>露从今夜白，月是故乡明</p><img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />`,
					readCount: 1234,
					fabulousCount: 1234
				}
			}
		},
		components: {
			ArticleContent
		}
	}
</script>

<style lang="less">
	.article-detail {
		margin-top: 0.24rem;

	}
</style>
