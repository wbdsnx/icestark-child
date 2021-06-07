<template>
	<div class="expert-lives">
		<!-- 直播管理 -->
		<!-- 筛选器 -->
		<n-filter class="live-filter box" :form="filterForm" :tools="tools" />
		<div class="lives flex-row wrap">
			<live class="live" v-for="(live, index) in lives" :key="index" :live="live" />
		</div>
	</div>
</template>

<script>
	import Live from './components/live.vue'
	export default {
		components: {
			Live
		},
		data() {
			return {
				filterForm: {
					name: {
						label: '直播名称',
						value: '',
						placeholder: "请输入直播名称",
						type: "input",
					},
					classifys: {
						label: '直播分类',
						value: '',
						placeholder: "",
						type: "input",
					},
					liveStatus: {
						label: '直播状态',
						value: '',
						placeholder: "",
						type: "input",
					},
					createTime: {
						label: '创建日期',
						value: '',
						placeholder: "",
						type: "input",
					}
				},
				tools: [{
						content: "查询",
						icon: 'search',
						type: "primary",
						onClick: () => {}

					},
					{
						content: "重置",
						icon: 'setting',
						type: "",
						onClick: () => {},
					},
				],
				lives: [{
						liveStatus: 1,
						expertName: '张雄',
						expertAvatar: 'http://testweb.weemambo.com/video/%E5%BC%A0%E9%9B%84.png',
						title: '讲述土豆种植法',
						browseCount: 123,
						canLive: 1,
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/04/13/0c435dac900040cca9315a6264ea8281.jpg',
						startTime: '2021-05-24 17:33:50',
						endTime: '2021-05-24 19:33:50'
					},
					{
						liveStatus: 1,
						expertName: '艾海建',
						expertAvatar: 'http://testweb.weemambo.com/video/%E8%89%BE%E6%B5%B7%E8%88%B0.png',
						title: '讲述湖羊养殖讲述湖羊养殖讲述湖羊养殖讲述湖羊养殖讲述湖羊养殖讲述湖羊养殖',
						browseCount: 321,
						canLive: 0,
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
						canLive: 0,
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
						canLive: 0,
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
				]
			}
		}
	}
</script>

<style lang="less" >
	.expert-lives {
		margin-top: 0.01rem;
		.live-filter {
			
		}

		.lives {
			margin-top: 0.24rem;
			width: 100%;

			.live {
				margin-right: 0.24rem;
				margin-bottom: 0.24rem;
			}
		}
	}
</style>
