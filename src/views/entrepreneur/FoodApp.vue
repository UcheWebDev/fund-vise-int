<template>
  <DashboardHeader></DashboardHeader>
  <div class="dashboard my-live-campaign">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-4">
          <LiveListingSidebar
            :campaings="getEnterprenuerCampaigns"
          ></LiveListingSidebar>
        </div>
        <div class="col-lg-9 col-md-8">
          <div class="my-campaign-detail-wrapper">
            <div class="row">
              <div class="col-lg-10 col-md-12">
                <div class="campaign-profile-wrapper">
                  <div class="img-wrapper">
                    <img
                      src="../../assets/images/profile-1.png"
                      alt="profile"
                    />
                  </div>
                  <div class="content-wrapper">
                    <div class="mpv">
                      <p class="large semi-bold">
                        {{ campaignDetails.companyName }}
                        <img
                          src="../../assets/images/icons/elipses-gray.svg"
                          class="icon"
                          alt="Elipses"
                        />
                        <span
                          class=""
                          :class="getCountryCode(campaignDetails.country)"
                        ></span>
                        <span class="m-1">
                          {{ campaignDetails.city }},
                          {{ campaignDetails.country }}</span
                        >
                      </p>
                      <p class="small">{{ campaignDetails.industry }}</p>
                      <a href="#" class="small"
                        ><img
                          src="../../assets/images/icons/attachment-icon.svg"
                          class="icon"
                          alt="attachment"
                        />Visit website</a
                      >
                    </div>
                    <div class="listed">
                      <p>Listed</p>
                      <p class="x-small">{{ campaignDetails.createdAt }}</p>
                    </div>
                    <div class="status">
                      <p class="large semi-bold">Campaign Status</p>
                      <div class="form">
                        <div class="form-group">
                          <input type="checkbox" />
                          <label for="Checkbox">Open</label>
                        </div>
                        <div class="form-group">
                          <input type="checkbox" />
                          <label for="Checkbox">Close</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="verified-listing">
                    <div class="raising">
                      <p class="x-small">Raising</p>
                      <p class="semi-bold">
                        ${{ formatNumberFilter(campaignDetails.minTarget) }}
                        <span>to</span> ${{
                          formatNumberFilter(campaignDetails.maxTarget)
                        }}
                      </p>
                    </div>
                    <div class="equity">
                      <p class="x-small">Equity on offer</p>
                      <p class="semi-bold">
                        {{ campaignDetails.equityOfferMax }}%
                      </p>
                    </div>
                    <a href="#"
                      ><img
                        src="../../assets/images/icons/secutyrt-icon.svg"
                        class="icon"
                        alt="Security"
                      />Verified Listing</a
                    >
                  </div>
                </div>
                <div
                  class="offers-received"
                  v-if="campaignDetails.enterpreneurId == getEnteprenuerId"
                >
                  <p class="dark-gray">Offers Received</p>
                  <div class="table-responsive">
                    <table>
                      <tr>
                        <th><p>Investor</p></th>
                        <th><p>Fund</p></th>
                        <th><p>Equity</p></th>
                        <th><p>Date</p></th>
                      </tr>
                      <tr
                        v-if="
                          campaignDetails.totalOffers &&
                          !campaignDetails.totalOffers.length
                        "
                      >
                        <td>
                          <p>No offer has been received for this campaign</p>
                        </td>
                      </tr>
                      <tr
                        v-for="offer in campaignDetails.totalOffers"
                        :key="offer.id"
                      >
                        <td>
                          <p>Shebuel VC</p>
                          <p>Shebuel Investments CO.</p>
                        </td>
                        <td>
                          <p>${{ formatNumberFilter(offer.offerValue) }}</p>
                        </td>
                        <td>
                          <p>{{ offer.equityRequest }}%</p>
                        </td>
                        <td>
                          <p>{{ offer.createdAt }}</p>
                        </td>
                        <td>
                          <a
                            href="#"
                            @click="
                              showAcceptModal(
                                offer.createdAt,
                                offer.investorProfile.bio,
                                offer.investorProfile.name,
                                offer.equityRequest,
                                offer.offerValue,
                                offer.investorId
                              )
                            "
                            class="btn-style"
                            data-bs-target="#offerModal"
                            data-bs-toggle="modal"
                            >View</a
                          >
                        </td>
                      </tr>
                    </table>
                    <div class="view-all">
                      <a href="#" class="small"
                        >View All
                        <img
                          src="../../assets/images/icons/arrow-down-double.svg"
                          alt="Arrow"
                      /></a>
                    </div>
                  </div>
                </div>
                <div class="product-overview">
                  <p class="semi-bold">Product Overview</p>
                  <p class="small">
                    {{ campaignDetails.shortSummaryCompany }}
                  </p>
                  <div class="video-wrapper">
                    <img
                      src="../../assets/images/video-image.png"
                      alt="Video"
                    />
                  </div>
                </div>
                <div class="the-business">
                  <div class="content-wrapper">
                    <p class="semi-bold">The Business</p>
                    <div class="profit">
                      <div class="raising">
                        <p class="x-small">Number of Users</p>
                        <p class="semi-bold">
                          {{ campaignDetails.numberOfUsers }}
                        </p>
                      </div>
                      <div class="equity">
                        <p class="x-small">Total revenue</p>
                        <p class="semi-bold">
                          ${{
                            formatNumberFilter(campaignDetails.totalRevenue)
                          }}
                        </p>
                      </div>
                      <div class="equity">
                        <p class="x-small">Profit</p>
                        <p class="semi-bold">
                          ${{ formatNumberFilter(campaignDetails.totalProfit) }}
                        </p>
                      </div>
                    </div>
                    <p class="small dark-gray">
                      {{ campaignDetails.businessOppurtunity }}
                    </p>
                  </div>
                  <div class="content-wrapper">
                    <p class="semi-bold">The Market</p>
                    <p class="small dark-gray">
                      {{ campaignDetails.marketPotentials }}
                    </p>
                  </div>
                  <div class="content-wrapper">
                    <p class="semi-bold">Use of funds (Maximum Raised)</p>
                    <p class="small dark-gray">
                      {{ campaignDetails.useOfFundsMax }}
                    </p>
                  </div>
                  <div class="content-wrapper">
                    <p class="semi-bold">Use of funds (Minimum Raised)</p>
                    <p class="small dark-gray">
                      {{ campaignDetails.useOfFundsMin }}
                    </p>
                  </div>
                </div>
                <div class="team">
                  <p class="semi-bold">Team</p>
                  <div class="team-wrapper">
                    <div v-if="teams && !teams.length">
                      <p>No team found for this campaign listing</p>
                    </div>
                    <div class="team-card" v-for="team in teams" :key="team">
                      <div class="img-wrapper">
                        <img
                          src="../../assets/images/team-player-one.png"
                          alt="Team"
                        />
                      </div>
                      <div class="content-wrapper">
                        <p class="semi-bold">{{ team.name }}</p>
                        <p class="x-small">{{ team.role }}</p>
                        <a href="#"
                          ><img
                            src="../../assets/images/icons/attachment-icon.svg"
                            alt="Attachment"
                          />Visit Profile
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="btn-wrapper">
                    <a
                      href="#"
                      class="btn-style transparent"
                      @click="deleteCampaing()"
                    >
                      <div
                        class="spinner-border text-red spinner-border-sm"
                        role="status"
                        v-if="isLoadingRequest"
                      >
                        <span class="visually-hidden">Loading...</span>
                      </div>

                      <span v-else class="btn-text red-text">
                        Delete Campaign
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-3 text-end">
                <div class="back">
                  <a href="#" class="underline"
                    ><i class="fa fa-arrow-left"></i>Back</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <OfferVIewModal
    :investorBio="investorbio"
    :investorName="investorname"
    :offerCreated="offercreated"
    :offerValue="offervalue"
    :offerEquity="offerequity"
    :campaingId="campaign_id"
    :investorId="investorid"
  ></OfferVIewModal>
</template>

<script setup>
import { defineComponent, ref, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import server from "../../services/server";

import DashboardHeader from "@/components/entrepreneur/DashboardHeader.vue";
import LiveListingSidebar from "@/components/entrepreneur/LiveListingSidebar.vue";
import OfferVIewModal from "@/components/entrepreneur/OfferVIewModal.vue";
import SpinButton from "@/components/SpinButton.vue";

import { useErrorHandling } from "../../helpers/errorLib";
import { formatNumberFilter } from "../../filters/filter.js";
import { getCountryCode } from "@/helpers/iso";

const isMenuActive1 = ref(false);
const route = useRoute();
const router = useRouter();
const store = useStore();
const { error, setError, clearError, handleStatusCodeError } =
  useErrorHandling();

const getEnterprenuerCampaigns = computed(() => {
  const myCampaings = store.getters.getEnteprenuer.myCampaigns;
  const getCampaings = myCampaings ? myCampaings.slice(0, 3) : [];
  return getCampaings;
});

const getEnteprenuerId = computed(() => store.getters.getEnteprenuer.id);

const campaign_id = ref(route.params.id);

const offers = ref(null);
const teams = ref(null);
const campaignDetails = ref([]);
const isLoadingRequest = ref(false);

const investorbio = ref(null);
const investorname = ref(null);
const offercreated = ref(null);
const offervalue = ref(null);
const offerequity = ref(null);
const investorid = ref(null);

const showAcceptModal = (
  createdAt,
  investorBio,
  investorName,
  offerEquity,
  offerValue,
  invid
) => {
  investorbio.value = investorBio;
  offercreated.value = createdAt;
  investorname.value = investorName;
  offerequity.value = offerEquity;
  offervalue.value = offerValue;
  investorid.value = invid;
};

onMounted(async () => {
  await store
    .dispatch("getLoggedEnterprenuerProfile")
    .then((response) => console.log("data loaded!!!"))
    .catch((err) => {
      if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
      } else {
        setError("An unexpected error occurred.");
      }
    });
  getCampaingDetails(campaign_id);
});

const getCampaingDetails = async (param) => {
  await server()
    .get("/enterpreneur/roles/getAllDetailsForCampaign", {
      params: { campaign_id: param.value },
    })
    .then((response) => {
      campaignDetails.value = response.data.data;
      offers.value = response.data.data.totalOffers;
      teams.value = response.data.data.teams;
    })
    .catch((err) => {
      if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
        router.push("/entrepreneur/live-listing");
      } else {
        setError("An unexpected error occurred.");
      }
    });
};

const deleteCampaing = () => {
  isLoadingRequest.value = true;
  server()
    .delete(`/enterpreneur/roles/deleteCampaing/${campaign_id.value}`)
    .then((response) => {
      isLoadingRequest.value = false;
      router.push("/entrepreneur/live-listing");
    })
    .catch((err) => {
      isLoadingRequest.value = false;
      if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
      } else {
        setError("An unexpected error occurred.");
      }
    });
};

watch(() => {
  const campaign_id = ref(route.params.id);
  getCampaingDetails(campaign_id);
});
</script>
 <style scoped>
.red-text {
  color: #ff4d4d;
  line-height: 24px;
  font-size: 16px;
  font-family: "Sora", sans-serif;
  font-weight: 600;
}

.text-rd {
  color: #ff4d4d;
}
</style>