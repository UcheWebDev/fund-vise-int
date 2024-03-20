<template>
  <DashboardHeader></DashboardHeader>
  <section class="live-listing no-campaigns">
    <div class="container">
      <CampaignsHeader></CampaignsHeader>
      <div class="no-campaign-comment">
        <h2>No campaigns have been created by <br> you or other entrepreneurs</h2>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import DashboardHeader from "@/components/entrepreneur/DashboardHeader.vue";
import CampaignsHeader from "@/components/entrepreneur/CampaignsHeader.vue";

export default defineComponent({
  name: 'NoCampaign',
  components: {
    CampaignsHeader,
    DashboardHeader
  },
  data() {
    return {
      isMenuActive1: false,
    }
  },
});
</script>
