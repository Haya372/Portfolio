<template>
  <v-app>
    <Header />
    <div class="wrapper">
      <router-view />
    </div>
  </v-app>
</template>

<script>
import Header from './components/Header';

export default {
  name: "App",
  components: { Header },
}
</script>

<style scoped>
.wrapper {
  margin: 16px 16px 0;
  flex-grow: 1;
}
</style>