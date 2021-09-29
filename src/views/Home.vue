<template>
  <v-app>
    <h1>This is Index page</h1>
    <Card />
  </v-app>
</template>

<script>
import Card from '../components/Card';
export default {
  name: "Home",
  components: { Card }
}
</script>