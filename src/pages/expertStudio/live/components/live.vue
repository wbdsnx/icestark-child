<template>
	<div class="live box">
		<img class="cover" :src="live.coverImg" alt="" />
		<div class="bottom flex-col pad-vert-16 pad-hori-24">
			<div class="title">{{live.title}}</div>
			<div class="dateTime">{{live.startTime}}</div>
			<div class="count-down">00:00:00</div>
			<div class="tools flex-row betw alicent">
				<router-link to="">查看详情</router-link>
				<a-button :class="[live.canLive != 1?'start-btn-dis':'start-btn']" :disabled="live.canLive != 1">
					<a-icon type="play-circle" />
					开始直播
				</a-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'live',
		props: {
			live: {
				type: Object,
				default: () => {}
			}
		},
		data() {
			return {}
		}
	}
</script>

<style lang="less">
	.live {
		width: 3.42rem;

		img.cover {
			width: 100%;
			height: 2.02rem;
		}

		.bottom {
			width: 100%;

			.title {
				width: 100%;
				font-weight: 500;
				color: #000000;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}

			.dateTime {
				margin-top: 0.08rem;
				font-size: 12px;
				color: rgba(0, 0, 0, 0.65);
			}

			.count-down {
				font-size: 12px;
				color: rgba(0, 0, 0, 0.45);

			}

			.tools {
				.start-btn {
					color: #FFF;
					background: @bgColor;
					border: none;
				}

				.start-btn-dis {
					background: rgba(235, 235, 235, 1);
					border: none;
					color: #C1C1C1;
				}
			}
		}
	}
</style>
