<template>
	<div class="activity-detail frame box">
		<div class="title">{{activity.title}}</div>
		<div class="item flex-row">
			<span class="label">专家:</span><span class="value">{{activity.expertName}}</span>
		</div>
		<div class="item flex-row">
			<span class="label">时间:</span><span class="value">{{activity.dateTime}}</span>
		</div>
		<div class="item flex-row">
			<span class="label">地点:</span><span class="value">{{activity.address}}</span>
		</div>
		<p class="intro">
			{{activity.intro}}
		</p>
		<img class="cover" :src="activity.coverImg" />
		<div class="item flex-row sign">
			<span class="label">已报名人数</span>
			<span class="value">{{activity.signCount}}</span>
		</div>
		<div class="tools">
			<a-button class="sign-btn">
				<a-icon type="solution" />
				我要报名</a-button>
			<a-button class="close-btn">
				<a-icon type="close-circle" />
				关闭</a-button>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				activity: {
					title: '蔬菜瓜果养殖',
					expertName: '张雄',
					dateTime: '2021-06-04 09:30:00',
					address: '国家会展中心',
					intro: '红心火龙果，原本属于热带生长的水果，2017 年，泸州市纳溪区弘旭农业有限公司把它引进常年平均气温较低的安富街道三江村进行大棚试种。如今，历经三年的精心管护，试种的30亩火龙果全面挂果，亩产量可达500公斤，按目前平均 20 元/公斤计，亩收入可达1万元。泛红的火龙果让龙文友倍感欣',
					coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/932131274ce34a2486aca44a9f511094.jpg',
					signCount: 123
				}
			}
		}
	}
</script>

<style lang="less">
	.activity-detail {
		margin-top: 0.24rem;
		padding: 0.24rem;

		.title {
			font-size: 0.18rem;
			font-weight: 500;
			color: #111111;
			margin-bottom: 0.16rem;
		}

		.item {
			margin-bottom: 0.16rem;

			.label,
			.value {
				color: rgba(17, 17, 17, 0.45);
			}

			.value {
				margin-left: 0.08rem;
			}
		}

		.sign {
			margin-top: 0.48rem;
			padding-top: 0.24rem;
			border-top: 0.01rem solid rgba(222, 222, 222, 1);
		}

		.intro {
			color: #111111;
		}

		img.cover {
			width: 6.11rem;
			height: 3.02rem;
		}
		.sign-btn {
			border: none;
			background: @bgColor;
			color: #FFF;
		}
		.close-btn{
			background: RGBA(250, 250, 250, 1);
			margin-left: 0.16rem;
		}
	}
</style>
