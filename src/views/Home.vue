<template>
  <div>
    <Career />
    <ProductLayout />
  </div>
</template>

<script>
import ProductLayout from '../components/home/ProductLayout';
import Career from '../components/home/Career';
export default {
  name: "Home",
  components: { ProductLayout, Career }
}
</script>