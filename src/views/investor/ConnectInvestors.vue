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
          <div class="connect-with-investor">
            <p class="gray">Connect with investors</p>
            <ConnectPeople
              :users="allUsersList"
              :isVisible="loadingState"
              @createConnectionRequest="createConnectionRequest"
              :viewBy="viewByRoutePath"
              :viewId="id"
            ></ConnectPeople>
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
import ConnectPeople from "@/components/ConnectPeople.vue";

import { useStore } from "vuex";
import { useErrorHandling } from "../../helpers/errorLib";
import server from "@/services/server";
import { formValidations } from "../../helpers/formValidations";
import { postValidationSchema } from "../../helpers/validationSchema";
import { postFeedPayLoad } from "../../helpers/payloads";
import { formatContent } from "@/filters/filter";
import { sharePost } from "@/helpers/shareLib";
import { useRoute } from "vue-router";

const store = useStore();
const { error, setError, clearError, handleStatusCodeError } =
  useErrorHandling();
const { errors, handleSubmit, defineField, resetForm } =
  formValidations(postValidationSchema);
const route = useRoute();

const name = ref("InvestorsConnect");
const isMenuActive1 = ref(false);
const allUsersList = ref([]);
const id = computed(() => store.getters.getInvestor.id);
const role = computed(() => store.getters.getInvestor.accounType);
const loadingState = ref(false);

const leftSidebarFunds = computed(() => {
  const funds = store.getters.getInvestor.funds;
  const res = funds ? funds.slice(0, 3) : [];
  return res;
});

const viewByRoutePath = ref(route.path.split("/")[1]);

const getAllUsers = async () => {
  server()
    .get("/investors/roles/getAllUsers")
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

const createConnectionRequest = (useRole, userId) => {
  loadingState.value = true;
  const payload = {
    role: role.value,
    request_id: id.value,
    investor_id: userId,
  };
  server()
    .post("/investors/roles/createConnectionRequest", payload)
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

const filterUserList = (query) => {
  if (!query) return getAllUsers();
  allUsersList.value = allUsersList.value.filter(
    (item) =>
      item.fullname.toLowerCase().includes(query.toLowerCase()) ||
      item.fullname.toLowerCase() === query
  );
};

onMounted(async () => {
  await store
    .dispatch("getLoggedInvestorProfile")
    .then((response) => {
      getAllUsers();
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
