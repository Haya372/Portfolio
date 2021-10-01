<template>
  <v-app>
    <Header />
    <div class="wrapper">
      <router-view />
    </div>
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: "App",
  components: { Header, Footer },
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