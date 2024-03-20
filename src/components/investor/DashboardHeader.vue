<template>
  <header class="primary-header">
    <div class="container">
      <div class="row">
        <div class="col-md-2 col-4 align-self-center">
          <div class="main-logo">
            <a href="#">
              <img src="../../assets/images/main-logo.svg" alt="Main Logo" />
            </a>
          </div>
        </div>
        <div class="col-md-6 col-1 align-self-center text-end">
          <div class="primary-menu">
            <ul class="menu">
              <li>
                <RouterLink to="/investor/"
                  ><img
                    src="../../assets/images/icons/home-icon.svg"
                    alt="Home"
                  />Home</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/investor/live-listing"
                  ><img
                    src="../../assets/images/icons/live-listing-icon.svg"
                    alt="Live"
                  />Live Listings</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/investor/network"
                  ><img
                    src="../../assets/images/icons/peoples-icon.svg"
                    alt="connect"
                  />Connect</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/investor/funds"
                  ><img
                    src="../../assets/images/icons/live-funds-icon-new.svg"
                    alt="funds"
                  /><span>$</span>Live Funds</RouterLink
                >
              </li>
              <li>
                <RouterLink to="#"
                  ><img
                    src="../../assets/images/icons/more-icon.svg"
                    alt="more"
                  />More</RouterLink
                >
                <ul class="drop-down">
                  <li>
                    <RouterLink to="/investor/team"
                      ><img
                        src="../../assets/images/icons/peoples-icon-small.svg"
                        alt="icon"
                      />Join Teams</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink to="#"
                      ><img
                        src="../../assets/images/icons/peoples-icon-small.svg"
                        alt="icon"
                      />ZBook a Call</RouterLink
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-4 col-7 align-self-center text-end">
          <div class="profile-menu">
            <ul class="menu second-menu">
              <li>
                <RouterLink to="/investor/"
                  ><img
                    src="../../assets/images/icons/messages-icon.svg"
                    alt="Messages"
                  /><span>9</span>Messaging</RouterLink
                >
              </li>
              <li>
                <RouterLink to="#" @click="showCount"
                  ><img
                    src="../../assets/images/icons/bell-icon.svg"
                    alt="Bell Icon"
                  /><span>{{ notifications ? notifications.length : 0 }}</span
                  >Notifications</RouterLink
                >
                <TabComponentVue :notification="notifications" />
              </li>
              <li class="profile">
                <RouterLink to="/investor/profile"
                  ><img
                    src="../../assets/images/icons/profile-picture-image.svg"
                    alt="Profile"
                  />
                  <p>My Profile</p>
                  <i class="fa fa-angle-down"></i>
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
  <InvestorProfileModal></InvestorProfileModal>
</template>

<script setup>
import { defineComponent, ref, computed } from "vue";
import InvestorProfileModal from "@/components/investor/ProfileModal.vue";
import TabComponentVue from "@/components/TabComponent.vue";
import { useStore } from "vuex";

const store = useStore();
const name = ref("InvestorDashboardHeader");
const isMenuActive = ref(false);

const notifications = computed(() => store.getters.getInvestor.Notifications);
</script>
