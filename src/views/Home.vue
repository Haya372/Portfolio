<template>
  <div>
    <Profile />
    <Career />
    <ProductLayout />
  </div>
</template>

<script>
import ProductLayout from '../components/home/ProductLayout';
import Career from '../components/home/Career';
import Profile from '../components/home/Profile';
export default {
  name: "Home",
  components: { ProductLayout, Career, Profile }
}
</script>