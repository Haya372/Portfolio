<template>
  <div>
    <div class="text-h5 text-sm-h4 mb-4 text-center font-weight-bold">CAREER</div>
    <v-timeline dense>
      <v-timeline-item
        v-for="(item, idx) in careers"
        :key="idx"
        :icon="item.icon"
      >
        <v-row>
          <v-col xs="6" sm="4" md="2">
            <div>{{item.year}}</div>
          </v-col>
          <v-col xs="6" sm="8" md="10">
            <div>{{item.title}}</div>
          </v-col>
        </v-row>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import careers from '../../configs/careers';

export default {
  name: "Career",
  data() {
    return {
      careers: careers
    }
  }
}
</script>