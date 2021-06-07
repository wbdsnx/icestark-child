<template>
	<div class="live-detail box frame">
		<div class="top flex-row alicent">
			<div class="left flex-row alicent">
				<div class="left">
					<img class="cover" :src="live.coverImg" alt="" />
				</div>
				<div class="right flex-col">
					<div class="right-top flex-row betw alicent">
						<div class="title">{{live.title}}</div>
						<a-button class="follow-btn">
							<a-icon type="plus" />
							关注
						</a-button>
					</div>
					<div class="middle flex-row">
						<span class="expert">{{live.expertName}}</span>
						<span class="major">{{live.major}}</span>
					</div>
					<div class="bottom flex-row betw ">
						<span>开播时间：{{live.startTime}}</span>
						<a-button class="notice-btn">
							<a-icon type="alert" />
							开播提醒
						</a-button>
					</div>
				</div>
			</div>

		</div>
		<div class="detail flex-col ">
			<div class="item flex-row">
				<div class="label">直播名称</div>
				<div class="value">{{live.title}}</div>
			</div>
			<div class="item flex-row">
				<div class="label">直播时间</div>
				<div class="value">{{live.startTime}}</div>
			</div>
			<div class="item flex-row">
				<div class="label">直播简介</div>
				<div class="value">{{live.introduce}}</div>
			</div>
			<div class="item flex-row">
				<div class="label">直播专家</div>
				<div class="value">{{live.expertName}}</div>
			</div>
			<div class="item flex-row">
				<div class="label">擅长领域</div>
				<div class="value">{{live.majorDomain}}</div>
			</div>
			<div class="item flex-row">
				<div class="label">供职单位</div>
				<div class="value">{{live.workUnit}}</div>
			</div>
			<div class="item flex-row">
				<div class="label">联系电话</div>
				<div class="value">{{live.telephone}}</div>
			</div>
			<div class="item flex-row">
				<div class="label">专家简介</div>
				<div class="value">{{live.expertIntro}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				live: {
					liveStatus: 1,
					expertName: '张雄',
					major: '擅长农业节水研究',
					expertAvatar: 'http://testweb.weemambo.com/video/%E5%BC%A0%E9%9B%84.png',
					title: '讲述土豆种植法',
					browseCount: 123,
					introduce: '冬种马铃薯（学名：Solanum tuberosum，英文：Potato）是马铃薯的一种，多年生草本。地下块茎呈圆、卵、椭圆等形，有芽眼，皮红、黄、白或紫色。地上茎呈棱形，有毛，奇数羽状复叶。聚伞花序顶生，花白、红或紫色；浆果球形，绿或紫褐色；种子肾形，黄色。',
					majorDomain: '土豆，湖羊',
					workUnit: '榆林学院',
					telephone: '18669524343',
					expertIntro: '1997年7月在西北农业大学获农学硕士学位；2003年7月毕业于西北农林科技大学，获农学博士学位。2004年进入山东农业大学作物栽培学与耕作学博士后流动站，跟随我国著名的抗旱生理专家山仑院士从事节水农业研究，2007年6月出站。',
					coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/04/13/0c435dac900040cca9315a6264ea8281.jpg',
					startTime: '2021-05-24 17:33:50',
					endTime: '2021-05-24 19:33:50'
				}
			}
		}
	}
</script>

<style lang="less">
	.live-detail {
		margin: 0 auto;
		margin-top: 0.24rem;
		padding: 0.24rem;

		.top {
			width: 100%;
			height: 2.04rem;
			background: #F5F5F5;
			padding-left: 0.36rem;

			.left {
				height: 100%;
				width: 6.8rem;

				.left {
					width: 1.56rem;
					height: 1.56rem;
					padding: 0.12rem;
					background-color: #FFF;

					img.cover {
						width: 100%;
						height: 100%;
					}
				}

				.right {
					margin-left: 0.16rem;
					width: 100%;

					.right-top {
						margin-bottom: 0.2rem;

						.title {
							font-size: 20px;
							font-weight: 500;
							color: #000;

						}

						.follow-btn {
							.ant-icon {
								width: 0.16rem;
								height: 0.16rem;
							}

							width: 1.04rem;
							height: 0.4rem;
							background: @bgColor;
							border: none;
							color: #FFF;
						}
					}

					.middle {
						margin-bottom: 0.2rem;

						.expert {
							font-weight: 500;
							color: #000;
						}

						.major {
							margin-left: 16px;
							font-weight: 400;
							color: #555555;
						}
					}

					.bottom {
						align-items: flex-end;

						.notice-btn {
							width: 1.34rem;
							height: 0.4rem;
							color: #FFF;
							background: @bgColor;
							border: none;
						}
					}
				}

			}
		}

		.detail {
			width: 100%;
			border-top: 0.01rem solid #DEDEDE;
			margin-top: 0.24rem;
			padding-top: 0.24rem;

			.item {
				margin-bottom: 0.16rem;

				.label {
					color: #555555;

					white-space: nowrap;
				}

				.value {
					margin-left: 0.4rem;
					color: #555555;
					font-weight: 500;
					line-height: 0.2rem;
				}
			}

		}
	}
</style>
