<template>
  <InvestorDashboardHeader></InvestorDashboardHeader>
  <section class="dashboard live-listing connect-network">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-4">
          <InvestorConnectSidebar
            :funds="leftSidebarFunds"
          ></InvestorConnectSidebar>
        </div>
        <div class="col-lg-9 col-md-8">
          <ConnectHeader @filter="filterUserList"></ConnectHeader>
          <div class="mobile-only-wrapper">
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
          <div class="connection-requests">
            <p>Connection Requests</p>
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
            <!-- <p class="gray">My network</p> -->
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
import { defineComponent, ref, computed, onMounted } from "vue";
import ConnectHeader from "@/components/entrepreneur/ConnectHeader.vue";
import InvestorConnectSidebar from "@/components/investor/ConnectSidebar.vue";
import InvestorDashboardHeader from "@/components/investor/DashboardHeader.vue";

import { useStore } from "vuex";
import { useErrorHandling } from "../../helpers/errorLib";
import server from "@/services/server";
import { formValidations } from "../../helpers/formValidations";
import { postValidationSchema } from "../../helpers/validationSchema";
import { postFeedPayLoad } from "../../helpers/payloads";
import { formatContent } from "@/filters/filter";
import { sharePost } from "@/helpers/shareLib";

const store = useStore();
const { error, setError, clearError, handleStatusCodeError } =
  useErrorHandling();
const { errors, handleSubmit, defineField, resetForm } =
  formValidations(postValidationSchema);

const name = ref("InvestorConnectNetwork");
const isMenuActive1 = ref(false);
const isAcceptLoadingRequest = ref(false);
const isRejectLoadingRequest = ref(false);

const leftSidebarFunds = computed(() => {
  const funds = store.getters.getInvestor.funds;
  const res = funds ? funds.slice(0, 3) : [];
  return res;
});

const myNetwork = computed(() => store.getters.getInvestor.myNetwork);
const filteredNetwork = ref([]);

const connectionRequests = computed(
  () => store.getters.getInvestor.connectionRequests
);

// const filterUserList = async (query) => {
//   if (!query) return await store.dispatch("getLoggedInvestorProfile");
//   filteredNetwork.value = myNetwork.value.filter(
//     (item) =>
//       item.bio.fullname.toLowerCase().includes(query.toLowerCase()) ||
//       item.bio.fullname.toLowerCase() === query
//   );
// };

const acceptConnectionRequest = (connectionId) => {
  isAcceptLoadingRequest.value = true;
  server()
    .put("/investors/roles/acceptConnectionRequest", {
      id: connectionId,
    })
    .then((response) => {
      isAcceptLoadingRequest.value = false;
      // validateUser();
      console.log(response);
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
    .put("/investors/roles/rejectConnectionRequest", {
      id: connectionId,
    })
    .then((response) => {
      isRejectLoadingRequest.value = false;
      // validateUser();
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

onMounted(async () => {
  await store
    .dispatch("getLoggedInvestorProfile")
    .then((response) => {
      console.log("...");
    })
    .catch((err) => {
      if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
      } else {
        setError("An unexpected error occurred.");
      }
    });
});
</script>
