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
  margin: 16px auto;
  flex-grow: 1;
  text-align: center;
  max-width: 820px;
}
</style>