<template>
	<div class="course-detail frame flex-col">
		<div class="top">
			<n-video-player :cover="true" :course="course" />
		</div>
		<div class="bottom box detail">
			<a-tabs type="card" @change="onTabChange">
				<a-tab-pane v-for="(tab,index) in tabs" :key="index" :tab="tab" />
			</a-tabs>

			<div v-if="current == 0">
				<!-- 简介 -->
				<course-intro :intro="course" />
			</div>
			<div v-else-if="current == 1">
				<!-- 目录 -->
				<course-chapters :chapters="course.chapters" />
			</div>
			<div v-else>
				<!-- 评价 -->
			</div>
		</div>
	</div>
</template>

<script>
	import CourseIntro from './components/intro.vue'
	import CourseChapters from './components/chapters.vue'
	export default {
		data() {
			return {
				course: {
					coverImg: 'https://yuyang-test.oss-cn-beijing.aliyuncs.com/njkt%2Fimg%2F%E5%9F%BA%E5%9B%B4%E8%99%BE.jpg',
					expertName: '张雄',
					expertAvatar: 'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/932131274ce34a2486aca44a9f511094.jpg',
					major: '农学',
					educationLevel: '博士研究生',
					jobTitle: '教授',
					jobPosition: '榆林学院校长助理，研究生处处长',
					title: '大田作物病虫害防治方法',
					introduce: '看社会的进步，作物特植方式发生改变，大田作物量不断增加在自遇择的过程中，大田的病虫害种也有了多的化给病虫害防治工作带来影响时阳了农业的发展防病虫害方法有农业防，化学的治，物理防治，生物防治等技术本文主要介超了新时大田作物病虫离的防治里路。',
					chapters: [{
							id: 1,
							title: '大田作物病虫害防治4大方法之一'
						},
						{
							id: 2,
							title: '大田作物病虫害防治4大方法之一'
						},
						{
							id: 3,
							title: '大田作物病虫害防治4大方法之一'
						}
					]
				},
				current: 0,
				tabs: ['简介', '目录', '评价']
			}
		},
		components: {
			CourseIntro,
			CourseChapters
		},
		methods: {
			onTabChange: function(ind) {
				this.current = ind
			}
		}
	}
</script>

<style lang="less">
	.course-detail {
		.top {
			margin-top: 0.24rem;
			margin-bottom: 0.24rem;
		}

		.bottom {
			padding: 0.24rem;

			.ant-tabs {
				width: 100%;

				.ant-tab-pane {
					width: 0.9rem;
					height: 0.36rem;
				}
			}

		}
	}
</style>
