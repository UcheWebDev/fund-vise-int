<template>
  <DashboardHeader></DashboardHeader>
  <div class="dashboard my-live-campaign care-app-campaign">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-4">
          <LiveFundsSidebar :funds="leftSidebarFunds"></LiveFundsSidebar>
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
                        ></span
                        ><span
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
                    <a href="#" v-if="!fullname == fundDetails.investorFullname"
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
                <div class="team">
                  <div class="action-wrapper">
                    <a href="#" v-if="!fullname == fundDetails.investorFullname"
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
</template>
  
  <script setup>
import { defineComponent, ref, computed, onMounted, watch } from "vue";
import DashboardHeader from "@/components/entrepreneur/DashboardHeader.vue";
import LiveFundsSidebar from "@/components/investor/LiveFundsSideBar.vue";

import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import server from "../../services/server";

import { useErrorHandling } from "../../helpers/errorLib";
import { formatNumberFilter } from "../../filters/filter.js";
import { getCountryCode } from "@/helpers/iso";

const name = ref("InvestorViewFund");
const isMenuActive1 = ref(false);
const route = useRoute();
const router = useRouter();
const store = useStore();
const fundId = ref(route.params.id);
const fundDetails = ref([]);
const { error, setError, clearError, handleStatusCodeError } =
  useErrorHandling();

const leftSidebarFunds = computed(() => {
  const funds = store.getters.getInvestor.funds;
  const res = funds ? funds.slice(0, 3) : [];
  return res;
});

const fullname = computed(() => store.getters.getInvestor.fullname);

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
        router.push("/investor/funds");
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
    .dispatch("getLoggedInvestorProfile")
    .then((response) => {
      console.log("....");
      getFundDetails(fundId);
    })
    .catch((err) => {
      if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
      } else {
        setError("An unexpected error occurred.");
      }
    });
});
</script>