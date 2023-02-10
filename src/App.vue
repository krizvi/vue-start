<template>
  <MyNavBar/>
  <router-view/>
</template>

<style>
@import "styles.css";
</style>
<script>
import MyNavBar from "@/components/MyNavBar.vue";

export default {
  components: {MyNavBar}
}
</script>
