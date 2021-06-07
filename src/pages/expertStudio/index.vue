<template>
	<div class="expert-studio frame">
		<a-layout style="background: #FFF;">
			<a-layout-sider theme="light" collapsedWidth="60px" v-model="collapsed"
				style="height: 100vh; background: #F5F5F5;">
				<a-menu mode="inline" @click="menuClicked" style="height: 100vh;background: #F5F5F5;border: none;">
					<template v-for="(menu,iindex) in menus">
						<a-menu-item class="menu flex-row alicent" title="" :key="menu.url">
							<span>
								<img class="nav-icon" v-if="menu.icon" :src="menu.icon" alt="">
							</span>
							<span v-if="!collapsed">{{menu.title}}</span>
						</a-menu-item>
					</template>
				</a-menu>
				<span class="slide-btn" @click="triggerCollapsed">
					<a-icon v-if="collapsed" type="right" />
					<a-icon v-else type="left" />
				</span>
			</a-layout-sider>
			<a-layout-content>
				<router-view class="page"></router-view>
			</a-layout-content>
		</a-layout>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				menus: [{
						title: '专家工作台',
						url: '/expertStudio/'
					},
					{
						title: '直播管理',
						icon: require('@/assets/icon/live-menu.png'),
						url: '/expertStudio/live'
					},
					{
						title: '课程管理',
						icon: require('@/assets/icon/course-menu.png'),
						url: '/expertStudio/course'
					},
					{
						title: '文章管理',
						icon: require('@/assets/icon/article-menu.png'),
						url: '/expertStudio/article'
					}
				],
				collapsed: false
			}
		},
		methods: {
			menuClicked: function(data) {
				this.$router.push({
					path: data.key,
				})
			},
			triggerCollapsed: function() {
				this.collapsed = !this.collapsed
			},
		}
	}
</script>

<style lang="less">
	.expert-studio {
		margin-top: 0.24rem;

		.studio {
			width: 2.08rem;
			height: 0.48rem;
			font-size: 0.16rem;
			font-weight: 500;
			color: #333333;
		}

		.menu:first-child {
			height: 0.48rem;
			border-bottom: 0.01rem solid rgba(222, 222, 222, 1);
			font-size: 16px !important;
			font-weight: 500 !important;
			color: #333333;
		}

		.menu {
			margin-bottom: 0 !important;
			padding-left: 0.24rem !important;
		}

		.menu::after {
			display: none;
		}

		.menu:hover {
			color: #000;
			background: #DEDEDE;
		}

		.ant-menu-inline-collapsed {
			width: 0.6rem;
		}

		.ant-menu-item-selected {
			background: #DEDEDE !important;
			color: #000;
			font-weight: 500;
		}

		.nav-icon {
			height: 0.16rem;
			width: 0.16rem;
			margin-right: 0.16rem;
		}

		.slide-btn {
			position: absolute;
			top: calc(50% - 0.32rem);
			// left: 60px;
			right: -0.18rem;
			z-index: 9;
			padding: 0;
			border-width: 0.09rem 0 0.09rem 0.2rem;
			border-color: transparent transparent transparent #ebebeb;
			background: none;
			width: 0;
			height: 0.64rem;
			line-height: 0.46rem;
			color: #c1c1c1;
			border-style: solid;
			cursor: pointer;

			i {
				position: relative;
				left: -0.15rem;
				width: 0.12rem;
			}
		}

		.page {
			margin-left: 0.2rem;
			background: #FFF;
			height: 100%;

		}
	}
</style>
