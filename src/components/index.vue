<template>
	<swiper :options="swiperOption">
		<swiper-slide v-for="(items, index) in swiperList" :key="index"> <img :src="items"/></swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>

<script>
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.min.css';
	export default {
		data() {
			return {
				swiperList: ["./static/img/bg.jpeg", "./static/img/bg.jpeg", "./static/img/bg.jpeg", "./static/img/bg.jpeg", "./static/img/bg.jpeg", "./static/img/bg.jpeg"],
				swiperOption: {
					direction: 'vertical',
					pagination: '.swiper-pagination',
					paginationClickable: true,
					slidesPerView: 1,
//					spaceBetween: 30,
					mousewheel: true,
					mousewheelControl: true,
					observer: true,
					observeParents: true,
					resistanceRatio: 0,
					setWrapperSize: true,
				}
			}
		},
		mounted() {
		}
	}
</script>

<style scoped >
	.swiper-container {
		width: 80%;
		height: 900px;
	}
	img {
		width: 100%;
		height: 100%;
	}
</style>