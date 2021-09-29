<template>
  <div>
    <div class="text-h5 text-sm-h4 mb-4 text-center font-weight-bold">PRODUCTS</div>
    <v-row>
      <v-col
        v-for="key in Object.keys(products)"
        :key="key"
        xs="12"
        sm="6"
        md="4"
        lg="3"
      >
        <Card
          :title="products[key].title"
          :sub_title="products[key].sub_title"
          :repo="products[key].repo"
          :link="products[key].link"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import products from '../../configs/products';
import Card from './Card';

export default {
  name: "ProductLayout",
  components: { Card },
  data(){
    return {
      products: products
    };
  }
}
</script>