<template>
  <v-card min-width="200px">
    <v-img
      :src="src"
      contain
    />
    <v-card-title>
      <div class="subtitle">{{this.title}}</div>
    </v-card-title>
    <v-card-text>
      <div class="subtitle">{{sub_title}}</div>
    </v-card-text>
    <v-card-actions class="btn-overflow">
      <v-btn
        text
        color="primary"
        :href="repo ? repo : null"
        :depressed="!repo"
        :disabled="!repo"
      >
        Repository
      </v-btn>
      <v-btn
        text
        color="primary"
        :href="link ? link : null"
        :depressed="!link"
        :disabled="!link"
      >
        Product
      </v-btn>
    </v-card-actions>
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
      default: "No Title"
    },
    sub_title: {
      type: String,
      default: `This is subtitle`
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

<style scoped>
.subtitle {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.btn-overflow {
  overflow: scroll;
}
</style>