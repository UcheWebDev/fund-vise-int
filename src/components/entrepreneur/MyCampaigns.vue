<template>
  <div class="campaign-wrapper">
    <p class="heading dark-gray semi-bold">My Campaigns</p>
    <div class="campaign-card" v-for="campaing in campaings" :key="campaing.id">
      <div class="content-wrapper">
        <p class="p semi-bold">{{ campaing.stage }}</p>
        <p class="x-small">{{ campaing.campaignIndustry }}</p>
        <p class="x-small dark-gray">{{ campaing.createdAt }}</p>
      </div>
      <div class="btn-wrapper">
        <p>Raising</p>
        <p class="p semi-bold">${{ formatNumberFilter(campaing.maxTarget) }}</p>
        <RouterLink
          :to="`../entrepreneur/campaign/${campaing.id}`"
          class="btn-style transparent"
          >View</RouterLink
        >
      </div>
    </div>
    <div class="btn-wrapper">
      <RouterLink to="../entrepreneur/campaigns" class="underline small"
        >View All></RouterLink
      >
    </div>
  </div>
</template>

<script setup>
import { defineComponent, defineProps, ref, computed } from "vue";
import { formatNumberFilter } from "../../filters/filter.js";

const props = defineProps({ campaings: Array });
</script>