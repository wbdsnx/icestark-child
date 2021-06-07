<template>
	<div class="course-chapters flex-col">
		<div class="chapter flex-row alicent" v-for="(chapter,index) in chapters" :key="index"
			@click="jumpToChapterPage()">
			<img src="@/assets/icon/chapter-prefix.png" alt="" />
			<div class="index">第{{index+1}}节</div>
			<div class="title">{{chapter.title}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'course-chapters',
		props: {
			chapters: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {}
		},
		methods: {
			jumpToChapterPage() {
				console.log('11111')
				this.$router.push({
					path: '/courseChapter'
				})
			}
		}
	}
</script>

<style lang="less">
	.course-chapters {
		width: 100%;
		padding-top: 0.16rem;

		.chapter {
			margin-bottom: 0.16rem;
			margin-left: 0.08rem;

			img {
				width: 0.16rem;
				height: 0.16rem;
				margin-right: 0.02rem;
			}

			.index,
			.title {
				color: rgba(0, 0, 0, 0.45);
			}

			.index {
				margin-right: 0.08rem;
			}
		}


	}
</style>
