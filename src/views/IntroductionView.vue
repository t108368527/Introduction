<template>
  <IntroHeaderLayout></IntroHeaderLayout>
  <div class="content">
    <swiper :navigation="true" :modules="modules" class="mySwiper">
      <swiper-slide><IntroAboutItem></IntroAboutItem></swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'
// import required modules
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
// Layout
import IntroHeaderLayout from '@/components/layouts/IntroHeaderLayout.vue'
// views
import IntroAboutItem from '@/components/IntroAboutItem.vue'

export default {
  components: { Swiper, SwiperSlide, IntroHeaderLayout, IntroAboutItem },
  setup() {
    const onSwiper = (swiper: any) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      IntroAboutItem,
      modules: [Navigation]
    }
  }
}
</script>

<style lang="scss">
.content {
  margin: $margin * 5 $margin * 3;
}
</style>
