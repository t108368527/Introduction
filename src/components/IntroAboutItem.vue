<template>
  <div class="about">
    <a-row :gutter="64">
      <a-col class="title" :span="12">
        {{ title }}
      </a-col>
      <a-col class="content" :span="12">
        <h3>{{ name }}</h3>
        <div><strong>Frontend Developer</strong></div>
        <div><strong>Sign:</strong> Archer</div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  setup() {
    const title = ref('About')
    const name = ref('{{Philip Chinag}}')
    return {
      name,
      title
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  background-color: $back;
  width: 100%;
  height: 100%;
  border-radius: $radius * 2;
  transition: all 0.3s linear;

  .title {
    margin-left: $margin * 2;
    color: $info;
    font-size: 120px;
    font-family: 'rubik';
    transition: all 0.3s linear;
  }

  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: $info;
    font-size: $describe-size;
    line-height: 1.5;
    transition: all 0.3s linear;
  }
}
</style>
