<template>
  <DashboardHeader></DashboardHeader>
  <section class="live-listing my-campaigns">
    <div class="container">
      <CampaignsHeader></CampaignsHeader>
      <div class="listing-wrapper">
        <div class="row">
          <div class="no-campaign-comment" v-if="myCampaigns.length === 0">
            <h2>You have not created any campaigns.</h2>
          </div>

          <div
            class="col-xl-3 col-lg-6 col-md-6"
            v-for="campaign in myCampaigns"
            :key="campaign.id"
          >
            <div class="listing-card">
              <div class="content-wrapper">
                <p class="semi-bold medium-font">
                  {{ campaign.compayName }}
                  <img
                    src="../../assets/images/icons/elipses-gray.svg"
                    alt="Elipses"
                  />
                  <span>{{ campaign.city }}, {{ campaign.country }}</span>
                </p>
                <p class="x-small">MPV | {{ campaign.campaignIndustry }}</p>
                <p class="small gray">
                  {{ campaign.brief }}
                </p>
              </div>
              <div class="posted-main-wrapper">
                <div class="raising">
                  <p class="x-small">Raising</p>
                  <p class="semi-bold medium-font">
                    ${{ formatNumberFilter(campaign.maxTarget) }}
                  </p>
                </div>
                <div class="new-offers">
                  <a href="#" class="btn-style red small"
                    >{{ campaign.offers }} New Offers</a
                  >
                </div>
              </div>
              <div class="btn-wrapper">
                <a href="#" class="gray weight-m medium"
                  ><img
                    class="icon"
                    src="../../assets/images/icons/delete-icon.svg"
                    alt="delete"
                  />Delete</a
                >
                <RouterLink
                  :to="{
                    name: 'FoodApp',
                    params: { id: campaign.id ? campaign.id : '' },
                  }"
                  class="btn-style"
                  >More details
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineComponent, ref, onMounted, computed } from "vue";
import DashboardHeader from "@/components/entrepreneur/DashboardHeader.vue";
import CampaignsHeader from "@/components/entrepreneur/CampaignsHeader.vue";

import { useStore } from "vuex";
import { useErrorHandling } from "../../helpers/errorLib";
import server from "@/services/server";
import { formatNumberFilter } from "../../filters/filter.js";

const store = useStore();
const { error, setError, clearError, handleStatusCodeError } =
  useErrorHandling();

const isMenuActive1 = ref(false);
const name = "MyCampaigns";
const myCampaigns = ref([]);
const userId = computed(() => store.getters.getEnteprenuer.id);

const fetchMyCampaigns = () => {
  server()
    .get(`/enterpreneur/roles/getMyCampaings?user_id=${userId.value}`)
    .then((response) => {
      myCampaigns.value = response.data.data;
    })
    .catch((err) => {
      if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
      } else {
        setError("An unexpected error occurred.");
      }
    });
};

const getLoggedInUser = async () => {
  await store
    .dispatch("getLoggedEnterprenuerProfile")
    .then((response) => {
      fetchMyCampaigns();
    })
    .catch((err) => {
      if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
      } else {
        setError("An unexpected error occurred.");
      }
    });
};

onMounted(() => {
  getLoggedInUser();
});
</script>


<style lang="scss" scoped>
.no-campaign-comment {
  text-align: center;
  margin-top: 160px;
  h2 {
    font-weight: 400;
    line-height: 45px;
  }
}
</style>
