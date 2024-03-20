<template>
  <InvestorDashboardHeader></InvestorDashboardHeader>
  <section class="live-listing">
    <div class="container">
      <FundsHeader></FundsHeader>
      <div class="listing-wrapper">
        <div class="row">
          <div class="no-campaign-comment" v-if="liveFunds.length === 0">
            <h2>No funds have been created by you or other investors</h2>
          </div>
          <div
            class="col-xl-3 col-lg-6 col-md-6"
            v-for="fund in liveFunds"
            :key="fund"
          >
            <div class="listing-card">
              <div class="content-wrapper">
                <p class="semi-bold medium-font">
                  {{ fund.fundName }}
                  <img
                    src="../../assets/images/icons/elipses-gray.svg"
                    alt="Elipses"
                  />
                  <span>{{ fund.city }}, {{ fund.location }}</span>
                </p>
                <p class="x-small">{{ fund.fundType }}</p>
                <p class="small gray">
                  {{
                    fund.extra
                      ? fund.extra
                      : "extra criteria goes here or reach out to the investor"
                  }}
                </p>
              </div>
              <div class="posted-main-wrapper">
                <div class="raising">
                  <p class="x-small">Total Funds</p>
                  <p class="semi-bold medium-font">
                    ${{ formatNumberFilter(fund.fundValue) }}
                  </p>
                </div>
                <div class="posted-by">
                  <p class="x-small">Created by</p>
                  <div class="img-wrapper">
                    <img
                      src="../../assets/images/icons/profile-picture-small-image.svg"
                      alt="Profile"
                    />
                    <div class="content-wrapper">
                      <p class="x-small">{{ fund.investorFullname }}</p>
                      <p>{{ fund.createdAt }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="btn-wrapper">
                <div class="bookmark">
                  <a
                    href="#"
                    data-bs-target="#agreementModal"
                    data-bs-toggle="modal"
                    @click="saveFund(fund.id)"
                    ><img
                      src="../../assets/images/icons/bookmark-add-extra-small.svg"
                      class="icon"
                      alt="bookmark"
                    />Save</a
                  >
                  <p class="x-small">
                    {{ fund.totalSaved }} Person have saved this fund.
                  </p>
                </div>
                <RouterLink
                  :to="{ name: 'InvestorViewFund', params: { id: fund.id } }"
                  class="btn-style"
                  >More details
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FundAgreementModal
      :role="accounType"
      :id="fundId"
      :userId="userId"
      :isVisible="isVisible"
      @closeModal="closeModal"
      @saveFunds="saveFundActions"
    ></FundAgreementModal>
  </section>
</template>

<script setup>
import { defineComponent, ref, onMounted, computed } from "vue";
import FundAgreementModal from "@/components/investor/FundAgreementModal.vue";
import InvestorDashboardHeader from "@/components/investor/DashboardHeader.vue";
import FundsHeader from "@/components/investor/FundsHeader.vue";

import { useErrorHandling } from "../../helpers/errorLib";
import server from "@/services/server";
import { formatNumberFilter } from "../../filters/filter.js";

import { useStore } from "vuex";

const store = useStore();
const { error, setError, clearError, handleStatusCodeError } =
  useErrorHandling();

const name = ref("InvestorLiveFunds");
const isMenuActive1 = ref(false);
const liveFunds = ref([]);
const fundId = ref(null);
const userId = computed(() => store.getters.getInvestor.id);
const accounType = computed(() => store.getters.getInvestor.accounType);
let isVisible = ref(false);

const getLoggedInUser = async () => {
  await store
    .dispatch("getLoggedInvestorProfile")
    .then((response) => {
      fetchFundings();
    })
    .catch((err) => {
      if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
      } else {
        setError("An unexpected error occurred.");
      }
    });
};

const saveFund = (id) => {
  fundId.value = id;
  isVisible.value = true;
};

const closeModal = () => {
  isVisible.value = false;
};

const fetchFundings = () => {
  server()
    .get("/public/getAllFunds")
    .then((response) => {
      liveFunds.value = response.data.data;
    })
    .catch((err) => {
      if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
      } else {
        setError("An unexpected error occurred.");
      }
    });
};

const saveFundActions = () => {
  const payLoad = {
    funds_id: fundId.value,
    role: accounType.value,
    user_id: userId.value,
  };
  server()
    .post("/investors/roles/saveFunds", payLoad)
    .then((response) => {
      isVisible.value = false;
      fetchFundings();
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