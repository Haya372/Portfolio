<template>
  <v-card>
    <v-img
      height="256"
      :src="src"
      contain
    />
  </v-card>
</template>
<script>
export default {
  name: "Card",
  props: {
    image_url: {
      type: String,
    },
    title: {
      type: String,
    },
    sub_title: {
      type: String,
    },
    repo: {
      type: String,
    },
    link: {
      type: String,
    }
  },
  computed: {
    src(){
      return this.image_url ? this.image_url : "/assets/no_image_logo.png";
    }
  }
}
</script>