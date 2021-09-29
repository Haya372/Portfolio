<template>
  <div>
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