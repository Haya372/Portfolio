<template>
  <v-app>
    <h1>This is Index page</h1>
    <ProductLayout />
  </v-app>
</template>

<script>
import ProductLayout from '../components/home/ProductLayout';
export default {
  name: "Home",
  components: { ProductLayout }
}
</script>