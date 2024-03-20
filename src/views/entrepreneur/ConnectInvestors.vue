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
          <div class="connect-with-investor">
            <p class="gray">Connect with investors</p>
            {{ error }}
            <ConnectPeople
              :users="allUsersList"
              :isVisible="loadingState"
              @createConnectionRequest="createConnectionRequest"
              :viewBy="viewByRoutePath"
            ></ConnectPeople>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineComponent, ref, computed, onMounted } from "vue";
import DashboardHeader from "@/components/entrepreneur/DashboardHeader.vue";
import ConnectSidebar from "@/components/entrepreneur/ConnectSidebar.vue";
import ConnectHeader from "@/components/entrepreneur/ConnectHeader.vue";
import ConnectPeople from "@/components/ConnectPeople.vue";

import { useStore } from "vuex";
import { useErrorHandling } from "../../helpers/errorLib";
import server from "@/services/server";
import { useRoute } from "vue-router";

const store = useStore();
const { error, setError, clearError, handleStatusCodeError } =
  useErrorHandling();

const route = useRoute();

const isMenuActive1 = ref(false);
const title = ref("Investors");
const name = ref("ConnectInvestors");
const loadingState = ref(false);

const leftSidebarCampaigns = computed(() => {
  const allCampaigns = store.getters.getEnteprenuer.myCampaigns;
  const sidebarCampaigns = allCampaigns ? allCampaigns.slice(0, 3) : [];
  return sidebarCampaigns;
});
const viewByRoutePath = ref(route.path.split("/")[1]);

const id = computed(() => store.getters.getEnteprenuer.id);
const role = computed(() => store.getters.getEnteprenuer.accounType);

const allUsersList = ref([]);

const createConnectionRequest = (useRole, userId) => {
  loadingState.value = true;
  console.log(userId);
  const payload = {
    role: role.value,
    request_id: id.value,
    investor_id: userId,
  };
  server()
    .post("/enterpreneur/roles/createConnectionRequest", payload)
    .then((response) => {
      loadingState.value = false;
      setError("");
    })
    .catch((err) => {
      loadingState.value = false;
      if (
        Object.prototype.hasOwnProperty.call(
          err.response.data,
          "already-created"
        )
      ) {
        setError("Connection request already sent");
      } else if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
      } else {
        setError("An unexpected error occurred.");
      }
    });
};

const getAllUsers = async () => {
  server()
    .get("/enterpreneur/roles/getAllUsers")
    .then((response) => {
      const userList = response.data;
      const filteredUsers = userList.filter(
        (user) => user.id !== id.value || user.role !== role.value
      );
      const users = filteredUsers.filter((item) => item.role != "enterprenuer");
      allUsersList.value.push(...users);
    })
    .catch((err) => {
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
    .then(() => {
      getAllUsers();
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
