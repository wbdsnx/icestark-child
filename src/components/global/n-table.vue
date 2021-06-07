<template>
	<div class="n-table">
		<a-table size="middle" :columns="columns" :data-source="dataSource"
			:pagination="showPagination ? pagination : false" :row-selection="rowSelection">
			<span slot="img" slot-scope="img">
				<img class="cover" v-for="image in img" :src="image" width="42px" height="42px" alt="" />
			</span>
			<span slot="classify" slot-scope="tags">
				<a-tag v-for="tag in tags" :key="tag">{{ tag }}</a-tag>
			</span>
			<span slot="status" slot-scope="status">
				<a v-if="status.selected == 1" :href="status.uri">{{
          status.options[1]
        }}</a>
				<span v-else>{{ status.options[0] }}</span>
			</span>
			<span slot="onStatus" slot-scope="onStatus">
				{{onStatus == 1 ?'已上架':'未上架'}}
			</span>
			<span class="operation-template" style="height: 14px" slot="operation"
				slot-scope="operation, record, index">
				<span class="operation-a" v-for="(opera, ind) in operation" :key="ind">
					<a v-if="!opera.confirm" @click="opera.action(record)">{{
            opera.title
          }}</a>
					<a v-else @click="confirm(opera, record)">{{ opera.title }}</a>
					<a-divider type="vertical" v-if="ind != operation.length - 1"></a-divider>
				</span>
			</span>
		</a-table>
	</div>
</template>

<script>
	export default {
		name: "n-table",
		props: {
			columns: {
				type: Array,
				default: [],
			},
			dataSource: {
				type: Array,
				default: [],
			},
			showPagination: {
				type: Boolean,
				default: true,
			},
		},
		data() {
			return {
				pagination: {
					current: 1,
					pageSize: 10,
					total: 0,
					showSizeChanger: true,
					showQuickJumper: true,
					pageSizeOptions: ["10", "20", "30", "50"], // 这里注意只能是字符串，不能是数字
					showTotal: (total) => `共有 ${total} 条`,
					onChange: (page) => {
						console.log(page)
						this.pagination.current = page
						this.$emit('onTablePageChange', page)
					},
					onShowSizeChange: (current, pageSize) => {
						this.pagination.pageSize = pageSize;
						this.pagination.current = 1
						this.$emit('onPageSizeChange', pageSize)
					},
				},
				rowSelection: {
					onChange: (selectedRowKeys, selectedRows) => {
						this.$emit("notifySelectRows", selectedRowKeys);
					},
				},
			};
		},
		methods: {
			select: function() {
				console.log(12345);
			},

			confirm: function(opera, record, index) {
				console.log(opera);
				this.$confirm({
					destroyOnClose: true,
					centered: true,
					title: opera.confirm,
					okText: "确认",
					okType: opera.type,
					cancelText: "取消",
					onOk() {
						opera.action(record);
					},
					onCancel() {
						console.log("Cancel");
					},
				});
			},
		},
	};
</script>

<style lang="less">
	.n-table {
		img.cover{
			margin-right: 0.08rem;
		}
	}
</style>
