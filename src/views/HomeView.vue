<template>
  <HomeBanners/>

  <HomeCurations :curations="homeStore.homeData.curations.slice(0,2)"/>

  <AdSense ad-slot="8890992547" />

<!--  <HomePlaces/>-->

  <HomeReviews/>

  <HomeCurations :curations="homeStore.homeData.curations.slice(2,3)"/>
  <HomeCurations :curations="homeStore.homeData.curations.slice(3,6)"/>

</template>

<script setup lang="ts">
import HomeCurations from "@/components/home/HomeCurations.vue";
import HomeBanners from "@/components/home/HomeBanners.vue";
import {useHomeStore} from "@/stores/HomeStore";
import HomeReviews from "@/components/home/HomeReviews.vue";
import AdSense from "@/components/common/AdSense.vue";
// import HomePlaces from "@/components/home/HomePlaces.vue";

const homeStore = useHomeStore();



</script>

<style scoped lang="scss">


</style>