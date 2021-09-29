<template>
  <div class="wrapper">
    <h1>Hello World!!</h1>
    <p>{{message}}</p>
    <router-view />
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