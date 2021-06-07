<template>
	<div class="course-chapter">
		<n-video-player :course="chapter" />
		<div class="chapter box">
			<div class="item flex-col">
				<div class="label">章节名称</div>
				<div class="value">{{chapter.title}}</div>
			</div>
			<div class="item flex-col">
				<div class="label">附件</div>
				<div class="appendixs"></div>
			</div>
			<a-input class="comment-box" type="textarea" placeholder="请输入评论" v-model="input" />
			<a-button class="send-btn">
				<a-icon type="check-circle" />
				发送
			</a-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				chapter: {
					title: '第二节 大田作物病虫害防治方法',
					appendix: '',
					coverImg: 'https://yuyang-test.oss-cn-beijing.aliyuncs.com/njkt%2Fimg%2F536b06d0769c85b2c3ff6d64000a5d54_t.gif',
				},
				input: ''
			}
		}
	}
</script>
<style lang="less">
	.course-chapter {
		width: 14.4rem;
		margin: 0 auto;
		margin-top: 0.24rem;

		.chapter {
			width: 100%;
			margin-top: 0.24rem;
			padding: 0.24rem;

			.item {
				margin-bottom: 0.48rem;

				.label {
					color: #000;
					font-size: 500;
					margin-bottom: 0.08rem;
				}

				.value {
					color: rgba(0, 0, 0, 0.45);
				}

				.appendixs {
					border-top: 0.01rem solid rgba(222, 222, 222, 1);
				}
			}

			.comment-box {
				padding: 0.24rem;
				width: 13.92rem;
				height: 1.42rem;
				background: #F6F6F6;
			}

			.send-btn {
				border: none;
				margin-top: 0.24rem;
				background: @bgColor;
				color: #FFF;
			}
		}
	}
</style>
