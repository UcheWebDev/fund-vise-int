<template>
  <DashboardHeader></DashboardHeader>
  <section class="live-listing">
    <div class="container">
      <FundsHeader2></FundsHeader2>
      <div class="listing-wrapper">
        <div class="row">
          <div
            class="no-campaign-comment"
            v-if="liveFunds && liveFunds.length === 0"
          >
            <h2>No funds have been created by any investor</h2>
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
                    v-show="canSaveFunds(fund.id)"
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
                    {{ fund.totalSaved }} Person have saved fund.
                  </p>
                </div>
                <RouterLink
                  :to="{
                    name: 'EnterprenuerViewFund',
                    params: { id: fund.id },
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
    <ListingAgreementModal></ListingAgreementModal>
  </section>
</template>

<script setup>
import { defineComponent, ref, onMounted, computed } from "vue";
import DashboardHeader from "@/components/entrepreneur/DashboardHeader.vue";
import ListingAgreementModal from "@/components/entrepreneur/ListingAgreementModal.vue";
import FundsHeader2 from "@/components/entrepreneur/FundsHeader.vue";

import { useErrorHandling } from "../../helpers/errorLib";
import server from "@/services/server";
import { useStore } from "vuex";
import { formatNumberFilter } from "../../filters/filter.js";

const store = useStore();
const { error, setError, clearError, handleStatusCodeError } =
  useErrorHandling();

const isMenuActive1 = ref(false);
const name = ref("LiveFundsEnter");
const liveFunds = ref([]);

const canSaveFunds = (fundsId) => {
  const getSavedFunds = computed(() => store.getters.getEnteprenuer.savedFunds);
  const filterFunds = getSavedFunds.value
    ? getSavedFunds.value.filter((item) => item.id === fundsId)
    : [];
  return !filterFunds.length > 0;
};

const getLoggedInUser = async () => {
  await store
    .dispatch("getLoggedEnterprenuerProfile")
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