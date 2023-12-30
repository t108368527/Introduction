<template>
  <IntroHeaderLayout></IntroHeaderLayout>
  <div class="content">
    <swiper :navigation="true" :modules="modules" class="mySwiper">
      <swiper-slide><IntroAboutItem></IntroAboutItem></swiper-slide>
      <swiper-slide><IntroDegreeItem></IntroDegreeItem></swiper-slide>
      <swiper-slide><IntroWorkItem></IntroWorkItem></swiper-slide>
    </swiper>
  </div>
  <div class="footer">© 2023 All rights reserved</div>
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
import IntroDegreeItem from '@/components/IntroDegreeItem.vue'
import IntroWorkItem from '@/components/IntroWorkItem.vue'

export default {
  components: { Swiper, SwiperSlide, IntroHeaderLayout, IntroAboutItem, IntroDegreeItem, IntroWorkItem },
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
      IntroDegreeItem,
      IntroWorkItem,
      modules: [Navigation]
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin: 0 $margin * 3 $margin * 5 $margin * 3;
}

.footer {
  text-align: center;
}
</style>
