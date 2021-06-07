<template>
	<div class="home">
		<swiper :swiper="swiper" />
		<div class="module frame flex-row betw alicent">
			<router-link tag="div" to="/live">
				<img src="@/assets/imgs/zhibo.png" />
			</router-link>
			<router-link tag="div" to="/expert">
				<img src="@/assets/imgs/zhuanjia.png" />
			</router-link>
			<router-link tag="div" to="/help">
				<img src="@/assets/imgs/wenda.png" />
			</router-link>
			<router-link tag="div" to="/course">
				<img src="@/assets/imgs/less.png" />
			</router-link>
			<router-link tag="div" to="/article">
				<img src="@/assets/imgs/artical.png" />
			</router-link>
			<router-link tag="div" to="/activity">
				<img src="@/assets/imgs/peixun.png" />
			</router-link>
		</div>
		<div class="flex-row frame betw">
			<div class="live box flex-col pad-hori-24">
				<n-card-head width="1" :value="{
				title:'直播课程',
				url:'/live'
			}" />
				<live-cover v-for="(live,index) in lives" :key="index" :style="{
					'margin-top': index == 1 ?'16px': ''
				}" :live="live" />
			</div>

			<div class="expert box flex-col pad-hori-24">
				<n-card-head width="100%" :value="{
				title:'农技专家',
				url:'/expert'
			}" />
				<expert-cover v-for="(expert,index) in experts" :key="index" :style="{
					'margin-top': index == 0 ?'': '16px'
				}" :expert="expert" />
			</div>
			<div class="help box flex-col pad-hori-24">
				<n-card-head width="100%" :value="{
				title:'求助问答',
				url:'/help'
			}" />
				<help-cover v-for="(help,index) in helps" :key="index" :style="{
					'margin-top': index == 0 ?'': '16px'
				}" :help="help" />
			</div>
		</div>

		<div class="course flex-col frame">
			<n-card-head :value="{
				title:'农技课程',
				url:'/course'
			}" />
			<div class="courses flex-row betw frame">
				<course-cover v-for="(course,index) in courses" :key="index" :course="course" />
			</div>
		</div>
		<div class="article flex-col frame">
			<n-card-head :value="{
				title:'农技文章',
				url:'/article'
			}" />
			<div class="articles flex-row frame betw">
				<article-cover v-for="(article,index) in articles" :key="index" :article="article" />
			</div>
		</div>
		<div class="activity flex-col frame">
			<n-card-head :value="{
				title:'线下活动',
				url:'/activity'
			}" />
			<div class="activities flex-row frame betw">
				<activity-cover v-for="(activity,index) in activities" :key="index" :activity="activity" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				swiper: [{
						id: 'article',
						src: '/article',
						img: 'https://files.cnhnb.com/fas-ssr/hammer/img/90b1b51.jpg'
					},
					{
						id: 'course',
						src: '/course',
						img: 'https://files.cnhnb.com/fas-ssr/hammer/img/bde6f35.jpg'
					},
					{
						id: 'activity',
						src: '/activity',
						img: 'https://files.cnhnb.com/fas-ssr/hammer/img/e670b92.jpg'
					},
					{
						id: 'help',
						src: '/help',
						img: 'https://files.cnhnb.com/fas-ssr/hammer/img/e670b92.jpg'
					},
					{
						id: 'live',
						src: '/live',
						img: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/11/81fc417641ba46748f282eca4566b02f.jpg'
					}
				],
				module: [{
						id: 'live',
						src: '/live',
						img: require('@/assets/imgs/zhibo.png')
					},
					{
						id: 'expert',
						src: '/expert',
						img: require('@/assets/imgs/zhuanjia.png')
					},
					{
						id: 'help',
						src: '/help',
						img: require('@/assets/imgs/wenda.png')
					},
					{
						id: 'course',
						src: '/course',
						img: require('@/assets/imgs/less.png')
					},
					{
						id: 'article',
						src: '/article',
						img: require('@/assets/imgs/artical.png')
					},
					{
						id: 'activity',
						src: '/activity',
						img: require('@/assets/imgs/peixun.png')
					}
				],
				lives: [{
						liveStatus: 1,
						expertName: '张雄',
						expertAvatar: 'http://testweb.weemambo.com/video/%E5%BC%A0%E9%9B%84.png',
						title: '讲述土豆种植法',
						browseCount: 123,
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/04/13/0c435dac900040cca9315a6264ea8281.jpg',
						startTime: '2021-05-24 17:33:50',
						endTime: '2021-05-24 19:33:50'
					},
					{
						liveStatus: 1,
						expertName: '艾海建',
						expertAvatar: 'http://testweb.weemambo.com/video/%E8%89%BE%E6%B5%B7%E8%88%B0.png',
						title: '讲述湖羊养殖',
						browseCount: 321,
						coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/04/13/a984bb03f8cb4b028fce612b6938754c.jpg',
						startTime: '2021-05-24 17:33:50',
						endTime: '2021-05-24 19:33:50'
					}
				],
				experts: [{
						id: '1',
						avatar: 'http://testweb.weemambo.com/video/%E5%BC%A0%E9%9B%84.png',
						jobTitle: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
						name: '张雄',
						introduce: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
						fansCount: '1,234',
						askCount: '2,322',
						replyCount: '2,345',
						replyRate: '80%'
					},
					{
						id: '1',
						avatar: 'http://testweb.weemambo.com/video/%E8%89%BE%E6%B5%B7%E8%88%B0.png',
						jobTitle: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
						name: '艾海建',
						introduce: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
						fansCount: '1,234',
						askCount: '2,322',
						replyCount: '2,345',
						replyRate: '80%'
					},
					{
						id: '1',
						avatar: 'http://testweb.weemambo.com/video/%E6%9D%A8%E5%8D%9A%E8%BE%89.png',
						jobTitle: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
						name: '杨博辉',
						introduce: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
						fansCount: '1,234',
						askCount: '2,322',
						replyCount: '2,345',
						replyRate: '80%'
					}
				],

				helps: [{
						expertAvatar: 'http://testweb.weemambo.com/video/%E5%BC%A0%E9%9B%84.png',
						expertName: '张雄',
						totalCount: 3,
						askContent: '⽼师，你好，麻烦帮我看看我家的⼟⾖怎么样？',
						answerContent: '没有，有的话也是骗⼈的。这个问题⼀定要注意！',
						lastUpdateTime: '2021-01-17'
					},
					{
						expertAvatar: 'http://testweb.weemambo.com/video/%E5%BC%A0%E9%9B%84.png',
						expertName: '张雄',
						totalCount: 3,
						askContent: '⽼师，你好，麻烦帮我看看我家的⼟⾖怎么样？',
						answerContent: '没有，有的话也是骗⼈的。这个问题⼀定要注意！',
						lastUpdateTime: '2021-01-17'
					},
					{
						expertAvatar: 'http://testweb.weemambo.com/video/%E5%BC%A0%E9%9B%84.png',
						expertName: '张雄',
						totalCount: 3,
						askContent: '⽼师，你好，麻烦帮我看看我家的⼟⾖怎么样？',
						answerContent: '没有，有的话也是骗⼈的。这个问题⼀定要注意！',
						lastUpdateTime: '2021-01-17'
					},
				],
				courses: [{
					id: '1',
					coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/932131274ce34a2486aca44a9f511094.jpg',
					title: '大豆种植法养成科学城',
					isFree: 1,
					chapterCount: 2
				}, {
					id: '2',
					coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/fc971e872d1246c0af7e6a0d1d0110fb.jpg',
					title: '通过不同一个很不同意',
					isFree: 1,
					chapterCount: 8
				}, {
					id: '3',
					coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/e996da91dee641a7adf2c83b9742f518.jpg',
					title: '沟通过不同步办公会',
					isFree: 1,
					chapterCount: 3
				}, {
					id: '4',
					coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/11/81fc417641ba46748f282eca4566b02f.jpg',
					title: 'dfchbcvgf黑板报',
					isFree: 1,
					chapterCount: 5
				}],
				articles: [{
					id: '1',
					coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/04/13/a984bb03f8cb4b028fce612b6938754c.jpg',
					title: '大豆种植法养成科学城',
					readCount: 1234
				}, {
					id: '2',
					coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/e996da91dee641a7adf2c83b9742f518.jpg',
					title: '发VR法VG被告人不行额度',
					readCount: 23323
				}, {
					id: '3',
					coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/b3a2ddb21105459b9c18544d94d466be.jpg',
					title: '发热管他人提供不',
					readCount: 323434
				}, {
					id: '4',
					coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/8a766a965efa4e2893e75f1a1a0379de.jpg',
					title: 'vfrgtthyyb',
					readCount: 2344
				}],
				activities: [{
					id: '1',
					coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/11/9e17baa00bd4497597c8a8aca7710ad3.jpg',
					title: '大豆种植法养成科学城行间距解决解决军军军军或或或或或或或或或或或或或或',
					startTime: '2020-03-12 12:00',
					expertAvatar: 'http://testweb.weemambo.com/video/%E5%BC%A0%E9%9B%84.png',
					expertName: '张建',
					address: '上海国际会展中心',
					signCount: 1234
				}, {
					id: '2',
					coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/a0a57e3681db4005895d7ec37c5b881a.jpg',
					title: '发VR法VG被告人不行额度更丰富付付付付付付付付付付',
					startTime: '2020-03-12 12:00',
					expertAvatar: 'http://testweb.weemambo.com/video/%E5%BC%A0%E9%9B%84.png',
					expertName: '张建',
					address: '上海国际会展中心',
					signCount: 23323
				}, {
					id: '3',
					coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/7a5826ad09bc46c49156684b25965adf.jpg',
					title: '发热管他人提供不更丰富付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付付',
					startTime: '2020-03-12 12:00',
					expertAvatar: 'http://testweb.weemambo.com/video/%E8%89%BE%E6%B5%B7%E8%88%B0.png',
					expertName: '艾海建',
					address: '上海国际会展中心',
					signCount: 323434
				}, {
					id: '4',
					coverImg: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/4b99a8f681304d91adc983ce28fc4f01.jpg',
					title: 'vfrgtthyyb发发发发发发付付付付付付拖错',
					startTime: '2020-03-12 12:00',
					expertAvatar: 'http://testweb.weemambo.com/video/%E6%9D%A8%E5%8D%9A%E8%BE%89.png',
					expertName: '杨博辉',
					address: '上海国际会展中心',
					signCount: 2344
				}]
			}
		}
	}
</script>

<style lang="less">
	.home {
		width: 14.4rem;
		margin: 0 auto;
		margin-top: 0.24rem;

		.module {
			display: flex;
			justify-content: space-between;

			div {
				height: 1.34rem;
				font-size: 0;
				margin: 0.24rem 0;

				img {
					width: 2.29rem;
					height: 100%;
				}
			}
		}

		.live,
		.expert,
		.help {
			width: 4.64rem;
			height: 7.64rem;
		}

		.course,
		.article,
		.activity {
			// height: 3.56rem;
			margin-top: 0.24rem;
		}
	}
</style>
