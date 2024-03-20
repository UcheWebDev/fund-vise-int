<template>
  <InvestorDashboardHeader></InvestorDashboardHeader>
  <section class="live-listing no-campaigns">
    <div class="container">
      <InvestorCampaignsHeader></InvestorCampaignsHeader>
      <div class="no-campaign-comment">
        <h2>You have not saved any campaigns.</h2>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import InvestorDashboardHeader from "@/components/investor/DashboardHeader.vue";
import InvestorCampaignsHeader from "@/components/investor/CampaignsHeader.vue";

export default defineComponent({
  name: 'InvestorEmptySavedCampaigns',
  components: {
    InvestorCampaignsHeader,
    InvestorDashboardHeader,
  },
  data() {
    return {
      isMenuActive1: false,
    }
  },
});
</script>
