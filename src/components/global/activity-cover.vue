<template>
		<router-link :to="{path:'/activityDetail'}" tag="div">
	<div class="activity-cover box">
		<div class="top">
			<img class="cover" :src="activity.coverImg" />
		</div>
		<div class="middle">
			<div class="title">{{activity.title}}</div>
			<div class="date">{{activity.startTime}}</div>
			<div class="address">{{activity.address}}</div>
		</div>
		<div class="bottom flex-row betw alicent">
			<div class="left">
				<a-avatar :src="activity.expertAvatar" />
				<span class="expertName">{{activity.expertName}}</span>
			</div>
			<div class="right">已报名{{activity.signCount}}人</div>
		</div>
	</div>
	</router-link>
</template>

<script>
	export default {
		name: 'activity-cover',
		data() {
			return {}
		},
		props: {
			activity: {
				type: Object,
				default: () => {}
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="less">
	.activity-cover {
		width: 3.42rem;
		height: 3.46rem;

		img.cover {
			width: 100%;
			height: 2.02rem;
		}

		.middle {
			margin-top: 0.16rem;
			width: 2.94rem;
			margin-left: 0.24rem;
			margin-right: 0.24rem;

			.title {
				font-weight: 500;
				height: 0.2rem;
				color: #000;
				text-overflow: ellipsis;
				overflow: hidden;
			}

			.date {
				margin-top: 0.08rem;
				font-size: 0.12rem;
				color: rgba(0, 0, 0, 0.65);
			}

			.address {
				margin-top: 0.08rem;
				font-size: 0.12rem;
				color: rgba(0, 0, 0, 0.45);
			}
		}

		.bottom {
			margin-top: 0.08rem;
			margin-left: 0.24rem;
			margin-right: 0.24rem;

			.left {
				.ant-avatar {
					width: 0.2rem;
					height: 0.2rem;
				}

				.expertName {
					margin-left: 0.02rem;
					font-size: 0.12rem;
					color: rgba(0, 0, 0, 0.45);
				}
			}
			.right{
				font-size: 0.12rem;
				color: rgba(0, 0, 0, 0.45);
			}
		}
	}
</style>
