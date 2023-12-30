<template>
  <div class="about">
    <a-row :gutter="64">
      <a-col class="title" :span="12">
        {{ title }}
      </a-col>
      <a-col class="content" :span="12">
        <h3>{{ name }}</h3>
        <div><strong>Frontend Developer</strong></div>
        <div><strong>{{ thisYear - begainYear }} years of experience</strong></div>
        <div><strong>Contact Me : you2623t@gmail.com</strong></div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  setup() {
    const title = ref('About')
    const name = ref('{{ Philip Chinag }}')
    const begainYear = ref(2019)
    const thisYear = ref(new Date().getFullYear())
    return {
      name,
      title,
      begainYear,
      thisYear
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
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
    line-height: 2;
    transition: all 0.3s linear;
  }
}
</style>
