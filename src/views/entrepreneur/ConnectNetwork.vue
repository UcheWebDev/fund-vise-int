<template>
  <DashboardHeader></DashboardHeader>
  <section class="dashboard live-listing connect-network">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-4">
          <ConnectSidebar :campaings="leftSidebarCampaigns"></ConnectSidebar>
        </div>
        <div class="col-lg-9 col-md-8">
          <ConnectHeader :title="title"></ConnectHeader>
          <div class="mobile-only-wrapper">
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
          <div class="connection-requests">
            <p>Connection Requests</p>

            <!--no new connection request-->
            <div v-if="connectionRequests && !connectionRequests.length">
              <p>****No new connection request</p>
            </div>

            <div
              class="connection-card"
              v-for="request in connectionRequests"
              :key="request"
            >
              <div class="profile-info">
                <div class="img-wrapper">
                  <img
                    src="../../assets/images/icons/profile-image-connect.svg"
                    alt="Profile"
                  />
                </div>
                <div class="content-wrapper">
                  <p>{{ request.bio.fullname }}</p>
                  <p class="x-small">{{ request.role }}</p>
                </div>
              </div>
              <p class="x-small gray">Founder, Her tech Africa</p>
              <div class="visit">
                <a href="#"
                  ><img
                    src="../../assets/images/icons/attachment-icon.svg"
                    alt="Attachments"
                  />Visit Profile</a
                >
              </div>
              <div class="btn-wrapper">
                <a
                  href="#"
                  class="btn-style transparent"
                  @click="ignoreConnectionRequest(request.id)"
                >
                  <SpinButton v-if="isAcceptLoadingRequest" class="spin-text" />
                  <span v-else class="btn-text"> Ignore </span></a
                >
                <a
                  href="#"
                  class="btn-style black"
                  @click="acceptConnectionRequest(request.id)"
                >
                  <SpinButton v-if="isAcceptLoadingRequest" class="spin-text" />
                  <span v-else class="btn-text white-text"> Accept </span>
                </a>
              </div>
            </div>
          </div>
          <div class="connect-with-investor">
            <div class="row">
              <div
                class="col-lg-4 col-md-6"
                v-if="myNetwork && myNetwork.length < 1"
              >
                <p>You dont have any user in your network...</p>
              </div>
              
              <div
                class="col-lg-4 col-md-6"
                v-for="network in myNetwork"
                :key="network"
              >
                <div class="investor-card">
                  <div class="img-wrapper">
                    <img
                      src="../../assets/images/team-player-three.png"
                      alt="Team"
                    />
                  </div>
                  <div class="content-wrapper">
                    <p class="semi-bold">
                      {{
                        network.bio.fullname
                          ? network.bio.fullname
                          : "fullname"
                      }}<img
                        src="../../assets/images/icons/elipses-gray.svg"
                        class="icon"
                        alt="elipse"
                      /><span>{{
                        network.bio.location ? network.bio.location : "location"
                      }}</span>
                    </p>
                    <p class="x-small">{{ network.role }}</p>
                    <p class="x-smal gray">
                      {{
                        network.bio.bio
                          ? network.bio.bio
                          : "this user has not updated his/her bio yet..."
                      }}
                    </p>
                    <div class="followed-by">
                      <p class="x-small">Followed by</p>
                      <img
                        src="../../assets/images/three-faces-girl.png"
                        alt="Team"
                      />
                    </div>
                  </div>
                  <div class="btn-wrapper">
                    <a href="#" class="btn-style black">Message</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineComponent, ref, onMounted, computed } from "vue";
import DashboardHeader from "@/components/entrepreneur/DashboardHeader.vue";
import ConnectSidebar from "@/components/entrepreneur/ConnectSidebar.vue";
import ConnectHeader from "@/components/entrepreneur/ConnectHeader.vue";
import SpinButton from "@/components/SpinButton.vue";

import { useStore } from "vuex";
import { useErrorHandling } from "../../helpers/errorLib";
import server from "@/services/server";

const isMenuActive1 = ref(false);
const title = ref("My Network");
const isAcceptLoadingRequest = ref(false);
const isRejectLoadingRequest = ref(false);

const store = useStore();
const { error, setError, clearError, handleStatusCodeError } =
  useErrorHandling();

const connectionRequests = computed(
  () => store.getters.getEnteprenuer.connectionRequests
);

const leftSidebarCampaigns = computed(() => {
  const allCampaigns = store.getters.getEnteprenuer.myCampaigns;
  const sidebarCampaigns = allCampaigns ? allCampaigns.slice(0, 3) : [];
  return sidebarCampaigns;
});

const myNetwork = computed(() => store.getters.getEnteprenuer.myNetwork);

const acceptConnectionRequest = (connectionId) => {
  isAcceptLoadingRequest.value = true;
  server()
    .put("/enterpreneur/roles/acceptConnectionRequest", {
      id: connectionId,
    })
    .then((response) => {
      isAcceptLoadingRequest.value = false;
      validateUser();
    })
    .catch((err) => {
      isAcceptLoadingRequest.value = true;
      if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
      } else {
        setError("An unexpected error occurred.");
      }
    });
};

const ignoreConnectionRequest = (connectionId) => {
  isRejectLoadingRequest.value = true;
  server()
    .put("/enterpreneur/roles/rejectConnectionRequest", {
      id: connectionId,
    })
    .then((response) => {
      isRejectLoadingRequest.value = false;
      validateUser();
      console.log(response);
    })
    .catch((err) => {
      isRejectLoadingRequest.value = false;
      if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
      } else {
        setError("An unexpected error occurred.");
      }
    });
};

const validateUser = async () => {
  await store
    .dispatch("getLoggedEnterprenuerProfile")
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
      } else {
        setError("An unexpected error occurred.");
      }
    });
};

onMounted(() => {
  validateUser();
});
</script>

<style scoped>
.white-text {
  color: white;
  line-height: 24px;
  font-size: 10px;
  font-family: "Sora", sans-serif;
  /* font-weight: 600; */
}

.black:hover .white-text {
  color: #000;
  line-height: 24px;
  font-size: 10px;
  font-family: "Sora", sans-serif;
  /* font-weight: 600; */
}

.btn-style .black span {
  background: #000000;
  color: #ffffff;
}

.transparent-text {
  color: #0000;
  line-height: 24px;
  font-size: 10px;
  font-family: "Sora", sans-serif;
}

.transparent:hover .transparent-text {
  color: #000;
  line-height: 24px;
  font-size: 10px;
  font-family: "Sora", sans-serif;
  /* font-weight: 600; */
}

.btn-text {
  line-height: 24px;
  font-size: 10px;
  font-family: "Sora", sans-serif;
}

.btn-style .transparent {
  background: transparent;
  color: #000;
}
</style>
