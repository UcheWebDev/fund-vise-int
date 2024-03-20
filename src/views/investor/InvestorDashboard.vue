<template>
  <InvestorDashboardHeader></InvestorDashboardHeader>
  <div class="dashboard">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-4">
          <InvestorLeftSidebar
            :fullname="getFullname"
            :city="city"
            :country="country"
            :funds="leftSidebarFunds"
          ></InvestorLeftSidebar>
        </div>
        <div class="col-lg-6 col-md-8">
          <div class="main-body">
            <div class="write-post">
              <div class="img-wrapper">
                <img
                  src="../../assets/images/profile-main-image-small.svg"
                  alt="Profile picture"
                />
              </div>
              <div class="content-wrapper">
                <form @submit="onSubmit">
                  <div class="form">
                    <div class="form-group">
                      <textarea
                        name="text"
                        id="text"
                        cols="30"
                        rows="10"
                        placeholder="Write a post"
                        class="form-control"
                        v-model="post"
                      ></textarea>
                    </div>
                  </div>
                  <div class="btn-wrapper">
                    <a href="#"
                      ><img
                        src="../../assets/images/icons/photo-icon.svg"
                        alt="Photo Video Icon"
                        class="icon"
                      />Photo/Video</a
                    >
                    <button class="btn-style normal small">
                      <SpinButton v-if="isLoadingRequest" />
                      <span v-else class="btn-text"> Post</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div v-if="loadingServerData">
              <!-- Add your spinner component or loading indicator here -->
              <div class="post-wrapper" v-for="n in 1" :key="n">
                <div
                  class="main-content d-flex justify-content-center spinner-container"
                >
                  <loadingServerSpin />
                </div>
              </div>
            </div>

            <div v-else>
              <div
                class="post-wrapper"
                v-for="feed in localFeeds"
                :key="feed.id"
              >
                <div class="close" @click="removeFeed(feed.id)">
                  <i class="fa fa-x"></i>
                </div>
                <div class="profile">
                  <div class="img-wrapper">
                    <img
                      src="../../assets/images/profile-main-image.svg"
                      alt="Profile Picture"
                    />
                  </div>
                  <div class="content-wrapper">
                    <p class="bold">
                      {{ feed.publishedBy }}
                      <img
                        src="../../assets/images/icons/star-green-small.svg"
                        alt="Star"
                      />
                    </p>
                    <p>{{ feed.role }} | $2m+ Fund</p>
                    <p>{{ feed.createdAt }}</p>
                  </div>
                </div>
                <div class="main-content">
                  <div v-html="formatContent(feed.feedBody)"></div>
                  <div class="summary">
                    <a href="#"
                      ><img
                        src="../../assets/images/icons/heart-icon.svg"
                        class="icon"
                        alt="heart"
                      />{{ feed.likes }}</a
                    >
                    <span></span>
                    <a href="#"
                      ><img
                        src="../../assets/images/icons/comment-icon.svg"
                        class="icon"
                        alt="Message"
                      />28</a
                    >
                  </div>
                </div>
                <div class="action-wrapper">
                  <div class="content-wrapper">
                    <img
                      src="../../assets/images/icons/profile-small-icon.svg"
                      alt="Profile"
                    />
                    <div class="form">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Write a comment "
                        />
                      </div>
                    </div>
                  </div>
                  <div class="btn-wrapper">
                    <a href="#" @click="likePost(feed.id)"
                      ><img
                        src="../../assets/images/icons/heart-icon.svg"
                        class="icon"
                        alt="heart"
                      />Like</a
                    >
                    <a href="#"
                      ><img
                        src="../../assets/images/icons/comment-icon.svg"
                        class="icon"
                        alt="Message"
                      />Comments</a
                    >
                    <a href="#"
                      ><img
                        src="../../assets/images/icons/share-icon.svg"
                        class="icon"
                        alt="Message"
                      />Share</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <RightSidebar></RightSidebar>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

import RightSidebar from "@/components/entrepreneur/RightSidebar.vue";
import InvestorDashboardHeader from "@/components/investor/DashboardHeader.vue";
import InvestorLeftSidebar from "@/components/investor/InvestorLeftSidebar.vue";
import SpinButton from "@/components/SpinButton.vue";
import loadingServerSpin from "@/components/LoadingServerSpin.vue";

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

const [post, postAttrs] = defineField("post");
const name = ref("InvestorInvestorDashboard");
const isMenuActive1 = ref(false);

const loadingServerData = ref(true);

const getFullname = computed(() => store.getters.getInvestor.fullname);
const feeds = ref([]);
const localFeeds = ref([]);
const investor_id = computed(() => store.getters.getInvestor.id);
const accounType = computed(() => store.getters.getInvestor.accounType);
const country = computed(() => store.getters.getInvestor.country);

const leftSidebarFunds = computed(() => {
  const funds = store.getters.getInvestor.funds;
  const res = funds ? funds.slice(0, 3) : [];
  return res;
});

const city = computed(() => {
  const city = store.getters.getInvestor.city;
  return city;
});
const storedFilterIds = ref(
  JSON.parse(localStorage.getItem("filterIds")) || []
);
const isLoadingRequest = ref(false);

const onSubmit = handleSubmit((values) => {
  isLoadingRequest.value = true;
  const payload = postFeedPayLoad(post, getFullname, investor_id, accounType);
  server()
    .post("/investors/roles/createFeeds", payload)
    .then((response) => {
      isLoadingRequest.value = false;
      fetchFeedsFromBackend();
      resetForm();
    })
    .catch((err) => {
      isLoadingRequest.value = false;
      if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
      } else {
        setError("An unexpected error occurred.");
      }
    });
});

const likePost = (id) => {
  console.log(id);
  server()
    .put("/investors/roles/likePost", {
      feeds_id: id,
      liker_fullname: getFullname.value,
    })
    .then((response) => {
      fetchFeedsFromBackend();
    })
    .catch((err) => {
      isLoadingRequest.value = false;
      if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
      } else {
        setError("An unexpected error occurred.");
      }
    });
};

const removeFeed = (id) => {
  storedFilterIds.value.push(id);
  localStorage.setItem("filterIds", JSON.stringify(storedFilterIds.value));
  fetchFeedsFromBackend();
};

const fetchFeedsFromBackend = () => {
  server()
    .get("/investors/roles/getFeeds")
    .then((response) => {
      const feedsResponse = response.data.data;
      localFeeds.value = feedsResponse.filter(
        (item) => !storedFilterIds.value.includes(item.id)
      );
      loadingServerData.value = false;
    })
    .catch((err) => {
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
      fetchFeedsFromBackend();
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
</style>
