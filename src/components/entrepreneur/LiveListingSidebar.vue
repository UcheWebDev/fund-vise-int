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
        <a href="#" class="gray"
          ><img
            src="../../assets/images/icons/peoples-icon-small.svg"
            class="icon"
            alt="peoples"
          />My Teams</a
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
            :to="{ name: 'FoodApp', params: { id: campaing.id } }"
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
import { defineComponent, defineProps, ref, computed } from "vue";
import { formatNumberFilter } from "../../filters/filter.js";
const isMenuActive1 = ref(false);
const name = "LiveListingSidebar";
const props = defineProps({ campaings: Array });
</script>

