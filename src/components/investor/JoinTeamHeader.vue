<template>
  <div class="live-listing-header join-team-header">
    <h3 class="small">Join Teams</h3>
    <div class="row">
      <div class="col-xl-6 col-md-4 col-7 align-self-center">
        <div class="form">
          <div class="form-group">
            <label for="select">Filter</label>
            <select class="form-control">
              <option value="1">Select</option>
              <option value="1">Select</option>
              <option value="1">Select</option>
            </select>
            <img class="icon" src="../../assets/images/icons/angle_down_small-icon.svg" alt="angle">
          </div>
          <div class="form-group">
            <label for="select">Location</label>
            <select class="form-control">
              <option value="1">Select</option>
              <option value="1">Select</option>
              <option value="1">Select</option>
            </select>
            <img class="icon" src="../../assets/images/icons/angle_down_small-icon.svg" alt="angle">
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-md-8 col-5 align-self-center">
        <div class="btn-wrapper">
          <RouterLink to=""><img class="icon" src="../../assets/images/icons/arrow-left-icon.svg" alt="Plus icon">Back</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'JoinTeamHeader',
  components: {
  },
  data() {
    return{
      isMenuActive: false,
    }
  }
});
</script>
