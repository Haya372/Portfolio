<template>
  <div>
    <div class="text-center">
      <div class="text-h5 text-sm-h4 mb-4 text-center font-weight-bold">PROFILE</div>
      <div>{{profile.profile}}</div>
    </div>
    <div class="text-center mt-4">
      <div class="text-h5 text-sm-h4 mb-4 text-center font-weight-bold">SKILLS</div>
      <div>{{profile.skills}}</div>
    </div>
  </div>
</template>

<script>
import profile from '../../configs/profile'
export default {
  name: "Profile",
  data() {
    return {
      profile: profile
    };
  }
}
</script>

<style scoped>
.custom-btn {
  text-transform: none;
}

.profile-text {
  text-align: center;
  padding: 16px;
}
</style>