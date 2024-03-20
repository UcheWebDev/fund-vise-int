<template>
  <InvestorDashboardHeader></InvestorDashboardHeader>
  <div class="dashboard my-live-campaign care-app-campaign investor-care">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-4">
          <LiveListingSidebar :funds="leftSidebarFunds"></LiveListingSidebar>
        </div>
        <div class="col-lg-9 col-md-8">
          <div class="my-campaign-detail-wrapper">
            <div class="row">
              <div class="col-lg-10 col-md-12">
                <div class="campaign-profile-wrapper">
                  <div class="img-wrapper">
                    <img
                      src="../../assets/images/care-app-profile.png"
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
                    <div class="posted-by">
                      <p class="x-small">Posted by</p>
                      <div class="main-wrapper">
                        <div class="img-wrapper">
                          <img
                            src="../../assets/images/profile-small-care-app.png"
                            alt="Profile"
                          />
                        </div>
                        <div class="content-wrapper">
                          <p class="medium-font">
                            {{ campaignDetails.enterprenuerFullname }}
                          </p>
                          <p class="x-small">{{ campaignDetails.createdAt }}</p>
                        </div>
                      </div>
                    </div>
                    <a href="#"
                      ><img
                        src="../../assets/images/icons/secutyrt-icon.svg"
                        class="icon"
                        alt="Security"
                      />Verified Listing</a
                    >
                  </div>
                  <div class="action-wrapper">
                    <a
                      href="#"
                      class="btn-style black"
                      data-bs-target="#offerModal"
                      data-bs-toggle="modal"
                      >Make an offer</a
                    >
                    <a href="#" @click="saveCampaing(campaignDetails.id)"
                      ><img
                        class="icon"
                        src="../../assets/images/icons/attachment-icon.svg"
                        alt="Attachment"
                      />Save</a
                    >
                    <a href="#"
                      ><img
                        class="icon"
                        src="../../assets/images/icons/send-icon.svg"
                        alt="Share"
                      />Share</a
                    >
                    <div class="closed">
                      <a href="#"
                        ><img
                          class="icon"
                          src="../../assets/images/icons/slash-circle-blue.svg"
                          alt="Slash Circle"
                        />Closed</a
                      >
                      <!-- <p>
                        {{ campaignDetails.campaignStatus ? `This entrepreneur
                        has secured <br />
                        funding for this campaign.` : 'campaign is open for funding' }}
                      </p> -->
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
                  <!-- <div class="action-wrapper">
                    <a href="#" class="btn-style black">Make an offer</a>
                    <a href="#"
                      ><img
                        class="icon"
                        src="../../assets/images/icons/bookmark-add-extra-small.svg"
                        alt="Attachment"
                      />Save</a
                    >
                    <a href="#" @click="saveCampaing(campaignDetails.id)"
                      ><img
                        class="icon"
                        src="../../assets/images/icons/send-icon.svg"
                        alt="Share"
                      />Share</a
                    >
                  </div> -->
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

  <div class="verify-email-modal offer-view-modal">
    <div class="modal fade" id="offerModal">
      <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <a href="#" data-bs-dismiss="modal"
              ><img
                src="../../assets/images/icons/cross-x-icon.svg"
                alt="Cross"
            /></a>
          </div>
          <div class="modal-body">
            <div class="profile-wrapper">
              <div class="img-wrapper">
                <img
                  src="../../assets/images/profile-modal-image.svg"
                  alt="Profile"
                />
              </div>
              <div class="content-wrapper">
                <h3>{{ campaignDetails.enterprenuerFullname }}</h3>
                <p>{{ campaignDetails.companyName }}</p>
                <a href="#"
                  ><img
                    src="../../assets/images/icons/sheild-tick-icon.svg"
                    alt="Check"
                  />Verified Investor</a
                >
                <a href="#">View Profile</a>
              </div>
            </div>

            <div class="">
              <p class="">Make offer for this campaign</p>
            </div>

            <div class="form">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="name">Your Offer</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Input your offer"
                      v-model="offerValue"
                    />
                    <span class="currency">USD</span>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label for="name">Equity Request</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Input your offer"
                      v-model="equityRequest"
                    />
                    <span class="currency">USD</span>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label for="name">Fund</label>
                    <select
                      name="one"
                      id="one"
                      class="form-control"
                      v-model="fundId"
                      @change="clearResponseError"
                    >
                      <option :value="null">Select Fund</option>
                      <option
                        v-for="fund in myFunds"
                        :key="fund"
                        :value="fund.id"
                      >
                        {{ fund.fundName }}
                      </option>
                    </select>
                    <i class="fa fa-angle-down"></i>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="about-investor">
              <p class="semi-bold">About Investor</p>
              <p class="small dark-gray">
                {{
                  investorBio
                    ? investorBio
                    : "This paragraph contains informations about the investor such as the bio data"
                }}
              </p>
            </div> -->
            <!-- <div class="investor-offer">
              <p class="semi-bold">Investor Offer</p>
              <h3>
                ${{ formatNumberFilter(offerValue) }} <span>for</span
                >{{ offerEquity }}% <span>equity</span>
              </h3>
            </div> -->
            <div class="offer-wrapper">
              <a href="#" class="message"
                ><img
                  src="../../assets/images/icons/message-icon-modal.svg"
                  alt="message"
                />Message Investor</a
              >
              <div class="btn-wrapper">
                <a
                  href="#"
                  class="btn-style red-b"
                  @click="makeOfferRequest(campaignDetails.enterpreneurId)"
                  ><SpinButton v-if="isLoadingRequest" class="redspin-text" />
                  <span v-else class="btn-text red-text"> Make Offer </span></a
                >
              </div>
            </div>
            <!-- optionally remove for toast-->
            <div>{{ error }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, ref, computed, onMounted, watch } from "vue";
import LiveListingSidebar from "@/components/investor/LiveListingSidebar.vue";
import InvestorDashboardHeader from "@/components/investor/DashboardHeader.vue";
import OfferModalVue from "@/components/investor/OfferModal.vue";
import SpinButton from "@/components/SpinButton.vue";

import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import server from "../../services/server";

import { useErrorHandling } from "../../helpers/errorLib";
import { formatNumberFilter } from "../../filters/filter.js";
import { getCountryCode } from "@/helpers/iso";

const route = useRoute();
const router = useRouter();
const store = useStore();
const { error, setError, clearError, handleStatusCodeError } =
  useErrorHandling();

const isLoadingRequest = ref(null);
const name = ref("InvestorCareApp");
const isMenuActive1 = ref(false);

const offerValue = ref(null);
const campaignId = ref(route.params.id);
const equityRequest = ref(null);
const fundId = ref(null);

const teams = ref(null);
const campaignDetails = ref([]);

const leftSidebarFunds = computed(() => {
  const funds = store.getters.getInvestor.funds;
  const res = funds ? funds.slice(0, 3) : [];
  return res;
});

const accounType = computed(() => store.getters.getInvestor.accounType);
const userId = computed(() => store.getters.getInvestor.id);

const myFunds = computed(() => {
  const myFunds = store.getters.getEnteprenuer.funds;
  return myFunds;
});

const makeOfferRequest = async () => {
  isLoadingRequest.value = true;
  const requestPayload = {
    campaings_id: campaignId.value,
    investor_id: userId.value,
    offer_value: offerValue.value,
    equity_request: equityRequest.value,
    fund_id: fundId.value,
  };
  await server()
    .post("/investors/roles/createCampaignOffer", requestPayload)
    .then(() => {
      isLoadingRequest.value = false;
      console.log("....");
    })
    .catch((err) => {
      isLoadingRequest.value = false;
      if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
        // router.push("/investor/live-listing");
      } else {
        setError("An unexpected error occurred.");
      }
    });
};

const getCampaingDetails = async (param) => {
  await server()
    .get("/public/getCampaignDetail", {
      params: { campaign_id: param.value },
    })
    .then((response) => {
      campaignDetails.value = response.data.data;
      teams.value = response.data.data.teams;
    })
    .catch((err) => {
      if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
        router.push("/investor/live-listing");
      } else {
        setError("An unexpected error occurred.");
      }
    });
};

const saveCampaing = (id) => {
  const payLoad = {
    campaings_id: id,
    role: accounType.value,
    user_id: userId.value,
  };
  server()
    .post("/investors/roles/saveCampaign", payLoad)
    .then(() => {
      console.log("..");
    })
    .catch((err) => {
      if (
        Object.prototype.hasOwnProperty.call(err.response.data, "already-saved")
      ) {
        setError("Campaign has already been saved by you");
      } else if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
      } else {
        setError("An unexpected error occurred.");
      }
    });
};

watch(() => {
  getCampaingDetails(campaignId);
});

onMounted(async () => {
  await store
    .dispatch("getLoggedInvestorProfile")
    .then(() => {
      console.log("....");
    })
    .catch((err) => {
      if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
      } else {
        setError("An unexpected error occurred.");
      }
    });
  getCampaingDetails(campaignId);
});
</script>

<style scoped>
.btn-text {
  color: #ffffff;
  line-height: 24px;
  font-size: 16px;
}

.btn-style:hover {
  background: #000000;
}
</style>
