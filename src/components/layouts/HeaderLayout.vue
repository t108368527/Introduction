<template>
  <div class="header">
    <div class="title" @click="$router.push('/')"><img src="@/assets/logo.png" width="60"> Philip Chiang</div>
    <div class="nav-bar">
      <div class="nav"  v-for="(item, index) in navList" :key="index">
        <span @click="scrollTo(item)">{{ item }}</span>
      </div>
    </div>
    <div class="language">
      <img src="@/assets/internet.png" width="30">
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    data() {
      return {
        navList: ['About', 'Degree', 'Work']
      }
    },
    methods: {
      redirectLink(this: any, url: string) {
        this.$router.push('/' + url)
      },
      scrollTo(this: any, section: string) {
        this.$emit('scrollTo', section.toLocaleLowerCase())
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
  height: 80px;
  padding: $padding * 2;
  background: $back;
  color: $info;

  .title {
    font-size: $title-size;
    cursor: pointer;
  }

  .nav-bar {
    display: flex;
    align-items: center;
    gap: $padding * 5;
    font-size: $describe-size;
    
    .nav {
      /** 下底線由左至右 */
      background-image: linear-gradient(#ffffff, $info);
      background-position: left bottom;
      background-size: 0 1px;
      background-repeat: no-repeat;
      transition:all .2s ease-in-out;

      cursor: pointer;

      &:hover {
        color: $second;
        background-size: 100% 1.5px;
      }
    }
  }
  .language {
    font-size: $describe-size;
  }

  img {
    cursor: pointer;
  }
}
</style>
