<template>
	<router-link :to="{
		path:'/liveDetail'
	}">
	<div class="live-cover .flex-col">
		<div class="top">
			<!-- 封面部分 -->
			<img class="cover" :src="live.coverImg" alt="" />
			<n-tag class="live-status" width="52px" height="24px" color="#FFF" bgColor="#20BF8E" fontSize="12px"
				title="直播中" />
			<img class="play-btn" width="51px" height="51px" src="@/assets/icon/start.png" alt="" />
			<img>
		</div>
		<div class="bottom flex-row betw alicent">
			<!-- 详细信息部分 -->
			<div class="left flex-row">
				<!-- 专家头像 -->
				<a-avatar :src="live.expertAvatar" />
				<div class="right flex-col juscent">
					<!-- 专家名称 -->
					<span>{{live.expertName}}</span>
					<!-- 直播标题 -->
					<span>{{live.title}}</span>
				</div>
			</div>
			<!-- 观看人数 或者 直播日期 -->
			<span class="browse-count">{{live.browseCount}} 人在观看</span>
		</div>
	</div>
	</router-link>
</template>

<script>
	export default {
		name: 'live-cover',
		data() {
			return {}
		},
		props: {
			live: {
				type: Object,
				/*
				width:封面宽度
				height:封面高度
				liveStatus 直播状态，
				expertName:专家名称 
				expertAvatar: 专家头像
				title 直播名称 
				browseCount 观看人数 
				coverImg 直播封面 
				startTime: 直播开始时间
				endTime 直播结束时间*/
				default: () => {}
			}
		}
	}
</script>

<style lang="less">
	.live-cover {
		border-radius: 0.04rem;
		width: 4.16rem;
		height: 3.02rem;
		.top {
			position: relative;
			width: 100%;
			height: 2.1rem;
			img.cover {
				width: 100%;
				height: 2.1rem
			}
			.live-status {
				position: absolute;
				left: 0.16rem;
				top: 0.16rem;
				width: 0.52rem;
				height: 0.24rem;
				background: @bgColor;
				border-radius: 0.26rem;
			}
			.play-btn{
				position: absolute;
				left: calc(50% - 0.255rem);
				top: calc(50% - 0.255rem);
			}
		}
		.bottom {
			height: 0.92rem;
			width: 100%;
			background: #F5F5F5;
			.left {
				.ant-avatar {
					margin-left: 0.24rem;
					width: 0.52rem;
					height: 0.52rem;
				}
				.right {
					margin-left: 0.12rem;
					span:first-child {
						font-weight: 500;
						color: #000;
					}
					span:last-child {
						color: rgba(0, 0, 0, 0.65);
						font-size: 0.12rem;
					}
				}
			}
			.browse-count {
				margin-right: 0.24rem;
				color: rgba(0, 0, 0, 0.45);
			}
		}
	}
</style>
