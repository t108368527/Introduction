<template>
  <div class="about">
    <a-row :gutter="64">
      <a-col class="title" :span="12">
        {{ title }}
      </a-col>
      <a-col class="content" :span="12">
        <div><strong>Name:</strong> Philip Chinag</div>
        <div><strong>Sign:</strong> Archer</div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const title = ref('About')
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $info;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s linear;

  .title {
    writing-mode: vertical-lr;
    color: $back;
    font-size: 220px;
    transition: all 0.3s linear;
    
    &:hover {
      color: $info;
    }
  }

  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: $back;
    font-size: $describe-size;
    line-height: 1.5;
    transition: all 0.3s linear;

    &:hover {
      color: $info;
    }
  }

  &:hover {
    background-color: $primary-hover;
  }
}
</style>
