<template>
  <div class="row">
    <div v-if="users && !users.length">
      <p>No data to show...</p>
    </div>

    <div class="col-lg-4 col-md-6" v-for="user in users" :key="user">
      <div class="investor-card">
        <div class="img-wrapper">
          <img src="../assets/images/team-player-three.png" alt="Team" />
        </div>
        <div class="content-wrapper">
          <p class="semi-bold">
            {{ user.fullname ? user.fullname : "fullname"
            }}<img
              src="../assets/images/icons/elipses-gray.svg"
              class="icon"
              alt="elipse"
            /><span>{{ user.location ? user.location : "location" }}</span>
          </p>
          <p class="x-small">{{ user.role }}</p>
          <p class="x-smal gray">
            {{ user.bio ? user.bio : "user has not updated their bio" }}
          </p>
          <div class="followed-by">
            <p class="x-small">Followed by</p>
            <img src="../assets/images/three-faces-girl.png" alt="Team" />
          </div>
        </div>
        <div class="btn-wrapper">
          <a
            href="#"
            class="btn-style black"
            @click="createConnectionRequest(user.role, user.id)"
          >
            <SpinButton v-if="isLoadingRequest" />
            <span v-else class="btn-text"> Connect </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  defineComponent,
  defineProps,
  ref,
  computed,
  onMounted,
  defineEmits,
  watch,
} from "vue";
import SpinButton from "@/components/SpinButton.vue";

import server from "@/services/server";

const props = defineProps(["users", "isVisible", "viewBy", "viewId"]);
const isLoadingRequest = ref(false);
const emit = defineEmits(["createConnectionRequest"]);

const isVisible = ref(props.isVisible);

const createConnectionRequest = (role, userId) => {
  emit("createConnectionRequest", role, userId);
};

const handleNewVisibleState = (newVal) => {
  if (newVal === true) {
    isLoadingRequest.value = true;
  } else {
    isLoadingRequest.value = false;
  }
};

watch(
  () => props.isVisible,
  (newValue, oldValue) => {
    isVisible.value = newValue;
    handleNewVisibleState(newValue);
  }
);
</script>

<style scoped>
.btn-text {
  color: #ffffff;
  line-height: 24px;
  font-size: 12px;
}

.btn-style:hover {
  background: #000000;
}

.close {
  cursor: pointer;
}

.spinner-container {
  height: 200px; /* Set the desired height */
  align-items: center;
}

/* <router-link: to=
  "{
          name: 'viewProfileApp',
          query: {
            viewBy: viewBy,
            viewId: viewId,
            userType: user.role,
            id: user.id,
          },
        }"
  >; */
</style>