<template>
	<div class="n-video-player frame box">
		<div class="">
			<img class="cover" v-if="cover" :src="course.coverImg" />
			<video class="video" v-else :src="course.url" controls :poster="course.coverImg" preload></video>
		</div>
		<div class="tools flex-row alicent pad-hori-24">
			<div class="share flex-row">
				<img class="icon" src="@/assets/icon/share.png" alt="" />
				<span class="label">分享</span>
			</div>
			<div class="collect flex-row">
				<img class="icon" src="@/assets/icon/collect.png" alt="" />
				<span class="label">收藏</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'n-video-player',
		props: {
			cover: {
				type: Boolean,
				default: false //是否为封面
			},
			course: {
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
	.n-video-player {

		.cover,
		.video {
			width: 100%;
			height: 7.1rem;
		}

		.tools {
			width: 100%;
			height: 0.6rem;

			.icon {
				width: 0.32rem;
				height: 0.32rem;
			}

			.label {
				margin-left: 0.12rem;
				margin-right: 0.48rem;
				font-size: 18px;
				font-weight: 400;
				color: rgba(0, 0, 0, 0.45);
			}
		}
	}
</style>
