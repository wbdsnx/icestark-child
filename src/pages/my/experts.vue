<template>
	<div class="my-experts flex-row wrap">
		<expert-cover v-for="(expert,index) in experts" :key="index" class="expert" :expert="expert" />
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
				],
			}
		}
	}
</script>

<style lang="less">
	.my-experts {
		width: 12.32rem;
		margin-top: 0.24rem;

		.expert {
			margin: 0 0 0.24rem 0.24rem;
		}
	}
</style>
