<template>
  <div class="work" @mouseenter="mouseOver()" @mouseleave="mouseLeave()">
    <a-row :gutter="64">
      <a-col class="title" :span="12">
        {{ title }}
      </a-col>
      <a-col class="content" :span="12">
        <a-timeline>
          <a-timeline-item :color="circleColor">
            <div class="company" :class="{ enter: enter }">
              華碩電腦 <span class="eng">ASUS</span>
            </div>
            <div class="job-title" :class="{ enter: enter }">Web Engineer</div>
            <div class="since" :class="{ enter: enter }">2023/05 - now</div>
          </a-timeline-item>
          <a-timeline-item :color="circleColor">
            <div class="company" :class="{ enter: enter }">
              和碩聯合科技 <span class="eng">PEGATRON</span>
            </div>
            <div class="job-title" :class="{ enter: enter }">Full Stack Engineer</div>
            <div class="since" :class="{ enter: enter }">2020/08 - 2023/04</div>
          </a-timeline-item>
          <a-timeline-item :color="circleColor">
            <div class="company" :class="{ enter: enter }">
              未來人材 <span class="eng">Mirai</span>
            </div>
            <div class="job-title" :class="{ enter: enter }">Full Stack Engineer</div>
            <div class="since" :class="{ enter: enter }">2019/12 - 2020/07</div>
          </a-timeline-item>
          <a-timeline-item :color="circleColor">
            <div class="company" :class="{ enter: enter }">
              大同公司 <span class="eng">Tatung</span>
            </div>
            <div class="job-title" :class="{ enter: enter }">Software Engineer</div>
            <div class="since" :class="{ enter: enter }">2018/07 - 2019/11</div>
          </a-timeline-item>
        </a-timeline>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  setup() {
    const title = ref('Work')
    let circleColor = ref('#2963ff')
    let enter = ref(false)

    const mouseOver = () => {
      circleColor.value = 'orange'
      enter.value = true
    }
    const mouseLeave = () => {
      circleColor.value = '#2963ff'
      enter.value = false
    }
    return {
      title,
      circleColor,
      enter,
      mouseOver,
      mouseLeave
    }
  }
}
</script>

<style lang="scss" scoped>
.work {
  padding: $padding * 10 0;
  background-color: $back;
  width: 100%;
  height: 100%;
  border-radius: $radius * 2;
  transition: all 0.3s linear;

  .title {
    padding-left: $margin * 8 !important;
    color: $info;
    font-size: 120px;
    font-family: 'rubik';
    transition: all 0.3s linear;
  }

  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 250px;
    color: $info;
    font-size: $describe-size;
    line-height: 1.5;
    transition: all 0.3s linear;

    .ant-timeline-item-content {
      .company {
        color: $info;
        font-size: $describe-size;
        font-weight: $bold;

        .eng {
          color: $info;
          opacity: 0;
          font-weight: $bold;
          transition: all 0.3s linear;
        }

        &:hover {
          .eng {
            opacity: 1;
          }
        }
      }

      .job-title,
      .since {
        color: $info;
        font-size: $normal-size;
      }
    }
  }
}
</style>
