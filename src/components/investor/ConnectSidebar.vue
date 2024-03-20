<template>
  <div
    class="side-wrapper live-listing-sidebar connect-sidebar"
    :class="{ active: isMenuActive1 }"
  >
    <div class="campaign-collection">
      <span></span>
      <div class="btn-wrapper">
        <RouterLink to="/investor/network" class="gray"
          ><img
            src="../../assets/images/icons/peoples-icon-sidebar.svg"
            class="icon"
            alt="Bookmark"
          />My Network</RouterLink
        >
        <RouterLink to="/investor/investors" class="gray"
          ><img
            src="../../assets/images/icons/people-dollar-icon.svg"
            class="icon"
            alt="peoples"
          />Investors</RouterLink
        >
        <RouterLink to="/investor/conect" class="gray"
          ><img
            src="../../assets/images/icons/people-rocket-icon.svg"
            class="icon"
            alt="peoples"
          />Entrepreneur</RouterLink
        >
      </div>
    </div>
    <div class="campaign-wrapper">
      <p class="heading dark-gray semi-bold">My Funds</p>
      <div class="no-campaing" v-if="funds && !funds.length">
        <div class="content-wrapper"><p>No fund created</p></div>
      </div>
      <div class="campaign-card" v-for="fund in funds" :key="fund.id">
        <div class="content-wrapper">
          <p class="p semi-bold">{{ fund.fundName }}</p>
          <p class="x-small">{{ fund.fundType }}</p>
          <p class="x-small dark-gray">{{ fund.createdAt }}</p>
        </div>
        <div class="btn-wrapper">
          <p>Raising</p>
          <p class="p semi-bold">${{ formatNumberFilter(fund.fundValue) }}</p>
          <RouterLink
            :to="`../investor/funds/${fund.id}`"
            class="btn-style transparent"
            >View</RouterLink
          >
        </div>
      </div>
      <div class="btn-wrapper" v-if="funds && funds.length == 3">
        <RouterLink to="../investor/funds" class="underline small"
          >View All></RouterLink
        >
      </div>
    </div>
  </div>
  <div class="hamburger" @click="isMenuActive1 = true">
    <i class="fa fa-bars"></i>
  </div>
</template>

<script setup>
import { defineComponent, ref, defineProps } from "vue";
import { formatNumberFilter } from "../../filters/filter.js";

const name = ref("InvestorConnectSidebar");
const isMenuActive1 = ref(false);
const props = defineProps(["funds"]);
</script>

