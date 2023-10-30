<template>
  <div class="header">
    <div class="title" @click="$router.push('/')">
     <img src="@/assets/logo.png" width="80" />
    </div>
    <a-button type="normal" class="btn-download">Download CV</a-button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const name = ref('{{ Pony }}')
    return {
      name,
      navList: ['About', 'Degree', 'Work']
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: $padding * 3;
  color: $info;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    gap: 16px;
    font-size: $title-size;
    cursor: pointer;
  }

  img {
    cursor: pointer;
  }

  .btn-download {
    background: $primary;
    color: $back;
  }
}
</style>
