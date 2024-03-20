<template>
  <InvestorDashboardHeader></InvestorDashboardHeader>
  <section class="live-listing my-campaigns">
    <div class="container">
      <FundsHeader></FundsHeader>
      <div class="listing-wrapper">
        <div class="row">
          <div
            class="no-campaign-comment"
            v-if="myFunds && myFunds.length === 0"
          >
            <h2>No funds have been created by you</h2>
          </div>
          <div
            class="col-xl-3 col-lg-6 col-md-6"
            v-for="fund in myFunds"
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
                  <p class="x-small">Raising</p>
                  <p class="semi-bold medium-font">
                    ${{ formatNumberFilter(fund.fundValue) }}
                  </p>
                </div>
                <div class="new-offers">
                  <a href="#" class="btn-style red small">4 New Offers</a>
                </div>
              </div>
              <div class="btn-wrapper">
                <a
                  href="#"
                  class="gray weight-m medium"
                  @click="deleteFund(fund.id)"
                  ><img
                    class="icon"
                    src="../../assets/images/icons/delete-icon.svg"
                    alt="delete"
                  />Delete</a
                >
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
  </section>
</template>

<script setup>
import { defineComponent, ref, computed, onMounted } from "vue";
import InvestorDashboardHeader from "@/components/investor/DashboardHeader.vue";
import FundsHeader from "@/components/investor/FundsHeader.vue";

import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { useErrorHandling } from "../../helpers/errorLib";
import server from "@/services/server";
import { formatNumberFilter } from "../../filters/filter.js";
const route = useRoute();
const router = useRouter();

const store = useStore();
const { error, setError, clearError, handleStatusCodeError } =
  useErrorHandling();
const name = ref("InvestorMyCampaigns");
const isMenuActive1 = ref(false);

const myFunds = computed(() => store.getters.getInvestor.funds);

const deleteFund = (id) => {
  // isLoadingRequest.value = true;
  server()
    .delete(`/investors/roles/deleteFund/${id}`)
    .then((response) => {
      // isLoadingRequest.value = false;
      router.push("/investor/funds");
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

onMounted(async () => {
  await store
    .dispatch("getLoggedInvestorProfile")
    .then((response) => {
      console.log("...");
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
