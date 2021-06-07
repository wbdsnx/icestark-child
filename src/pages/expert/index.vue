<template>
	<div class="experts box flex-row wrap pad-hori-24">
		<expert-cover v-for="(expert,index) in experts" :key="index" :style="{	
			'margin': index % 3 ==2 ?'0 0 24px 0':'0 24px 24px 0'
		}" :expert="expert" />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				experts: [{
						id: '1',
						avatar: 'http://testweb.weemambo.com/video/%E5%BC%A0%E9%9B%84.png',
						jobTitle: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
						name: '张雄',
						introduce: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
						fansCount: '1,234',
						askCount: '2,322',
						replyCount: '2,345',
						replyRate: '80%'
					},
					{
						id: '2',
						avatar: 'http://testweb.weemambo.com/video/%E8%89%BE%E6%B5%B7%E8%88%B0.png',
						jobTitle: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
						name: '艾海建',
						introduce: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
						fansCount: '1,234',
						askCount: '2,322',
						replyCount: '2,345',
						replyRate: '80%'
					},
					{
						id: '3',
						avatar: 'http://testweb.weemambo.com/video/%E6%9D%A8%E5%8D%9A%E8%BE%89.png',
						jobTitle: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
						name: '杨博辉',
						introduce: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
						fansCount: '1,234',
						askCount: '2,322',
						replyCount: '2,345',
						replyRate: '80%'
					},
					{
						id: '4',
						avatar: 'http://testweb.weemambo.com/video/%E5%BC%A0%E9%9B%84.png',
						jobTitle: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
						name: '张雄',
						introduce: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
						fansCount: '1,234',
						askCount: '2,322',
						replyCount: '2,345',
						replyRate: '80%'
					},
					{
						id: '1',
						avatar: 'http://testweb.weemambo.com/video/%E8%89%BE%E6%B5%B7%E8%88%B0.png',
						jobTitle: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
						name: '艾海建',
						introduce: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
						fansCount: '1,234',
						askCount: '2,322',
						replyCount: '2,345',
						replyRate: '80%'
					},
					{
						id: '1',
						avatar: 'http://testweb.weemambo.com/video/%E6%9D%A8%E5%8D%9A%E8%BE%89.png',
						jobTitle: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
						name: '杨博辉',
						introduce: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
						fansCount: '1,234',
						askCount: '2,322',
						replyCount: '2,345',
						replyRate: '80%'
					},
					{
						id: '1',
						avatar: 'http://testweb.weemambo.com/video/%E5%BC%A0%E9%9B%84.png',
						jobTitle: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
						name: '张雄',
						introduce: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
						fansCount: '1,234',
						askCount: '2,322',
						replyCount: '2,345',
						replyRate: '80%'
					},
					{
						id: '1',
						avatar: 'http://testweb.weemambo.com/video/%E8%89%BE%E6%B5%B7%E8%88%B0.png',
						jobTitle: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
						name: '艾海建',
						introduce: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
						fansCount: '1,234',
						askCount: '2,322',
						replyCount: '2,345',
						replyRate: '80%'
					},
					{
						id: '1',
						avatar: 'http://testweb.weemambo.com/video/%E6%9D%A8%E5%8D%9A%E8%BE%89.png',
						jobTitle: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
						name: '杨博辉',
						introduce: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
						fansCount: '1,234',
						askCount: '2,322',
						replyCount: '2,345',
						replyRate: '80%'
					},
					{
						id: '1',
						avatar: 'http://testweb.weemambo.com/video/%E5%BC%A0%E9%9B%84.png',
						jobTitle: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
						name: '张雄',
						introduce: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
						fansCount: '1,234',
						askCount: '2,322',
						replyCount: '2,345',
						replyRate: '80%'
					},
					{
						id: '1',
						avatar: 'http://testweb.weemambo.com/video/%E8%89%BE%E6%B5%B7%E8%88%B0.png',
						jobTitle: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
						name: '艾海建',
						introduce: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
						fansCount: '1,234',
						askCount: '2,322',
						replyCount: '2,345',
						replyRate: '80%'
					},
					{
						id: '1',
						avatar: 'http://testweb.weemambo.com/video/%E6%9D%A8%E5%8D%9A%E8%BE%89.png',
						jobTitle: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
						name: '杨博辉',
						introduce: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
						fansCount: '1,234',
						askCount: '2,322',
						replyCount: '2,345',
						replyRate: '80%'
					}
				],
			}
		}
	}
</script>

<style lang="less">
	.experts {
		width: 14.4rem;
		margin: 0 auto;
	}
</style>
