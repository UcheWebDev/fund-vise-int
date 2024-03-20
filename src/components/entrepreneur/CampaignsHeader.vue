<template>
  <div class="live-listing-header">
    <h3 class="small">Live Campaigns</h3>
    <div class="row">
      <div class="col-lg-4 col-md-5 col-7 align-self-center">
        <div class="form">
          <div class="form-group">
            <label for="select">Filter by </label>
            <select class="form-control">
              <option value="1">Select</option>
              <option value="1">Select</option>
              <option value="1">Select</option>
            </select>
            <img
              class="icon"
              src="../../assets/images/icons/angle_down_small-icon.svg"
              alt="angle"
            />
          </div>
          <div class="form-group">
            <label for="select">Investment Level</label>
            <select class="form-control">
              <option value="1">Select</option>
              <option value="1">Select</option>
              <option value="1">Select</option>
            </select>
            <img
              class="icon"
              src="../../assets/images/icons/angle_down_small-icon.svg"
              alt="angle"
            />
          </div>
        </div>
      </div>
      <div class="col-lg-8 col-md-7 col-5 align-self-center">
        <div class="btn-wrapper">
          <RouterLink to="../entrepreneur/saved"
            ><img
              class="icon"
              src="../../assets/images/icons/bookmark-add-icon.svg"
              alt="Bookmark"
            />Saved Campaigns
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CampaignsHeader",
  components: {},
  data() {
    return {
      isMenuActive: false,
    };
  },
});
</script>
