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
          <v-col>
            <div>{{item.year}}</div>
          </v-col>
          <v-col>
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