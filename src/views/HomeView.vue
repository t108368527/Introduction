<template>
    
    <HeaderLayout @scrollTo="scrollTo"></HeaderLayout>
    <a-row>
      <a-col :span="24">
        <AboutItem id="about"></AboutItem>
      </a-col>
      <a-col :span="24">
        <DegreeItem id="degree"></DegreeItem>
      </a-col>
      <a-col :span="24">
        <WorkItem id="work"></WorkItem>
      </a-col>
    </a-row>
</template>

<script lang="ts">
import WorkItem from '@/components/WorkItem.vue'
import DegreeItem from '@/components/DegreeItem.vue'
import AboutItem from '@/components/AboutItem.vue';
import HeaderLayout from '@/components/layouts/HeaderLayout.vue';

export default {
  components: {WorkItem, DegreeItem, AboutItem, HeaderLayout},
  methods: {
    scrollTo(this: any, section: string) {
      let ele = document.getElementById(section)
      ele?.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
</script>

<style lang="scss">
</style>
