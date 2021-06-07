<template>
	<div class="swiper frame">
		<a-carousel arrows autoplay effect="fade">
			<div slot="prevArrow" class="custom-slick-arrow" style="left: 10px;zIndex: 1">
				<img src="@/assets/icon/left.png" width="100%" height="100%" />
			</div>
			<div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
				<img src="@/assets/icon/right.png" width="100%" height="100%" />
			</div>
			<router-link class="img" v-for="item in swiper" :key="item.id" tag="div" :to="item.src">
				<img :src="item.img" />
			</router-link>
		</a-carousel>
	</div>
</template>

<script>
	export default {
		name: 'swiper',
		props: {
			swiper: Array
		},
		data() {
			return {}
		}
	}
</script>

<style lang="less">
	.swiper {
		.ant-carousel {
			height: 6rem;
			.slick-slide {
				text-align: center;
				height: 6rem;
				line-height: 6rem;
				background: #364d79;
				overflow: hidden;
			}

			.custom-slick-arrow {
				width: 0.98rem;
				height: 1.24rem;
				font-size: 0.25rem;
				color: #fff;
				background-color: rgba(31, 45, 61, 0.11);
				opacity: 0.3;
				top: 50%;
				margin-top: -0.62rem;
			}

			.custom-slick-arrow:before {
				display: none;
			}

			.custom-slick-arrow:hover {
				opacity: 0.5;
			}

			.img {
				img {
					height: 6rem;
					width: 100%;
				}
			}

			.slick-dots {
				bottom: 0.26rem;

				li {
					margin: 0 0.05rem;

					button {
						width: 0.16rem;
						height: 0.16rem;
						border-radius: 50%;
					}
				}

				.slick-active {
					button {
						width: 0.42rem;
						border-radius: 0.08rem;
					}
				}
			}
		}
	}
</style>
