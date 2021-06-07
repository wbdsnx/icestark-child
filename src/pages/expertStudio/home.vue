<template>
	<div class="expert-home">
		<div class="head box flex-row alistart">
			<a-avatar class="avatar" :src="expertData.avatar" />
			<div class="right flex-col alistart">
				<div class="name">{{expertData.name}}</div>
				<div class="major flex-row">
					<span class="item" v-for="(m,index) in  expertData.major.split(',')" :key="">{{m}}</span>
				</div>
			</div>
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
					major: '擅长农业节水研究,擅长农业节水研究,擅长农业节水研究',
					introduce: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
					fansCount: '1,234',
					askCount: '2,322',
					replyCount: '2,345',
					replyRate: '80%',
				}
			}
		}
	}
</script>

<style lang="less">
	.expert-home {
		width: 100%;

		.head {
			margin-top: 0.01rem;
			width: 100%;
			padding: 0.24rem;

			.avatar {
				width: 0.6rem;
				height: 0.6rem;
				box-shadow: 0 0.02rem 0.1rem 0 rgba(0, 0, 0, 0.2);
			}

			.right {
				margin-left: 0.16rem;

				.name {
					font-size: 0.18rem;
					color: #000;
					font-weight: 500;
				}

				.major {
					margin-top: 0.12rem;
					.item {
						background: rgba(32, 191, 142, 0.05);
						padding: 0.03rem;
						color: rgba(32, 191, 142, 1);
						margin-right: 0.24rem;
					}
				}
			}
		}
	}
</style>
