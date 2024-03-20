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
                <RouterLink to="/entrepreneur/"
                  ><img
                    src="../../assets/images/icons/home-icon.svg"
                    alt="Home"
                  />Home</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/entrepreneur/live-listing"
                  ><img
                    src="../../assets/images/icons/live-listing-icon.svg"
                    alt="Live"
                  />Live Listings</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/entrepreneur/network"
                  ><img
                    src="../../assets/images/icons/peoples-icon.svg"
                    alt="connect"
                  />Connect</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/entrepreneur/funds"
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
                    <RouterLink to="/entrepreneur/join-team"
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
                <RouterLink to="/entrepreneur/"
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
                <RouterLink
                  data-bs-target="#myModal"
                  data-bs-toggle="offcanvas"
                  to="#"
                  ><img
                    src="../../assets/images/icons/profile-picture-image.svg"
                    alt="Profile"
                  />
                  <p>My Profile</p>
                  <i class="fa fa-angle-down"></i>
                </RouterLink>
              </li>
              <li class="profile desktop-screen">
                <RouterLink to="/entrepreneur/profile"
                  ><img
                    src="../../assets/images/icons/profile-picture-image.svg"
                    alt="Profile"
                  />
                  <p>My Profile</p>
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
  <ProfileModal></ProfileModal>
</template>

<script setup>
import { defineComponent, ref, onMounted, computed } from "vue";
import ProfileModal from "@/components/entrepreneur/ProfileModal.vue";
import TabComponentVue from "@/components/TabComponent.vue";
import { useStore } from "vuex";

const store = useStore();

const isMenuActive = ref(false);
const name = ref("DashboardHeader");

const notifications = computed(
  () => store.getters.getEnteprenuer.Notifications
);

const showCount = () => {
  console.log(notifications.value.length);
};
</script>

<style scoped>
/* Default styles for desktop */
.profile {
  display: none;
}

/* Media query to apply styles for screens smaller than 768 pixels (adjust as needed) */
@media (max-width: 767px) {
  .profile {
    display: block; /* Display on smaller screens */
  }
}

/* Default styles for desktop */
.profile.desktop-screen {
  display: none;
}

/* Media query to apply styles for screens 768 pixels and wider (adjust as needed) */
@media (min-width: 768px) {
  .profile.desktop-screen {
    display: block; /* Display on desktop screens */
  }
}
</style>