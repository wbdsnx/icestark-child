<template>
	<div class="my-msgs box">
		<a-tabs type="card" @change="onTabChange">
			<a-tab-pane v-for="(tab,index) in tabs" :key="index" :tab="tab" />
		</a-tabs>
		<n-msg v-for="(msg,index) in msgs" :key="index" :msg="msg" />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				msgs: [],
				tabs: ["系统", "求助", "直播", "新活动"]
			}
		},
		watch: {
			current: {
				handler: function(val) {
					if (val == 0) {
						//系统消息
						this.msgs = [{
								title: '系统消息',
								content: '红心火龙果，原本属于热带生长的水果，2017 年，泸州市纳溪区弘旭农业有限公司把它引进常年平均气温较低的安富街道三江村进行大棚试种。如今，历经三年的精心管护，试种的30亩火龙果全面挂果，亩产量可达500公斤，按目前平均 20 元/公斤计，亩收入可达1万元。泛红的火龙果让龙文友倍感欣',
								dateTime: '2020-11-13 12:11:10'
							}, {
								title: '系统消息',
								content: '红心火龙果，原本属于热带生长的水果，2017 年，泸州市纳溪区弘旭农业有限公司把它引进常年平均气温较低的安富街道三江村进行大棚试种。如今，历经三年的精心管护，试种的30亩火龙果全面挂果，亩产量可达500公斤，按目前平均 20 元/公斤计，亩收入可达1万元。泛红的火龙果让龙文友倍感欣',
								dateTime: '2020-11-13 12:11:10'
							},
							{
								title: '系统消息',
								content: '红心火龙果，原本属于热带生长的水果，2017 年，泸州市纳溪区弘旭农业有限公司把它引进常年平均气温较低的安富街道三江村进行大棚试种。如今，历经三年的精心管护，试种的30亩火龙果全面挂果，亩产量可达500公斤，按目前平均 20 元/公斤计，亩收入可达1万元。泛红的火龙果让龙文友倍感欣',
								dateTime: '2020-11-13 12:11:10'
							},
							{
								title: '系统消息',
								content: '红心火龙果，原本属于热带生长的水果，2017 年，泸州市纳溪区弘旭农业有限公司把它引进常年平均气温较低的安富街道三江村进行大棚试种。如今，历经三年的精心管护，试种的30亩火龙果全面挂果，亩产量可达500公斤，按目前平均 20 元/公斤计，亩收入可达1万元。泛红的火龙果让龙文友倍感欣',
								dateTime: '2020-11-13 12:11:10'
							}
						]
					} else if (val == 1) {
						//求助消息
						this.msgs = [{
								title: '求助消息',
								content: '红心火龙果，原本属于热带生长的水果，2017 年，泸州市纳溪区弘旭农业有限公司把它引进常年平均气温较低的安富街道三江村进行大棚试种。如今，历经三年的精心管护，试种的30亩火龙果全面挂果，亩产量可达500公斤，按目前平均 20 元/公斤计，亩收入可达1万元。泛红的火龙果让龙文友倍感欣',
								dateTime: '2020-11-13 12:11:10'
							}, {
								title: '求助消息',
								content: '红心火龙果，原本属于热带生长的水果，2017 年，泸州市纳溪区弘旭农业有限公司把它引进常年平均气温较低的安富街道三江村进行大棚试种。如今，历经三年的精心管护，试种的30亩火龙果全面挂果，亩产量可达500公斤，按目前平均 20 元/公斤计，亩收入可达1万元。泛红的火龙果让龙文友倍感欣',
								dateTime: '2020-11-13 12:11:10'
							},
							{
								title: '求助消息',
								content: '红心火龙果，原本属于热带生长的水果，2017 年，泸州市纳溪区弘旭农业有限公司把它引进常年平均气温较低的安富街道三江村进行大棚试种。如今，历经三年的精心管护，试种的30亩火龙果全面挂果，亩产量可达500公斤，按目前平均 20 元/公斤计，亩收入可达1万元。泛红的火龙果让龙文友倍感欣',
								dateTime: '2020-11-13 12:11:10'
							},
							{
								title: '求助消息',
								content: '红心火龙果，原本属于热带生长的水果，2017 年，泸州市纳溪区弘旭农业有限公司把它引进常年平均气温较低的安富街道三江村进行大棚试种。如今，历经三年的精心管护，试种的30亩火龙果全面挂果，亩产量可达500公斤，按目前平均 20 元/公斤计，亩收入可达1万元。泛红的火龙果让龙文友倍感欣',
								dateTime: '2020-11-13 12:11:10'
							}
						]
					} else if (val == 2) {
						//直播消息
						this.msgs = [{
								title: '直播消息',
								content: '红心火龙果，原本属于热带生长的水果，2017 年，泸州市纳溪区弘旭农业有限公司把它引进常年平均气温较低的安富街道三江村进行大棚试种。如今，历经三年的精心管护，试种的30亩火龙果全面挂果，亩产量可达500公斤，按目前平均 20 元/公斤计，亩收入可达1万元。泛红的火龙果让龙文友倍感欣',
								dateTime: '2020-11-13 12:11:10'
							}, {
								title: '直播消息',
								content: '红心火龙果，原本属于热带生长的水果，2017 年，泸州市纳溪区弘旭农业有限公司把它引进常年平均气温较低的安富街道三江村进行大棚试种。如今，历经三年的精心管护，试种的30亩火龙果全面挂果，亩产量可达500公斤，按目前平均 20 元/公斤计，亩收入可达1万元。泛红的火龙果让龙文友倍感欣',
								dateTime: '2020-11-13 12:11:10'
							},
							{
								title: '直播消息',
								content: '红心火龙果，原本属于热带生长的水果，2017 年，泸州市纳溪区弘旭农业有限公司把它引进常年平均气温较低的安富街道三江村进行大棚试种。如今，历经三年的精心管护，试种的30亩火龙果全面挂果，亩产量可达500公斤，按目前平均 20 元/公斤计，亩收入可达1万元。泛红的火龙果让龙文友倍感欣',
								dateTime: '2020-11-13 12:11:10'
							},
							{
								title: '直播消息',
								content: '红心火龙果，原本属于热带生长的水果，2017 年，泸州市纳溪区弘旭农业有限公司把它引进常年平均气温较低的安富街道三江村进行大棚试种。如今，历经三年的精心管护，试种的30亩火龙果全面挂果，亩产量可达500公斤，按目前平均 20 元/公斤计，亩收入可达1万元。泛红的火龙果让龙文友倍感欣',
								dateTime: '2020-11-13 12:11:10'
							}
						]
					} else {
						//新活动消息
						this.msgs = [{
								title: '新活动消息',
								content: '红心火龙果，原本属于热带生长的水果，2017 年，泸州市纳溪区弘旭农业有限公司把它引进常年平均气温较低的安富街道三江村进行大棚试种。如今，历经三年的精心管护，试种的30亩火龙果全面挂果，亩产量可达500公斤，按目前平均 20 元/公斤计，亩收入可达1万元。泛红的火龙果让龙文友倍感欣',
								dateTime: '2020-11-13 12:11:10'
							}, {
								title: '新活动消息',
								content: '红心火龙果，原本属于热带生长的水果，2017 年，泸州市纳溪区弘旭农业有限公司把它引进常年平均气温较低的安富街道三江村进行大棚试种。如今，历经三年的精心管护，试种的30亩火龙果全面挂果，亩产量可达500公斤，按目前平均 20 元/公斤计，亩收入可达1万元。泛红的火龙果让龙文友倍感欣',
								dateTime: '2020-11-13 12:11:10'
							},
							{
								title: '新活动消息',
								content: '红心火龙果，原本属于热带生长的水果，2017 年，泸州市纳溪区弘旭农业有限公司把它引进常年平均气温较低的安富街道三江村进行大棚试种。如今，历经三年的精心管护，试种的30亩火龙果全面挂果，亩产量可达500公斤，按目前平均 20 元/公斤计，亩收入可达1万元。泛红的火龙果让龙文友倍感欣',
								dateTime: '2020-11-13 12:11:10'
							},
							{
								title: '新活动消息',
								content: '红心火龙果，原本属于热带生长的水果，2017 年，泸州市纳溪区弘旭农业有限公司把它引进常年平均气温较低的安富街道三江村进行大棚试种。如今，历经三年的精心管护，试种的30亩火龙果全面挂果，亩产量可达500公斤，按目前平均 20 元/公斤计，亩收入可达1万元。泛红的火龙果让龙文友倍感欣',
								dateTime: '2020-11-13 12:11:10'
							}
						]
					}
				},
				immediate: true
			}
		},
		methods: {
			onTabChange: function(ind) {
				this.current = ind
			}
		}
	}
</script>

<style lang="less">
	.my-msgs {
		padding: 0.24rem;
		width: 11.84rem;
		margin: 0 auto;
		.ant-tabs {
			margin-top: 0.24rem;
			width: 100%;

			.ant-tab-pane {
				width: 0.9rem;
				height: 0.36rem;
			}
		}
	}
</style>
