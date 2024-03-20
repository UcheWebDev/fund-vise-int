<template>
  <DashboardHeader></DashboardHeader>
  <div class="dashboard my-live-campaign care-app-campaign">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-4">
          <LiveListingSidebar
            :campaings="leftSidebarCampaigns"
          ></LiveListingSidebar>
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
                        {{ fundDetails.fundName
                        }}<img
                          src="../../assets/images/icons/elipses-gray.svg"
                          class="icon"
                          alt="Elipses"
                        />
                        <span
                          class=""
                          :class="getCountryCode(fundDetails.location)"
                        ></span>
                        <span
                          >{{ fundDetails.city }},
                          {{ fundDetails.location }}</span
                        >
                      </p>
                      <p class="small">{{ fundDetails.fundType }}</p>
                      <a href="#" class="small"
                        ><img
                          src="../../assets/images/icons/attachment-icon.svg"
                          class="icon"
                          alt="attachment"
                        />Visit website</a
                      >
                      <a href="#"
                        ><img
                          src="../../assets/images/icons/secutyrt-icon.svg"
                          class="icon"
                          alt="Security"
                        />Verified Listing</a
                      >
                    </div>
                  </div>
                  <div class="verified-listing grid-5">
                    <div class="raising">
                      <p class="x-small">Total Fund</p>
                      <p class="semi-bold">
                        ${{ formatNumberFilter(fundDetails.fundValue) }}
                      </p>
                    </div>
                    <div class="equity">
                      <p class="x-small">Funds per Company</p>
                      <p class="semi-bold">
                        ${{ formatNumberFilter(fundDetails.fundPerBusiness) }}
                      </p>
                    </div>
                    <div class="posted-by">
                      <p class="x-small">Average Percentage</p>
                      <p class="semi-bold">
                        {{ fundDetails.averagePercentage }}%
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
                            {{ fundDetails.investorFullname }}
                          </p>
                          <p class="x-small">{{ fundDetails.createdAt }}</p>
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
                      class="btn-style"
                      data-bs-target="#quick-apply"
                      data-bs-toggle="modal"
                      >Quick Apply</a
                    >

                    <a href="#" @click="saveFundsListing"
                      ><img
                        class="icon"
                        src="../../assets/images/icons/saved-gray-icon.svg"
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
                    <div class="closed open">
                      <a href="#"
                        ><img
                          class="icon"
                          src="../../assets/images/icons/slash-circle-blue.svg"
                          alt="Slash Circle"
                        />Open</a
                      >
                      <p>
                        This investor is open to new <br />
                        pitches for this fund.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="product-overview">
                  <p class="semi-bold">Fund Overview</p>
                  <p class="small">
                    {{ fundDetails.aboutFund }}
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
                    <p class="semi-bold">Fund Criteria</p>
                    <p class="small dark-gray">
                      {{ fundDetails.extra }}
                    </p>
                  </div>
                </div>
                <!-- <div class="team">
                  <div class="action-wrapper">
                    <a href="#" class="btn-style">Quick Apply</a>
                    <a href="#" class="btn-style transparent">Appy to fund</a>
                    <a href="#"
                      ><img
                        class="icon"
                        src="../../assets/images/icons/saved-gray-icon.svg"
                        alt="Attachment"
                      />Save</a
                    >
                    <a href="#"
                      ><img
                        class="icon"
                        src="../../assets/images/icons/send-icon.svg"
                        alt="Share"
                      />Save</a
                    >
                  </div>
                </div> -->
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
  <div class="verify-email-modal success-modal edit-modal apply-fund-modal">
    <div class="modal fade" id="quick-apply">
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
            <div class="form">
              <h3>Apply for fund</h3>
              <p class="desc">Apply fund for your campaign here.</p>
              <div class="form-group">
                <label for="name"
                  >Please select which campaign you would like to use *</label
                >
                <select
                  name="one"
                  id="one"
                  class="form-control"
                  v-model="campaignId"
                  @change="clearResponseError"
                >
                  <option :value="null">Select campaign</option>
                  <option
                    v-for="campaign in myCampaigns"
                    :key="campaign"
                    :value="campaign.id"
                  >
                    {{ campaign.compayName }}
                  </option>
                </select>
                <i class="fa fa-angle-down"></i>
              </div>

              <div>
                <p>{{ error }}</p>
              </div>

              <div class="form-group submit">
                <a href="#" class="btn-style" @click="applyForFund">
                  <SpinButton v-if="isLoadingRequest" />
                  <span v-else class="btn-text"> Apply</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="fund-success-modal">
      <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <!--            <a href="#" data-bs-dismiss="modal"><img src="../../assets/images/icons/cross-x-icon.svg" alt="Cross"></a>-->
          </div>
          <div class="modal-body">
            <div class="verify-email">
              <h3>Successful</h3>
              <img
                src="../../assets/images/icons/check-circle-broken-icon.svg"
                alt="Check"
              />
              <p>
                Hi Entrepreneur, <br />
                You have successfully Applied for this Fund
              </p>
              <a href="#" class="btn-style black">Done</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { defineComponent, ref, computed, onMounted, watch } from "vue";
import DashboardHeader from "@/components/entrepreneur/DashboardHeader.vue";
import LiveListingSidebar from "@/components/entrepreneur/LiveListingSidebar.vue";
import SpinButton from "@/components/SpinButton.vue";

import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

import { formatNumberFilter } from "../../filters/filter.js";
import { getCountryCode } from "@/helpers/iso";
import { useErrorHandling } from "../../helpers/errorLib";
import server from "@/services/server";

const store = useStore();
const { error, setError, clearError, handleStatusCodeError } =
  useErrorHandling();
const name = "enterprenuerViewFund";
const isMenuActive1 = ref(false);

const route = useRoute();
const router = useRouter();

const campaignId = ref(null);
const fundId = ref(route.params.id);
const fundDetails = ref([]);

const isLoadingRequest = ref(false);

const leftSidebarCampaigns = computed(() => {
  const allCampaigns = store.getters.getEnteprenuer.myCampaigns;
  const sidebarCampaigns = allCampaigns ? allCampaigns.slice(0, 3) : [];
  return sidebarCampaigns;
});

const enterprenuerId = computed(() => store.getters.getEnteprenuer.id);
const accounType = computed(() => store.getters.getEnteprenuer.accounType);

const myCampaigns = computed(() => {
  const campaigns = store.getters.getEnteprenuer.myCampaigns;
  return campaigns;
});

const getFundDetails = async (param) => {
  await server()
    .get("/public/getFundingDetails?", {
      params: { fund_id: param.value },
    })
    .then((response) => {
      fundDetails.value = response.data.data;
    })
    .catch((err) => {
      if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
        router.push("/entrepreneur/funds");
      } else {
        setError("An unexpected error occurred.");
      }
    });
};
const clearResponseError = () => {
  clearError();
};
const applyForFund = () => {
  isLoadingRequest.value = true;
  const payLoad = {
    fund_id: fundId.value,
    campaign_id: campaignId.value,
    enterprenuer_id: enterprenuerId.value,
  };
  server()
    .post("/enterpreneur/roles/appyForFund", payLoad)
    .then(() => {
      isLoadingRequest.value = false;
      console.log("done");
    })
    .catch((err) => {
      isLoadingRequest.value = false;
      if (
        Object.prototype.hasOwnProperty.call(
          err.response.data,
          "already-applied"
        )
      ) {
        setError("Fund already applied for with this campaign");
      } else if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
      } else {
        setError("An unexpected error occurred.");
      }
      console.log("error");
    });
};

const saveFundsListing = () => {
  const payLoad = {
    funds_id: fundId.value,
    role: accounType.value,
    user_id: enterprenuerId.value,
  };
  server()
    .post("/enterpreneur/roles/saveFunds", payLoad)
    .then((response) => {
      console.log("saved....");
    })
    .catch((err) => {
      if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
      } else {
        setError("An unexpected error occurred.");
      }
    });
};

watch(() => {
  const fund_id = ref(route.params.id);
  getFundDetails(fund_id);
});

onMounted(async () => {
  await store
    .dispatch("getLoggedEnterprenuerProfile")
    .then((response) => {
      getFundDetails(fundId);
      console.log("....");
    })
    .catch((err) => {
      if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
      } else {
        setError("An unexpected error occurred.");
      }
    });

  //   console.log(enterpreneur_id.value);
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