<template>
  <DashboardHeader></DashboardHeader>
  <section class="live-listing">
    <div class="container">
      <CampaignsHeader></CampaignsHeader>
      <div class="listing-wrapper">
        <div class="row">
          <div
            class="no-campaign-comment"
            v-if="campaigns && campaigns.length === 0"
          >
            <h2>You have not saved any campaigns.</h2>
          </div>

          <div
            class="col-xl-3 col-lg-6 col-md-6"
            v-for="campaign in campaigns"
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
                <div class="posted-by">
                  <p class="x-small">Posted by</p>
                  <div class="img-wrapper">
                    <img
                      src="../../assets/images/icons/profile-picture-small-image.svg"
                      alt="Profile"
                    />
                    <div class="content-wrapper">
                      <p class="x-small">{{ campaign.publishedBy }}</p>
                      <p>{{ campaign.createdAt }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="btn-wrapper">
                <a
                  href="#"
                  class="gray weight-m medium"
                  @click="deleteSavedCampaing(campaign.id)"
                  ><img
                    src="../../assets/images/icons/delete-icon.svg"
                    class="icon"
                    alt="Delete"
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
import { defineComponent, ref, computed, onMounted } from "vue";
import DashboardHeader from "@/components/entrepreneur/DashboardHeader.vue";
import CampaignsHeader from "@/components/entrepreneur/CampaignsHeader.vue";

import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

import { useErrorHandling } from "../../helpers/errorLib";
import { formatNumberFilter } from "../../filters/filter.js";
import server from "../../services/server";

const router = useRouter();

const { error, setError, clearError, handleStatusCodeError } =
  useErrorHandling();
const isMenuActive1 = ref(false);
const store = useStore();

const campaigns = computed(() => store.getters.getEnteprenuer.savedCampaings);
const role = computed(() => store.getters.getEnteprenuer.accounType);
const userId = computed(() => store.getters.getEnteprenuer.id);

const getLoggedInUser = async () => {
  await store
    .dispatch("getLoggedEnterprenuerProfile")
    .then((response) => {
      console.log("initilized store");
    })
    .catch((err) => {
      if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
      } else {
        setError("An unexpected error occurred.");
      }
    });
};

const deleteSavedCampaing = (id) => {
  console.log(id, role.value, userId.value);

  server()
    .post(`/enterpreneur/roles/deleteSavedCampaing`, {
      role: role.value,
      userId: userId.value,
      campaing_id: id,
    })
    .then((response) => {
      // isLoadingRequest.value = false;
      getLoggedInUser();
    })
    .catch((err) => {
      // isLoadingRequest.value = false;
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
