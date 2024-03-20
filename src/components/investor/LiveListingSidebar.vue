<template>
  <div
    class="side-wrapper live-listing-sidebar"
    :class="{ active: isMenuActive1 }"
  >
    <div class="campaign-collection">
      <span></span>
      <div class="btn-wrapper">
        <a href="#" class="gray"
          ><img
            src="../../assets/images/icons/bookmark-add-icon.svg"
            class="icon"
            alt="Bookmark"
          />Saved Campaigns</a
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
            :to="{ name: 'InvestorViewFund', params: { id: fund.id } }"
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
import { defineComponent, defineProps, ref, computed } from "vue";
import { formatNumberFilter } from "../../filters/filter.js";
const isMenuActive1 = ref(false);
const name = "LiveListingSidebar";
const props = defineProps({ funds: Array });
</script>
  
  