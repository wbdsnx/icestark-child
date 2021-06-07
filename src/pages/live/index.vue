<template>
	<div class="lives box flex-row wrap">
		<!-- 直播列表 -->
		<live-cover v-for="(live,index) in lives" :key="index" :style="{
			'margin': index % 3 ==2 ?'0 0 24px 0':'0 24px 24px 0'
		}" :live="live" />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				lives: [{
						liveStatus: 1,
						expertName: '张雄',
						expertAvatar: 'http://testweb.weemambo.com/video/%E5%BC%A0%E9%9B%84.png',
						title: '讲述土豆种植法',
						browseCount: 123,
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/04/13/0c435dac900040cca9315a6264ea8281.jpg',
						startTime: '2021-05-24 17:33:50',
						endTime: '2021-05-24 19:33:50'
					},
					{
						liveStatus: 1,
						expertName: '艾海建',
						expertAvatar: 'http://testweb.weemambo.com/video/%E8%89%BE%E6%B5%B7%E8%88%B0.png',
						title: '讲述湖羊养殖',
						browseCount: 321,
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/04/13/a984bb03f8cb4b028fce612b6938754c.jpg',
						startTime: '2021-05-24 17:33:50',
						endTime: '2021-05-24 19:33:50'
					},
					{
						liveStatus: 1,
						expertName: '艾海建',
						expertAvatar: 'http://testweb.weemambo.com/video/%E8%89%BE%E6%B5%B7%E8%88%B0.png',
						title: '讲述湖羊养殖',
						browseCount: 321,
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/04/13/a984bb03f8cb4b028fce612b6938754c.jpg',
						startTime: '2021-05-24 17:33:50',
						endTime: '2021-05-24 19:33:50'
					},
					{
						liveStatus: 1,
						expertName: '艾海建',
						expertAvatar: 'http://testweb.weemambo.com/video/%E8%89%BE%E6%B5%B7%E8%88%B0.png',
						title: '讲述湖羊养殖',
						browseCount: 321,
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/04/13/a984bb03f8cb4b028fce612b6938754c.jpg',
						startTime: '2021-05-24 17:33:50',
						endTime: '2021-05-24 19:33:50'
					},
					{
						liveStatus: 1,
						expertName: '艾海建',
						expertAvatar: 'http://testweb.weemambo.com/video/%E8%89%BE%E6%B5%B7%E8%88%B0.png',
						title: '讲述湖羊养殖',
						browseCount: 321,
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/04/13/a984bb03f8cb4b028fce612b6938754c.jpg',
						startTime: '2021-05-24 17:33:50',
						endTime: '2021-05-24 19:33:50'
					},
					{
						liveStatus: 1,
						expertName: '艾海建',
						expertAvatar: 'http://testweb.weemambo.com/video/%E8%89%BE%E6%B5%B7%E8%88%B0.png',
						title: '讲述湖羊养殖',
						browseCount: 321,
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/04/13/a984bb03f8cb4b028fce612b6938754c.jpg',
						startTime: '2021-05-24 17:33:50',
						endTime: '2021-05-24 19:33:50'
					},
					{
						liveStatus: 1,
						expertName: '艾海建',
						expertAvatar: 'http://testweb.weemambo.com/video/%E8%89%BE%E6%B5%B7%E8%88%B0.png',
						title: '讲述湖羊养殖',
						browseCount: 321,
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/04/13/a984bb03f8cb4b028fce612b6938754c.jpg',
						startTime: '2021-05-24 17:33:50',
						endTime: '2021-05-24 19:33:50'
					},
					{
						liveStatus: 1,
						expertName: '艾海建',
						expertAvatar: 'http://testweb.weemambo.com/video/%E8%89%BE%E6%B5%B7%E8%88%B0.png',
						title: '讲述湖羊养殖',
						browseCount: 321,
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/04/13/a984bb03f8cb4b028fce612b6938754c.jpg',
						startTime: '2021-05-24 17:33:50',
						endTime: '2021-05-24 19:33:50'
					},
					{
						liveStatus: 1,
						expertName: '艾海建',
						expertAvatar: 'http://testweb.weemambo.com/video/%E8%89%BE%E6%B5%B7%E8%88%B0.png',
						title: '讲述湖羊养殖',
						browseCount: 321,
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/04/13/a984bb03f8cb4b028fce612b6938754c.jpg',
						startTime: '2021-05-24 17:33:50',
						endTime: '2021-05-24 19:33:50'
					},
					{
						liveStatus: 1,
						expertName: '艾海建',
						expertAvatar: 'http://testweb.weemambo.com/video/%E8%89%BE%E6%B5%B7%E8%88%B0.png',
						title: '讲述湖羊养殖',
						browseCount: 321,
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/04/13/a984bb03f8cb4b028fce612b6938754c.jpg',
						startTime: '2021-05-24 17:33:50',
						endTime: '2021-05-24 19:33:50'
					},
					{
						liveStatus: 1,
						expertName: '艾海建',
						expertAvatar: 'http://testweb.weemambo.com/video/%E8%89%BE%E6%B5%B7%E8%88%B0.png',
						title: '讲述湖羊养殖',
						browseCount: 321,
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/04/13/a984bb03f8cb4b028fce612b6938754c.jpg',
						startTime: '2021-05-24 17:33:50',
						endTime: '2021-05-24 19:33:50'
					}, {
						liveStatus: 1,
						expertName: '艾海建',
						expertAvatar: 'http://testweb.weemambo.com/video/%E8%89%BE%E6%B5%B7%E8%88%B0.png',
						title: '讲述湖羊养殖',
						browseCount: 321,
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/04/13/a984bb03f8cb4b028fce612b6938754c.jpg',
						startTime: '2021-05-24 17:33:50',
						endTime: '2021-05-24 19:33:50'
					}
				],
			}
		},
		mounted() {
		}
	}
</script>

<style lang="less">
	.lives{
		width: 14.4rem;
		margin: 0 auto;
	}
</style>
