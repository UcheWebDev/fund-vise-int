<template>
  <div class="side-wrapper" :class="{ active: isMenuActive1 }">
    <div class="profile-wrapper">
      <div class="img-wrapper">
        <RouterLink to="../entrepreneur/profile"
          ><img
            src="../../assets/images/investor-profile.svg"
            alt="Profile Picture"
        /></RouterLink>
      </div>
      <div class="content-wrapper">
        <h3 class="small">
          {{ fullname !== " " ? fullname : "fullname" }}
          <img src="../../assets/images/icons/star-blue-icon.svg" alt="Star" />
        </h3>
        <p class="small">
          Investor |
          <span class="" :class="getCountryCode(country)"></span>
          {{ city ? city : "city" }} , {{ country ? country : "country" }}
        </p>
        <p class="gray">
          <img
            src="../../assets/images/icons/bookmark-yellow-icon.svg"
            alt="Bookmark"
          />Premium
        </p>
      </div>
    </div>
    <div class="live-funds-wrapper">
      <RouterLink to="../investor/funds" class="funds">
        <div class="img-wrapper">
          <img
            src="../../assets/images/icons/live-funds-small.svg"
            alt="Funds"
          />
        </div>
        <div class="content-wrapper">
          <p class="p medium">Live Funds</p>
        </div>
      </RouterLink>
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
import { defineComponent, defineProps, ref, computed, onMounted } from "vue";
import { formatNumberFilter } from "../../filters/filter.js";
import { getCountryCode } from "@/helpers/iso";

const name = "InvestorLeftSideba";
const isMenuActive1 = ref(false);
const props = defineProps(["fullname", "city", "country", "funds"]);
</script>

