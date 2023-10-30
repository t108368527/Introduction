<template>
  <div class="degree">
    <a-row :gutter="64">
      <a-col class="title" :span="12">
        {{ title }}
      </a-col>
      <a-col class="content" :span="12">
        <ul>
          <h4>-Frontend-</h4>
          <li>Angular</li>
          <li>Vue</li>
          <li>JavasScript</li>
          <li>TypeScript</li>
          <li>Html</li>
          <li>Tailwind</li>
          <li>Scss</li>
        </ul>
        <ul>
          <h4>-Backend-</h4>
          <li>Java</li>
          <li>Spring boot</li>
          <li>Node</li>
          <li>Nest</li>
          <li>PHP</li>
          <li>Laravel</li>
        </ul>
        <ul>
          <h4>-Others-</h4>
          <li>Ant Design</li>
          <li>Echart</li>
          <li>Git</li>
          <li>SVN</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
        </ul>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  setup() {
    const title = ref('Degree')
    return {
      title
    }
  }
}
</script>

<style lang="scss" scoped>
.degree {
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
    flex-direction: row;
    gap: $margin * 2;
    height: 250px;
    color: $info;
    font-size: $describe-size;
    line-height: 1.5;
    transition: all 0.3s linear;

    li {
      font-size: $normal-size;
    }
  }
}
</style>
