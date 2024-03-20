<template>
  <div
    class="side-wrapper live-listing-sidebar connect-sidebar"
    :class="{ active: isMenuActive1 }"
  >
    <div class="campaign-collection">
      <span></span>
      <div class="btn-wrapper">
        <RouterLink to="/entrepreneur/network" class="gray"
          ><img
            src="../../assets/images/icons/peoples-icon-sidebar.svg"
            class="icon"
            alt="Bookmark"
          />My Network</RouterLink
        >
        <RouterLink to="/entrepreneur/investors" class="gray"
          ><img
            src="../../assets/images/icons/people-dollar-icon.svg"
            class="icon"
            alt="peoples"
          />Investors</RouterLink
        >
        <RouterLink to="/entrepreneur/conect" class="gray"
          ><img
            src="../../assets/images/icons/people-rocket-icon.svg"
            class="icon"
            alt="peoples"
          />Entrepreneur</RouterLink
        >
      </div>
    </div>
    <div class="campaign-wrapper">
      <p class="heading dark-gray semi-bold">My Campaigns</p>
      <div class="no-campaing" v-if="campaings && !campaings.length">
        <div class="content-wrapper"><p>No campaign created</p></div>
      </div>
      <div
        class="campaign-card"
        v-for="campaing in campaings"
        :key="campaing.id"
      >
        <div class="content-wrapper">
          <p class="p semi-bold">{{ campaing.compayName }}</p>
          <p class="x-small">{{ campaing.campaignIndustry }}</p>
          <p class="x-small dark-gray">{{ campaing.createdAt }}</p>
        </div>
        <div class="btn-wrapper">
          <p>Raising</p>
          <p class="p semi-bold">
            ${{ formatNumberFilter(campaing.maxTarget) }}
          </p>
          <RouterLink
            :to="`../entrepreneur/campaign/${campaing.id}`"
            class="btn-style transparent"
            >View</RouterLink
          >
        </div>
      </div>

      <div class="btn-wrapper" v-if="campaings && campaings.length == 3">
        <RouterLink to="../entrepreneur/campaigns" class="underline small"
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

const name = "ConnectSidebar";
const isMenuActive1 = ref(false);

const props = defineProps(["campaings"]);
</script>

