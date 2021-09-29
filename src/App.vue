<template>
  <div class="wrapper">
    <v-app>
      <router-view />
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: 'hello'
    };
  }
}
</script>

<style scoped>
.wrapper {
  margin: 0 16px;
}
</style>