<template>
  <div>
    <div class="text-h5 text-sm-h4 mb-4 text-center font-weight-bold">PRODUCTS</div>
    <v-row>
      <v-col
        v-for="key in Object.keys(products)"
        :key="key"
        cols="6"
        sm="4"
        md="3"
        lg="2"
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