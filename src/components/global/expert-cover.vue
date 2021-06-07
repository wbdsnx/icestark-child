<template>
	<router-link :to="{
		path:'/expertDetail'
	}" tag="div">
		<div class="expert-cover flex-col betw pad-hori-24 pad-vert-16">
			<div class="top flex-row">
				<div class="left">
					<a-avatar :src="expert.avatar"></a-avatar>
				</div>
				<div class="right flex-col betw alistart">
					<div class="top flex-row betw">
						<div class="name-job">{{expert.name}}-{{expert.jobTitle}}</div>
						<router-link class="detail" to="">查看详情</router-link>
					</div>
					<div class="intro">
						{{expert.introduce}}
					</div>
				</div>
			</div>
			<div class="middle flex-row betw">
				<div class="flex-col ">
					<span class="num">{{expert.fansCount}}</span>
					<span class="label">粉丝数</span>
				</div>
				<div class="flex-col alicent">
					<span class="num">{{expert.askCount}}</span>
					<span class="label">咨询量</span>
				</div>
				<div class="flex-col alicent">
					<span class="num">{{expert.replyCount}}</span>
					<span class="label">回复量</span>
				</div>
				<div class="flex-col alicent">
					<span class="num">{{expert.replyRate}}</span>
					<span class="label">回复率</span>
				</div>
			</div>
			<div class="bottom">
				<a-button class='ask-btn' @click="ask()">去提问</a-button>
			</div>
		</div>
	</router-link>
</template>

<script>
		import event from '@ice/stark-data'
		import {isInIcestark} from '@ice/stark-app'
	export default {
		name: 'expert-cover',
		data() {
			return {}
		},
		props: {
			expert: {
				type: Object,
				default: () => {}
			}
		},
		methods: {
			ask() {
				if(isInIcestark){
					event.$emit('routeChange', '/expertDetail')
				}else{
					this.$router.push('/expertDetail')
				}
			}
		}
	}
</script>

<style lang="less">
	.expert-cover {
		background-color: rgba(245, 245, 245, 1);
		width: 4.16rem;
		height: 1.92rem;

		.top {
			.left {
				.ant-avatar {
					width: 0.42rem;
					height: 0.42rem;
				}
			}

			.right {
				margin-left: 0.08rem;

				.top {
					width: 3.18rem;

					.name-job {
						width: 2.17rem;
						height: 0.2rem;
						text-overflow: ellipsis;
						white-space: nowrap;
						overflow: hidden;
						color: #000;
						font-weight: 500;
					}

					.detail {
						color: @bgColor;
					}
				}

				.intro {
					width: 2.81rem;
					height: 0.2rem;
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
					font-size: 0.12rem;
					color: rgba(0, 0, 0, 0.65);
				}
			}
		}

		.middle {
			width: 100%;

			.num {
				color: rgba(255, 106, 0, 1);
			}

			.label {
				color: rgba(178, 178, 178, 1);
			}
		}

		.bottom {
			.ask-btn {
				width: 3.68rem;
				height: 0.4rem;
				background: rgba(0, 0, 0, 0);
				border-radius: 20px;
				border: 0.01rem solid @bgColor;
				color: @bgColor;
			}
		}

	}
</style>
