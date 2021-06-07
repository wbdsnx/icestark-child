<template>
	<div class="expert-articles">
		<n-filter class="article-filter box" :form="filterForm" :tools="tools" />
		<n-table class="articles-table box" :columns="columns" :dataSource="articles" />
	</div>
</template>

<script>
	import {
		detail,
		statistics,
		edit,
		onShelf,
		offShelf,
		remove,
	} from "@/common/operation.js";
	import column from "@/common/column.js";

	const columns = [
		column("文章封面", "img", ),
		column("文章标题", "name", ),
		column("文章分类", "classify", ),
		column("文章状态", "onSaleStatus", ),
		column("创建时间", "createdTime", ),
		column("操作", "operation", ),
	];
	export default {
		data() {
			return {
				columns,
				articles: [{
						key: 1,
						img: [
							'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/932131274ce34a2486aca44a9f511094.jpg',
							'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/932131274ce34a2486aca44a9f511094.jpg',
							'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/932131274ce34a2486aca44a9f511094.jpg'
						],
						name: '大豆种植法养成科学城',
						onSaleStatus: '已上架',
						classify: ['土豆'],
						createdTime: '2021-06-06 12:00:00',
						operation: [
							statistics,
							detail,
							edit,
							offShelf,
							remove
						]
					},
					{
						key: 2,
						img: [
							'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/932131274ce34a2486aca44a9f511094.jpg'
						],
						name: '大豆种植法养成科学城',
						onSaleStatus: '已上架',
						classify: ['土豆'],
						createdTime: '2021-06-06 12:00:00',
						operation: [
							statistics,
							detail,
							edit,
							offShelf,
							remove
						]
					},
					{
						key: 3,
						img: [
							'https://image.cnhnb.com/image/jpg/miniapp/2021/05/18/932131274ce34a2486aca44a9f511094.jpg'
						],
						name: '大豆种植法养成科学城',
						onSaleStatus: '已上架',
						classify: ['土豆'],
						createdTime: '2021-06-06 12:00:00',
						operation: [
							statistics,
							detail,
							edit,
							offShelf,
							remove
						]
					}
				],
				filterForm: {
					name: {
						label: '文章标题',
						value: '',
						placeholder: "请输入文章标题",
						type: "input",
					},
					classifys: {
						label: '文章分类',
						value: '',
						placeholder: "",
						type: "input",
					},
					liveStatus: {
						label: '文章状态',
						value: '',
						placeholder: "",
						type: "input",
					},
					createTime: {
						label: '创建日期',
						value: '',
						placeholder: "",
						type: "input",
					}
				},
				tools: [{
						content: "查询",
						icon: 'search',
						type: "primary",
						onClick: () => {}

					},
					{
						content: "重置",
						icon: 'setting',
						type: "",
						onClick: () => {},
					},
				],
			}
		}
	}
</script>

<style lang="less">
	.expert-articles {
		margin-top: 0.01rem;

		.articles-table {
			margin-right: 0.24rem;
			margin-top: 0.24rem;
		}
	}
</style>
