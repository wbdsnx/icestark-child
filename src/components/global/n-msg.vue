<template>
	<div class="n-msg flex-col juscent">
		<!-- 消息 -->


		<div class="top flex-row betw">
			<div class="left flex-row alicent">
				<div class="read-status" v-if="msg.readStatus != 1"></div>
				<div class="title">{{msg.title}}</div>
			</div>
			<div class="date">{{msg.dateTime}}</div>
		</div>
		<div class="bottom content">
			{{msg.content}}
		</div>

	</div>
</template>

<script>
	export default {
		name: 'n-msg',
		props: {
			msg: {
				type: Object,
				default: () => {}
			}
		}
	}
</script>

<style lang="less">
	.n-msg {
		width: 100%;
		padding-top: 0.24rem;
		padding-bottom: 0.24rem;
		.top {
			.left {
				.read-status {
					background: #F5222D;
					width: 0.08rem;
					height: 0.08rem;
					border-radius: 0.08rem;
				}

				.title {
					margin-left: 0.08rem;
					font-weight: 500;
					color: rgba(0, 0, 0, 0.85);
				}
			}

			.date {
				font-size: 12px;
				color: rgba(0, 0, 0, 0.65);
			}
		}

		.content {
			margin-left: 0.16rem;
			width: 11.37rem;
			height: 0.2rem;
			font-size: 12px;
			color: rgba(0, 0, 0, 0.65);
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
</style>
