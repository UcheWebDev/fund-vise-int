<template>
  <DashboardHeader></DashboardHeader>
  <section class="live-listing">
    <div class="container">
      <CampaignsHeader1></CampaignsHeader1>
      <div class="listing-wrapper">
        <div class="row">
          <div class="no-campaign-comment" v-if="liveListings.length === 0">
            <h2>
              No campaigns have been created by <br />
              you or other entrepreneurs
            </h2>
          </div>
          <div
            class="col-xl-3 col-lg-6 col-md-6"
            v-for="listing in liveListings"
            :key="listing.id"
          >
            <div class="listing-card">
              <div class="content-wrapper">
                <p class="semi-bold medium-font">
                  {{ listing.companyName }}
                  <img
                    src="../../assets/images/icons/elipses-gray.svg"
                    alt="Elipses"
                  />
                  <span> {{ listing.city }}, {{ listing.country }}</span>
                </p>
                <p class="x-small">MPV | {{ listing.industry }}</p>
                <p class="small gray">
                  {{ listing.shortSummaryCompany }}
                </p>
              </div>
              <div class="posted-main-wrapper">
                <div class="raising">
                  <p class="x-small">Raising</p>
                  <p class="semi-bold medium-font">
                    ${{ formatNumberFilter(listing.maxTarget) }}
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
                      <p class="x-small">{{ listing.enterprenuerFullname }}</p>
                      <p>{{ listing.createdAt }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="btn-wrapper">
                <div class="bookmark">
                  <a @click="saveCampaing(listing.id)"
                    ><img
                      src="../../assets/images/icons/bookmark-add-extra-small.svg"
                      class="icon"
                      alt="bookmark"
                    />Save</a
                  >
                  <p class="x-small">
                    {{ listing.totalSaved }} Person have saved this campaign
                  </p>
                </div>
                <RouterLink
                  :to="{ name: 'FoodApp', params: { id: listing.id } }"
                  class="btn-style"
                  >More details
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ListingAgreementModal
      :role="accounType"
      :id="campaignId"
      :userId="userId"
      :isVisible="isVisible"
      @closeModal="closeModal"
      @saveCampaing="saveCampaingAction"
    ></ListingAgreementModal>
  </section>
</template>

<script setup>
import { defineComponent, ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import ListingAgreementModal from "@/components/entrepreneur/ListingAgreementModal.vue";
import DashboardHeader from "@/components/entrepreneur/DashboardHeader.vue";
import CampaignsHeader1 from "@/components/entrepreneur/CampaignsHeader1.vue";

const store = useStore();
import { useErrorHandling } from "../../helpers/errorLib";
import server from "@/services/server";
import { formatNumberFilter } from "../../filters/filter.js";

const isMenuActive1 = ref(false);
let isVisible = ref(false);
const name = "LiveListing";
const liveListings = ref([]);
const campaignId = ref(null);
const accounType = computed(() => store.getters.getEnteprenuer.accounType);
const userId = computed(() => store.getters.getEnteprenuer.id);

const { error, setError, clearError, handleStatusCodeError } =
  useErrorHandling();

const fetchListings = () => {
  server()
    .get("/public/getAllCampaigns")
    .then((response) => {
      liveListings.value = response.data.data;
    })
    .catch((err) => {
      if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
      } else {
        setError("An unexpected error occurred.");
      }
    });
};

const saveCampaingAction = () => {
  const payLoad = {
    campaings_id: campaignId.value,
    role: accounType.value,
    user_id: userId.value,
  };
  server()
    .post("/enterpreneur/roles/saveCampaign", payLoad)
    .then((response) => {
      isVisible.value = false;
      fetchListings();
    })
    .catch((err) => {
      if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
      } else {
        setError("An unexpected error occurred.");
      }
    });
};

const saveCampaing = (id) => {
  campaignId.value = id;
  isVisible.value = true;
};

const closeModal = () => {
  isVisible.value = false;
};

const getLoggedInUser = async () => {
  await store
    .dispatch("getLoggedEnterprenuerProfile")
    .then((response) => {
      fetchListings();
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
.bookmark {
  cursor: pointer;
}
</style>
