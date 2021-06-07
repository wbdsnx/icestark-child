<template>
	<div class="course-intro">
		<div class="item">
			<div class="label">课程名称</div>
			<div class="value">{{intro.title}}</div>
		</div>
		<div class="item">
			<div class="label">课程简介</div>
			<div class="value">{{intro.introduce}}</div>
		</div>
		<div class="item">
			<div class="label">专家</div>
			<div class="expert flex-col">
				<div class="flex-row alicent">
					<a-avatar :src="intro.expertAvatar" />
					<span class="name">{{intro.expertName}}</span>
					<a-button class="follow-btn">
						<a-icon type="plus" />
						关注
					</a-button>
				</div>
				<div class="flex-row">
					<span class="value">学科专业</span>
					<span class="value">{{intro.major}}</span>
					<span class="value">学历及学位</span>
					<span class="value">{{intro.educationLevel}}</span>
					<span class="value">职称</span>
					<span class="value">{{intro.jobTitle}}</span>
					<span class="value">职称</span>
					<span class="value">{{intro.jobPosition}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'course-intro',
		props: {
			intro: {
				type: Object,
				default: () => {}
			}
		},
		data() {
			return {}
		}
	}
</script>

<style lang="less">
	.course-intro {
		margin-top: 0.16rem;

		.item {
			margin-bottom: 0.42rem;

			.label {
				font-weight: 500;
				color: #000;

			}

			.value {
				margin-top: 0.16rem;
				color: rgba(0, 0, 0, 0.45)
			}

			.expert {
				padding-top: 0.16rem;

				.ant-avatar {
					width: 0.6rem;
					height: 0.6rem;
					margin-right: 0.16rem;
				}

				.name {
					font-size: 18px;
					font-weight: 500;
					color: #000;
					margin-right: 0.48rem;
				}

				.follow-btn {
					background: @bgColor;
					color: #FFF;
					border: none;
				}
			}
		}
	}
</style>
