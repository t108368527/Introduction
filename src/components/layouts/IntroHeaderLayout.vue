<template>
  <div class="header">
    <div class="title" @click="$router.push('/')">
     <img src="@/assets/logo.png" width="80" />
    </div>
    <a-button type="normal" class="btn-download" href=" /Introduction/src/assets/Philip_Chiang_2023CV.pdf" target="_blank">Download CV</a-button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const name = ref('{{ Pony }}')

    const downloadCV = async () => {
      // 创建一个简单的 PDF 数据（用于演示）
      const pdfPath = '../../assets/Philip_Chiang_2023CV.pdf';

      // 使用 fetch 获取文件内容
      const response = await fetch(pdfPath);
      const pdfData = await response.blob();

      // 创建下载链接
      const link = document.createElement('a');
      link.href = URL.createObjectURL(pdfData);
      link.download = 'AA.pdf';

      // 将链接添加到页面并模拟点击
      document.body.appendChild(link);
      link.click();

      // 清理链接
      document.body.removeChild(link);
    }
    return {
      name,
      navList: ['About', 'Degree', 'Work'],
      downloadCV
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
