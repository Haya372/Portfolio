<template>
  <div class="mt-4">
    <v-footer color="primary">
      <div class="footer-content">
        <v-row justify="center">
          <v-col>
            <v-btn
              icon
              small
              :href="sns.twitter.link"
              color="white"
              dark
            >
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              icon
              small
              :href="sns.github.link"
              color="black"
              dark
            >
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              text
              small
              :href="sns.atcoder.link"
              color="white"
            >
              Atcoder
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-footer>
  </div>
</template>

<script>
import profile from '../configs/profile';

export default {
  name: "Footer",
  data() {
    return {
      sns: profile.sns
    };
  }
}
</script>
<style scoped>
.footer-content {
  max-width: 640px;
  margin: 16px auto;
}
</style>