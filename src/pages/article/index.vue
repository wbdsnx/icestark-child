<template>
	<div class="articles box flex-row wrap betw">
		<!-- style="width: 1440px;" -->
		<article-cover class="article" v-for="(article,index) in articles" :key="index" :article="article" />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				articles: [{
						id: '1',
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/04/13/a984bb03f8cb4b028fce612b6938754c.jpg',
						title: '大豆种植法养成科学城',
						readCount: 1234
					}, {
						id: '2',
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/e996da91dee641a7adf2c83b9742f518.jpg',
						title: '发VR法VG被告人不行额度',
						readCount: 23323
					}, {
						id: '3',
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/b3a2ddb21105459b9c18544d94d466be.jpg',
						title: '发热管他人提供不',
						readCount: 323434
					}, {
						id: '4',
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/8a766a965efa4e2893e75f1a1a0379de.jpg',
						title: 'vfrgtthyyb',
						readCount: 2344
					},
					{
						id: '1',
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/04/13/a984bb03f8cb4b028fce612b6938754c.jpg',
						title: '大豆种植法养成科学城',
						readCount: 1234
					}, {
						id: '2',
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/e996da91dee641a7adf2c83b9742f518.jpg',
						title: '发VR法VG被告人不行额度',
						readCount: 23323
					}, {
						id: '3',
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/b3a2ddb21105459b9c18544d94d466be.jpg',
						title: '发热管他人提供不',
						readCount: 323434
					}, {
						id: '4',
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/8a766a965efa4e2893e75f1a1a0379de.jpg',
						title: 'vfrgtthyyb',
						readCount: 2344
					},
					{
						id: '1',
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/04/13/a984bb03f8cb4b028fce612b6938754c.jpg',
						title: '大豆种植法养成科学城',
						readCount: 1234
					}, {
						id: '2',
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/e996da91dee641a7adf2c83b9742f518.jpg',
						title: '发VR法VG被告人不行额度',
						readCount: 23323
					}, {
						id: '3',
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/b3a2ddb21105459b9c18544d94d466be.jpg',
						title: '发热管他人提供不',
						readCount: 323434
					}, {
						id: '4',
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/8a766a965efa4e2893e75f1a1a0379de.jpg',
						title: 'vfrgtthyyb',
						readCount: 2344
					},
					{
						id: '1',
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/04/13/a984bb03f8cb4b028fce612b6938754c.jpg',
						title: '大豆种植法养成科学城',
						readCount: 1234
					}, {
						id: '2',
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/e996da91dee641a7adf2c83b9742f518.jpg',
						title: '发VR法VG被告人不行额度',
						readCount: 23323
					}, {
						id: '3',
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/b3a2ddb21105459b9c18544d94d466be.jpg',
						title: '发热管他人提供不',
						readCount: 323434
					}, {
						id: '4',
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/8a766a965efa4e2893e75f1a1a0379de.jpg',
						title: 'vfrgtthyyb',
						readCount: 2344
					}
				],
			}
		}
	}
</script>

<style lang="less">
	.articles {
		width: 14.4rem;
		margin: 0 auto;
		

		.article {
			margin-bottom: 0.24rem;
		}
	}
</style>
