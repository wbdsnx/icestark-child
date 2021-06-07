<template>
	<div class="helps box flex-row wrap" style="  padding: 24px;">
		<!-- width: 1440px; -->
		<help-cover v-for="(help,index) in helps" :key="index" :style="{
				'margin': index % 3 ==2 ?'0 0 24px 0':'0 24px 24px 0'
		}" :help="help" />
	</div>
</template>

<script>
	export default {
		data() {
			return {
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
					{
						expertAvatar: 'http://testweb.weemambo.com/video/%E5%BC%A0%E9%9B%84.png',
						expertName: '张雄',
						totalCount: 3,
						askContent: '⽼师，你好，麻烦帮我看看我家的⼟⾖怎么样？',
						answerContent: '没有，有的话也是骗⼈的。这个问题⼀定要注意！',
						lastUpdateTime: '2021-01-17'
					},
				],
			}
		}
	}
</script>

<style lang="less">
	.helps{
		width: 14.4rem;
		margin: 0 auto;
	}
</style>
