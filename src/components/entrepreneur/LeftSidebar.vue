<template>
  <div class="side-wrapper" :class="{ active: isMenuActive1 }">
    <div class="profile-wrapper">
      <div class="img-wrapper">
        <RouterLink to="../entrepreneur/profile"
          ><img
            src="../../assets/images/profile-sidebar-image.svg"
            alt="Profile Picture"
        /></RouterLink>
      </div>
      <div class="content-wrapper">
        <h3 class="small">
          {{ fullname !== " " ? fullname : "fullname" }}
          <img src="../../assets/images/icons/star-blue-icon.svg" alt="Star" />
        </h3>
        <p class="small">
          Entrepreneur |
          <span class="" :class="getCountryCode(country)"></span>
          {{ city ? city : "*" }} , {{ country ? country : "*" }}
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
      <RouterLink to="../entrepreneur/funds" class="funds">
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
import { defineComponent, defineProps, ref, computed, onMounted } from "vue";
import { formatNumberFilter } from "../../filters/filter.js";
import { getCountryCode } from "@/helpers/iso";

const name = "LeftSidebar";
const isMenuActive1 = ref(false);
const props = defineProps(["fullname", "campaings", "city", "country"]);

// onMounted(()=> {
//   console.log(getCountryCode('nigeria'))
// })
</script>

<style scoped>
.fi {
  font-size: 10px;
}
</style>


