<template>
	<div class="n-filter flex-row wrap alicent">
		<span v-for="(item,key,index) in filterForm" class="filter-item">
			<span class="filter-item-label">{{item.label}}:</span>
			<span v-if="item.type == 'input'">
				<a-input v-model="item.value" :placeholder="item.placeholder"></a-input>
			</span>
			<span v-else-if="item.type == 'select'">
				<a-select v-model="item.selected" :placeholder="item.placeholder" :mode="item.multiple?'multiple':''">
					<a-select-option v-for="opt in item.options" :key="opt.name" :value="opt.value">{{opt.name}}
					</a-select-option>
				</a-select>
			</span>
			<span v-else-if="item.type == 'classify'">
				<classify-select class="classify-select" ref='classifys' @onChange="onClassifyChange" />
			</span>
			<span v-else-if="item.type == 'datePicker'">
				<a-date-picker class="date-picker" v-model="item.value" :show-time="{ }"
					:placeholder="item.placeholder" />
			</span>
			<span v-else-if="item.type == 'rangePicker'">
				<a-range-picker class="range-picker" v-model="item.value" :placeholder="item.placeholder" />
			</span>
		</span>
		<span class="tools-btn flex-row">
			<a-button v-for="(btn,index) in tools" :type="btn.type" :key="index" class="tool-btn" :style="{
				'margin-left': index != 0?'16px':'',
			}" @click="btn.onClick">

				<a-icon :type="btn.icon"/>
				{{btn.content}}
			</a-button>
		</span>
	</div>
</template>
<script>
	export default {
		name: "n-filter",
		props: {
			form: {
				type: Object,
				default: {}
			},
			tools: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				filterForm: this.form
			}
		},
		methods: {
			onClassifyChange: function(result) {
				this.filterForm.classify.value = {
					varietiesId: Number(result.varietiesId),
					phenophaseId: result.phenophaseId,
					technologyId: result.technologyId
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.n-filter {
		// width: 100%;
		padding: 0.24rem 0.24rem 0 0.24rem;
		margin-right: 0.24rem;

		.filter-item {
			margin-bottom: 0.24rem;
			margin-right: 0.88rem;

			.filter-item-label {
				// margin-right: 0.08rem;
			}

			.classify-select,
			.date-picker {
				width: 2.56rem;
			}

			.range-picker {
				width: 3.6rem;
			}


		}

		/deep/ .ant-input:not(.ant-calendar-picker-input),
		.ant-select {
			width: 2.56rem;
		}

		.tools-btn {
			margin-bottom: 0.24rem;
			// margin-right: 0.88rem;

			justify-content: right;

			.tool-btn {
				height: 0.48rem;

			}
		}
	}
</style>
