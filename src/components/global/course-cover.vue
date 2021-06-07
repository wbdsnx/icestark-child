<template>
	<router-link :to="{path:'/courseDetail'}"  tag="div">
		<div class="course-cover box">
			<div class="top">
				<img class="cover" :src="course.coverImg" />
			</div>
			<div class="middle">
				{{course.title}}
			</div>
			<div class="bottom flex-row betw">
				<span>{{course.isFree == 1?'免费':'付费'}}</span>
				<span>共{{course.chapterCount}}节</span>
			</div>
		</div>
	</router-link>
</template>

<script>
	export default {
		name: 'course-cover',
		data() {
			return {}
		},
		props: {
			course: {
				type: Object,
				default: () => {}
			}
		}
	}
</script>

<style lang="less">
	.course-cover {
		width: 3.42rem;
		height: 3.1rem;

		img.cover {
			width: 100%;
			height: 2.02rem
		}

		.middle {
			font-weight: 500;
			margin-top: 0.24rem;
			width: 2.94rem;
			height: 0.4rem;
			color: #000;
			margin-left: 0.24rem;
			margin-right: 0.24rem;
			text-overflow: ellipsis;
			overflow: hidden;
		}

		.bottom {
			margin-left: 0.24rem;
			margin-right: 0.24rem;
		}
	}
</style>
