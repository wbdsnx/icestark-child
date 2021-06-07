<template>
	<div class="expert-card">
		<div class="card flex-col betw">
			<div class="top flex-row betw alicent">
				<div class="left flex-row alicent">
					<a-avatar :src="expert.avatar" />
					<div class="name-major">
						<div class="name">{{expert.name}}</div>
						<div class="major">{{expert.major}}</div>
					</div>
				</div>
				<div class="right">
					<a-button class="follow-btn">{{expert.followStatus == 1 ?'已关注':'关注'}}</a-button>
				</div>
			</div>
			<div class="bottom flex-row betw alicent">
				<div class="fans">
					<div class="num">{{expert.fansCount}}</div>
					<div class="label">粉丝数</div>
				</div>
				<div class="ask">
					<div class="num">{{expert.askCount}}</div>
					<div class="label">咨询量</div>
				</div>
				<div class="reply">
					<div class="num">{{expert.replyCount}}</div>
					<div class="label">回复量</div>
				</div>
				<div class="rate">
					<div class="num">{{expert.replyRate}}</div>
					<div class="label">粉丝数</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import event from '@ice/stark-data'
	export default {
		name: 'expert-card',
		props: {
			expert: {
				type: Object,
				default: () => {}
			}
		},
		data() {
			return {}
		},
		methods:{
			ask(){
				event.$emit('routeChange','/expertDetail')
			}
		}
	}
</script>

<style lang="less">
	.expert-card {
		height: 1.72rem;
		background: linear-gradient(180deg, #20BF8E 0%, #03C19B 100%);
		box-shadow: 0 0.02rem 0.05rem 0.02rem rgba(202, 221, 247, 0.8);

		.card {
			padding: 0.24rem;
			width: 5.16rem;
			height: 100%;

			.top {
				.ant-avatar {
					width: 0.6rem;
					height: 0.6rem;
				}

				.name-major {
					margin-left: 0.08rem;

					.name {
						font-size: 0.22rem;
						font-weight: 500;
						color: #FFF;
					}

					.major {
						width: 1.96rem;
						height: 0.2rem;
						font-size: 0.16rem;
						color: #FFF;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
					}
				}

				.follow-btn {
					width: 1.04rem;
					height: 0.4rem;
					color: @bgColor;
					background: #FFF;
					border-radius: 0.2rem;
				}
			}

			.bottom {
				.fans,
				.ask,
				.reply,
				.rate {
					.num {
						font-size: 0.18rem;
						font-weight: 600;
						color: #FFF;
					}

					.label {
						color: rgba(255, 255, 255, 0.8);
					}
				}
			}
		}
	}
</style>
