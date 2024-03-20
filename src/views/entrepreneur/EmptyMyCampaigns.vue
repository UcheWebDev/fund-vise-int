<template>
  <DashboardHeader></DashboardHeader>
  <section class="live-listing no-campaigns">
    <div class="container">
      <CampaignsHeader></CampaignsHeader>
      <div class="no-campaign-comment">
        <h2>You have not created any campaigns.</h2>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import DashboardHeader from "@/components/entrepreneur/DashboardHeader.vue";
import CampaignsHeader from "@/components/entrepreneur/CampaignsHeader.vue";

export default defineComponent({
  name: 'EmptyMyCampaigns',
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
