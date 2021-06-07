<template>
	<div class="my-courses flex-row wrap">
		<course-cover v-for="(course,index) in courses" :key="index" class="course" :course="course" />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				courses: [{
					id: '1',
					coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/932131274ce34a2486aca44a9f511094.jpg',
					title: '大豆种植法养成科学城',
					isFree: 1,
					chapterCount: 2
				}, {
					id: '2',
					coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/fc971e872d1246c0af7e6a0d1d0110fb.jpg',
					title: '通过不同一个很不同意',
					isFree: 1,
					chapterCount: 8
				}, {
					id: '3',
					coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/e996da91dee641a7adf2c83b9742f518.jpg',
					title: '沟通过不同步办公会',
					isFree: 1,
					chapterCount: 3
				}, {
					id: '4',
					coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/11/81fc417641ba46748f282eca4566b02f.jpg',
					title: 'dfchbcvgf黑板报',
					isFree: 1,
					chapterCount: 5
				}],
			}
		}
	}
</script>

<style lang="less">
	.my-courses {
		width: 12.32rem;
margin-top: 0.24rem;
		.course {
			margin: 0 0 0.24rem 0.24rem;
		}
	}
</style>
