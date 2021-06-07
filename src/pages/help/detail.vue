<template>
	<div class="help-detail">
		<!-- 求助详情 -->
		<expert-card :expert="expertData" />
		<a-button class="ask-btn">我要求助</a-button>
		<div class="help">
			<n-help v-for="(h,index) in help.helps" :key="index" :help="h" />
			<div class="time">最后更新时间：{{help.lastUpdateTime}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				expertData: {
					id: '1',
					avatar: 'http://testweb.weemambo.com/video/%E5%BC%A0%E9%9B%84.png',
					jobTitle: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
					name: '张雄',
					level: 3,
					followStatus: 1,
					phone: '13891286006',
					workUnit: '榆林学院',
					major: '擅长农业节水研究',
					introduce: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
					fansCount: '1,234',
					askCount: '2,322',
					replyCount: '2,345',
					replyRate: '80%',
				},
				help: {
					helps: [{
						type: 1,
						content: '⽼师，你好，麻烦帮我看看我家的⼟⾖怎么样？',
						audio: '13',
						imgs: 'https://yuyang-test.oss-cn-beijing.aliyuncs.com/njkt%2Fimg%2F536b06d0769c85b2c3ff6d64000a5d54_t.gif,https://yuyang-test.oss-cn-beijing.aliyuncs.com/njkt%2Fimg%2F536b06d0769c85b2c3ff6d64000a5d54_t.gif,https://yuyang-test.oss-cn-beijing.aliyuncs.com/njkt%2Fimg%2F536b06d0769c85b2c3ff6d64000a5d54_t.gif'
					}, {
						type: 2,
						content: '⽼师，你好，麻烦帮我看看我家的⼟⾖怎么样？',
						audio: '1312312',
						imgs: 'https://yuyang-test.oss-cn-beijing.aliyuncs.com/njkt%2Fimg%2F536b06d0769c85b2c3ff6d64000a5d54_t.gif,https://yuyang-test.oss-cn-beijing.aliyuncs.com/njkt%2Fimg%2F536b06d0769c85b2c3ff6d64000a5d54_t.gif,https://yuyang-test.oss-cn-beijing.aliyuncs.com/njkt%2Fimg%2F536b06d0769c85b2c3ff6d64000a5d54_t.gif'
					}],
					lastUpdateTime: '2021-06-04 12:00:00'
				}
			}
		}
	}
</script>

<style lang="less">
	.help-detail {
		width: 14.4rem;
		margin: 0 auto;

		.ask-btn {
			margin-top: 0.24rem;
			width: 1.04rem;
			height: 0.4rem;
			background: @bgColor;
			color: #FFF;
			border: none;
			margin-bottom: 0.24rem;
		}

		.help {
			// margin-top: 0.24rem;
			width: 100%;
			padding: 0.24rem;
			background: #F5F5F5;
			
			.time{
				border-top: 0.01rem solid rgba(216, 216, 216, 1);
				padding-top: 0.24rem;
				color: rgba(0,0,0,0.3);
			}
		}

	}
</style>
