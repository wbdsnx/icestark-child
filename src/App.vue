<template>
	<div id="app">
		<a-config-provider :locale="locale">
			<router-view />
		</a-config-provider>
	</div>
</template>

<script>
	import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
	export default {
		data() {
			return {
				locale: zhCN,
			}
		}
	}
</script>

<style lang="less">
	* {
		font-family: PingFangSC-Regular, PingFang SC;
		// font-size: 14px;
	}

	#app {
		padding-bottom: 0.48rem;

	}

	.box {
		background: #FFF;
		box-shadow: 0 0.02rem 0.05rem 0.02rem rgba(202, 221, 247, 0.8);
	}

	.frame {
		width: 14.4rem;
		margin: 0 auto;
	}

	.flex-row {
		display: flex;
		flex-direction: row;
	}

	.betw {
		justify-content: space-between;
	}

	.alistart {
		align-items: flex-start;
	}

	.juscent {
		justify-content: center;
	}

	.pad-hori-24 {
		padding-left: 0.24rem;
		padding-right: 0.24rem;
	}

	.pad-vert-16 {
		padding-top: 0.16rem;
		padding-bottom: 0.16rem;
	}


	.alicent {
		align-items: center;
	}

	.wrap {
		flex-wrap: wrap;
	}

	.nowrap {
		flex-wrap: nowrap;
	}

	.flex-col {
		display: flex;
		flex-direction: column;
	}
</style>
