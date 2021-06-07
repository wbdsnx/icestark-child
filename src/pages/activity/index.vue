<template>
	<div class="activities flex-row wrap betw">
		<!-- 1440px -->
		<activity-cover class="activity" v-for="(activity,index) in activities" :key="index" :activity="activity" />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activities: [{
						id: '1',
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/11/9e17baa00bd4497597c8a8aca7710ad3.jpg',
						title: '大豆种植法养成科学城行间距解决解决军军军军或或或或或或或或或或或或或或',
						startTime: '2020-03-12 12:00',
						expertAvatar: 'http://testweb.weemambo.com/video/%E5%BC%A0%E9%9B%84.png',
						expertName: '张建',
						address: '上海国际会展中心',
						signCount: 1234
					}, {
						id: '2',
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/a0a57e3681db4005895d7ec37c5b881a.jpg',
						title: '发VR法VG被告人不行额度更丰富付付付付付付付付付付',
						startTime: '2020-03-12 12:00',
						expertAvatar: 'http://testweb.weemambo.com/video/%E5%BC%A0%E9%9B%84.png',
						expertName: '张建',
						address: '上海国际会展中心',
						signCount: 23323
					}, {
						id: '3',
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/7a5826ad09bc46c49156684b25965adf.jpg',
						title: '发热管他人提供不更丰富付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付',
						startTime: '2020-03-12 12:00',
						expertAvatar: 'http://testweb.weemambo.com/video/%E8%89%BE%E6%B5%B7%E8%88%B0.png',
						expertName: '艾海建',
						address: '上海国际会展中心',
						signCount: 323434
					}, {
						id: '4',
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/4b99a8f681304d91adc983ce28fc4f01.jpg',
						title: 'vfrgtthyyb发发发发发发付付付付付付拖错',
						startTime: '2020-03-12 12:00',
						expertAvatar: 'http://testweb.weemambo.com/video/%E6%9D%A8%E5%8D%9A%E8%BE%89.png',
						expertName: '杨博辉',
						address: '上海国际会展中心',
						signCount: 2344
					},
					{
						id: '1',
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/11/9e17baa00bd4497597c8a8aca7710ad3.jpg',
						title: '大豆种植法养成科学城行间距解决解决军军军军或或或或或或或或或或或或或或',
						startTime: '2020-03-12 12:00',
						expertAvatar: 'http://testweb.weemambo.com/video/%E5%BC%A0%E9%9B%84.png',
						expertName: '张建',
						address: '上海国际会展中心',
						signCount: 1234
					}, {
						id: '2',
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/a0a57e3681db4005895d7ec37c5b881a.jpg',
						title: '发VR法VG被告人不行额度更丰富付付付付付付付付付付',
						startTime: '2020-03-12 12:00',
						expertAvatar: 'http://testweb.weemambo.com/video/%E5%BC%A0%E9%9B%84.png',
						expertName: '张建',
						address: '上海国际会展中心',
						signCount: 23323
					}, {
						id: '3',
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/7a5826ad09bc46c49156684b25965adf.jpg',
						title: '发热管他人提供不更丰富付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付',
						startTime: '2020-03-12 12:00',
						expertAvatar: 'http://testweb.weemambo.com/video/%E8%89%BE%E6%B5%B7%E8%88%B0.png',
						expertName: '艾海建',
						address: '上海国际会展中心',
						signCount: 323434
					}, {
						id: '4',
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/4b99a8f681304d91adc983ce28fc4f01.jpg',
						title: 'vfrgtthyyb发发发发发发付付付付付付拖错',
						startTime: '2020-03-12 12:00',
						expertAvatar: 'http://testweb.weemambo.com/video/%E6%9D%A8%E5%8D%9A%E8%BE%89.png',
						expertName: '杨博辉',
						address: '上海国际会展中心',
						signCount: 2344
					},
					{
						id: '1',
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/11/9e17baa00bd4497597c8a8aca7710ad3.jpg',
						title: '大豆种植法养成科学城行间距解决解决军军军军或或或或或或或或或或或或或或',
						startTime: '2020-03-12 12:00',
						expertAvatar: 'http://testweb.weemambo.com/video/%E5%BC%A0%E9%9B%84.png',
						expertName: '张建',
						address: '上海国际会展中心',
						signCount: 1234
					}, {
						id: '2',
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/a0a57e3681db4005895d7ec37c5b881a.jpg',
						title: '发VR法VG被告人不行额度更丰富付付付付付付付付付付',
						startTime: '2020-03-12 12:00',
						expertAvatar: 'http://testweb.weemambo.com/video/%E5%BC%A0%E9%9B%84.png',
						expertName: '张建',
						address: '上海国际会展中心',
						signCount: 23323
					}, {
						id: '3',
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/7a5826ad09bc46c49156684b25965adf.jpg',
						title: '发热管他人提供不更丰富付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付',
						startTime: '2020-03-12 12:00',
						expertAvatar: 'http://testweb.weemambo.com/video/%E8%89%BE%E6%B5%B7%E8%88%B0.png',
						expertName: '艾海建',
						address: '上海国际会展中心',
						signCount: 323434
					}, {
						id: '4',
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/4b99a8f681304d91adc983ce28fc4f01.jpg',
						title: 'vfrgtthyyb发发发发发发付付付付付付拖错',
						startTime: '2020-03-12 12:00',
						expertAvatar: 'http://testweb.weemambo.com/video/%E6%9D%A8%E5%8D%9A%E8%BE%89.png',
						expertName: '杨博辉',
						address: '上海国际会展中心',
						signCount: 2344
					}
				]
			}
		}
	}
</script>

<style lang="less">
	.activities {
		width: 14.4rem;
		margin: 0 auto;

		.activity {
			margin-bottom: 0.24rem;
		}
	}
</style>
