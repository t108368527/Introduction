<template>
  <div class="degree">
    <a-row :gutter="64">
      <a-col class="title" :span="12">
        {{ title }}
      </a-col>
      <a-col class="content" :span="12">
        <a-collapse v-model:activeKey="activeKey">
          <a-collapse-panel key="1" header="Frontend">
            <ul>
              <li>Angular</li>
              <li>Vue</li>
              <li>JavasScript</li>
              <li>TypeScript</li>
              <li>Html</li>
              <li>Tailwind</li>
              <li>Scss</li>
            </ul>
          </a-collapse-panel>
          <a-collapse-panel key="2" header="Backend">
            <ul>
              <li>Java</li>
              <li>Spring boot</li>
              <li>Node</li>
              <li>Nest</li>
              <li>PHP</li>
              <li>Laravel</li>
            </ul>
          </a-collapse-panel>
          <a-collapse-panel key="3" header="Others">
            <ul>
              <li>Ant Design</li>
              <li>Echart</li>
              <li>Git</li>
              <li>SVN</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
            </ul>
          </a-collapse-panel>
        </a-collapse>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const title = ref('Degree')
const activeKey = ref(['1'])
</script>

<style lang="scss" scoped>
.degree {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $second;
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
    letter-spacing: 1.5px;
    transition: all 0.3s linear;

    &:hover {
      color: $info;
    }
  }

  :where(.css-dev-only-do-not-override-eq3tly).ant-collapse{
    font-size: $describe-size;
  }

  &:hover {
    background-color: $second-hover;
  }

  li {
    list-style: none;
  }
}
</style>
