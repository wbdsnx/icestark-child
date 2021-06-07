<template>
	<div class="expert-detail frame">
		<expert-card :expert="expertData" />
		<a-tabs type="card" @change="onTabChange">
			<a-tab-pane v-for="(tab,index) in tabs" :key="index" :tab="tab" />
		</a-tabs>
		<div v-if="current == 0" class="expert-helps">
			<a-button class="ask-btn">我要求助</a-button>
			<div class="flex-row wrap">
				<help-cover v-for="(help,index) in expertData.helps" :key="index" :style="{
				'margin': index % 3 ==2 ?'0 0 24px 0':'0 24px 24px 0'
		}" :help="help" />
			</div>
		</div>
		<div v-else-if="current == 1" class="expert-lives flex-row wrap">
			<live-cover v-for="(live,index) in expertData.lives" :live="live" :key="index" :style="{
				margin :index % 3 == 2 ?'0 0 24px 0':'0 24px 24px 0'
			}" />
		</div>
		<div v-else-if="current == 2" class="expert-courses flex-row wrap">
			<course-cover v-for="(course,index) in expertData.courses" :course="course" :key="index" :style="{
				margin :index % 4 == 3 ?'0 0 24px 0':'0 24px 24px 0'
			}" />
		</div>
		<div v-else class="expert-introduction">
			<div class="item">
				<div class="title">基本信息:</div>
				<div class="single-item flex-row">
					<span class="name">姓&emsp;&emsp;名:</span>
					<span class="value">{{expertData.name}}</span>
				</div>
				<div class="single-item flex-row">
					<span class="name">等&emsp;&emsp;级:</span>
					<span class="value">{{expertData.level}}</span>
				</div>
				<div class="single-item flex-row">
					<span class="name">擅长领域:</span>
					<span class="value">{{expertData.major}}</span>
				</div>
				<div class="single-item flex-row">
					<span class="name">供职单位:</span>
					<span class="value">{{expertData.workUnit}}</span>
				</div>
			</div>
			<div class="item">
				<div class="title">联系方式:</div>
				<div class="single-item flex-row">
					<span class="name">电&emsp;&emsp;话</span>
					<span class="value">{{expertData.phone}}</span>
				</div>
			</div>
			<div class="item">
				<div class="title">简&emsp;&emsp;介:</div>
				<div class="single-item flex-row">
					<span class="value">{{expertData.introduce}}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				expertData: {
					id: '1',
					avatar: 'http://testweb.weemambo.com/video/%E5%BC%A0%E9%9B%84.png',
					jobTitle: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
					name: '张雄',
					level: 3,
					followStatus: 1,
					phone: '13891286006',
					workUnit: '榆林学院',
					major: '擅长农业节水研究',
					introduce: '擅长农业节水研究擅长农业节水研究擅长农业节水研究擅长农业节水研究',
					fansCount: '1,234',
					askCount: '2,322',
					replyCount: '2,345',
					replyRate: '80%',
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
					}],
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
						},
					]
				},
				current: 0,
				tabs: ["求助", "直播", "课程", "简介"]
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
	.expert-detail {
		margin: 0 auto;
		width: 14.4rem;
		.ant-tabs {
			margin-top: 0.24rem;
			width: 100%;
			.ant-tab-pane {
				width: 0.9rem;
				height: 0.36rem;
			}
		}

		.expert-helps {
			.ask-btn {
				width: 1.04rem;
				height: 0.4rem;
				background: @bgColor;
				color: #FFF;
				border: none;
				margin-bottom: 0.24rem;
			}
		}

		.expert-introduction {
			.item {
				margin-bottom: 0.48rem;
				.title {
					color: #000;
					font-weight: 500;
					margin-bottom: 16px;
				}

				.single-item {
					margin-bottom: 0.08rem;
					color: #8E8E8E;

					.value {
						margin-left: 0.08rem;
					}
				}
			}
		}
	}
</style>
