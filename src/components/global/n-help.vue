<template>
	<div class="n-help">
		<div v-if="help.type == 1" class="ask flex-row alistart">
			<!-- 提问 -->
			<div class="ask-label flex-row alicent">问</div>
			<div class="right">
				<div class="content">{{help.content}}</div>
				<audio v-if="help.audio != ''" :src="help.audio" />
				<div class="imgs" v-if="help.imgs != ''">
					<img class="img" v-for="(img,index) in help.imgs.split(',')" :key="index" :src="img" />
				</div>
			</div>
		</div>
		<div v-else class="answer flex-row alistart">
			<!-- 回答 -->
			<div class="answer-label flex-row alicent">答</div>
			<div class="right">
				<div class="content">{{help.content}}</div>
				<audio v-if="help.audio != ''" :src="help.audio" />
				<div class="imgs" v-if="help.imgs != ''">
					<img class="img" v-for="(img,index) in help.imgs.split(',')" :key="index" :src="img" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'n-help',
		props: {
			help: {
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
	.n-help {
		.ask {
			.ask-label {
				font-weight: 500;
				width: 0.2rem;
				height: 0.2rem;
				text-align: center;

				background: rgba(71, 203, 137, 1);
				color: #FFF;
			}

			.right {
				margin-left: 0.08rem;

				.content {
					font-weight: 500;
					color: #000;
				}

				.imgs {
					.img {
						width: 1.08rem;
						margin-right: 0.16rem;
						margin-bottom: 0.16rem;
						border-radius: 0.08rem;
					}
				}
			}
		}

		.answer {
			.answer-label {
				font-weight: 500;
				width: 0.2rem;
				text-align: center;
				height: 0.2rem;
				text-align: center;
				background: rgba(255, 128, 0, 1);
				color: #FFF;
			}

			.right {
				margin-left: 0.08rem;

				.content {
					color: rgba(0, 0, 0, 0.45);
				}

				.imgs {
					.img {
						width: 1.08rem;
						margin-right: 0.16rem;
						margin-bottom: 0.16rem;
						border-radius: 0.08rem;
					}
				}
			}
		}
	}
</style>
