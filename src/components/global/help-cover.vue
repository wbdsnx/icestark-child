<template>
	<router-link :to="{
		path:'/helpDetail'
	}">
		<div class="help-cover flex-col betw pad-hori-24">
			<div class="top flex-row betw alicent pad-vert-16">
				<div class="left flex-row alicent">
					<a-avatar :src="help.expertAvatar" />
					<span class="name">{{help.expertName}}</span>
				</div>
				<div class="right">全部 {{help.totalCount}} 条消息</div>
			</div>
			<div class="middle pad-vert-16">
				<div class="ask flex-row alicent">
					<div class="ask-label">问</div>
					<div class="ask-content">{{help.askContent}}</div>
				</div>
				<div class="answer flex-row alicent">
					<div class="answer-label">答</div>
					<div class="answer-content">{{help.answerContent}}</div>
				</div>
			</div>
			<div class="bottom pad-vert-16">
				<span>最后更新时间：{{help.lastUpdateTime}}</span>
			</div>
		</div>
	</router-link>
</template>

<script>
	export default {
		name: 'help-cover',
		data() {
			return {}
		},
		props: {
			help: {
				type: Object,
				default: () => {}
			}
		}
	}
</script>

<style lang="less">
	.help-cover {
		background: rgba(245, 245, 245, 1);

		.top {
			border-bottom: 0.01rem solid rgba(216, 216, 216, 1);

			.left {
				.ant-avatar {
					width: 0.24rem;
					height: 0.24rem;
				}

				.name {
					margin-left: 0.08rem;
					font-weight: 500;
					color: #000;
				}
			}

			.right {
				color: rgba(0, 0, 0, 0.3);
			}
		}

		.middle {
			border-bottom: 0.01rem solid rgba(216, 216, 216, 1);

			.ask {
				.ask-label {
					background: rgba(71, 203, 137, 1);
					text-align: center;
					color: #FFF;
					width: 0.2rem;
					height: 0.2rem;
				}

				.ask-content {
					font-size: 500;
					color: #000;
					margin-left: 0.08rem;
					width: 3.4rem;
					height: 0.2rem;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}

			.answer {
				margin-top: 0.16rem;

				.answer-label {
					background: rgba(255, 128, 0, 1);
					text-align: center;
					color: #FFF;
					width: 0.2rem;
					height: 0.2rem;
				}

				.answer-content {
					color: rgba(0, 0, 0, 0.45);
					margin-left: 0.08rem;
					width: 3.4rem;
					height: 0.2rem;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
		}

		.bottom {
			color: rgba(0, 0, 0, 0.3);
		}
	}
</style>
