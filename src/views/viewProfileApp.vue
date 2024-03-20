<template>
  <!-- <DashboardHeader></DashboardHeader> -->
  <component :is="investorHeaderComponent" />
  <component :is="enterprenuerHeaderComponent" />
  <div class="dashboard profile-main-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-11">
          <div class="profile-view-wrapper">
            <div class="thumbnail-image">
              <img
                src="../assets/images/profile-bg-image.png"
                class="profile"
                alt="Profile"
              />
            </div>
            <div class="profile-image">
              <img src="../assets/images/profile-picture.png" alt="Profile" />
            </div>
            <div class="row">
              <div class="col-md-7">
                <div class="content-wrapper">
                  <h2>
                    {{ userDetails.fullname }}
                    <img
                      src="../assets/images/icons/star-blue-big.svg"
                      alt="star"
                    />
                  </h2>
                  <p class="small">
                    {{ userDetails.accounType }}
                    <span
                      class="m-1"
                      :class="getCountryCode(userDetails.country)"
                    ></span>
                    {{ userDetails.city }}, {{ userDetails.country }}
                  </p>
                  <a href="#"
                    ><img
                      src="../assets/images/icons/bookmark-yellow-big.svg"
                      class="icon"
                      alt="bookmark"
                    />Premium</a
                  >
                  <div class="about">
                    <p class="semi-bold">About</p>
                    <p class="small gray">
                      {{
                        userDetails.bio
                          ? userDetails.bio
                          : "Bio has not been updated yet"
                      }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-5 text-end">
                <div class="btn-wrapper">
                  <div class="social-icons">
                    <a href="#"
                      ><img
                        src="../assets/images/icons/twitter-icon.svg"
                        alt="Twitter"
                    /></a>
                    <a href="#"
                      ><img
                        src="../assets/images/icons/insta-icon.svg"
                        alt="instagram"
                    /></a>
                    <a href="#"
                      ><img
                        src="../assets/images/icons/lickedin-icon.svg"
                        alt="linkedin"
                    /></a>
                    <a href="#"
                      ><img
                        src="../assets/images/icons/facebook-icon.svg"
                        alt="facebook"
                    /></a>
                  </div>
                  <a href="#" class="btn-style black">Connect</a>
                </div>
                <div class="connections">
                  <img
                    src="../assets/images/icons/three-profile.svg"
                    alt="profile"
                  />
                  <p class="small semi-bold">
                    1
                    {{
                      userDetails.myNetwork ? userDetails.myNetwork.length : 0
                    }}
                    Connections
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <p class="semi-bold">Posts</p>
            <div class="col-md-8">
              <div class="main-body">
                <div
                  v-if="userDetails.myFeeds && userDetails.myFeeds.length === 0"
                >
                  <p>No post has been created</p>
                </div>
                <div
                  class="post-wrapper"
                  v-for="myFeed in userDetails.myFeeds"
                  :key="myFeed"
                >
                  <div class="close"><i class="fa fa-x"></i></div>
                  <div class="profile">
                    <div class="img-wrapper">
                      <img
                        src="../assets/images/profile-main-image.svg"
                        alt="Profile Picture"
                      />
                    </div>
                    <div class="content-wrapper">
                      <p class="bold">
                        {{ myFeed.publishedBy }}
                        <img
                          src="../assets/images/icons/star-green-small.svg"
                          alt="Star"
                        />
                      </p>
                      <p>{{ myFeed.role }} | $2m+ Fund</p>
                      <p>{{ myFeed.createdAt }}</p>
                    </div>
                  </div>
                  <div class="main-content">
                    <div v-html="formatContent(myFeed.feedBody)"></div>
                    <div class="summary">
                      <a href="#"
                        ><img
                          src="../assets/images/icons/heart-icon.svg"
                          class="icon"
                          alt="heart"
                        />{{ myFeed.likes }}</a
                      >
                      <span></span>
                      <a href="#"
                        ><img
                          src="../assets/images/icons/comment-icon.svg"
                          class="icon"
                          alt="Message"
                        />28</a
                      >
                    </div>
                  </div>
                  <div class="action-wrapper" v-show="false">
                    <div class="content-wrapper">
                      <img
                        src="../assets/images/icons/profile-small-icon.svg"
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
                      <a href="#" @click="likePost(myFeed.id)"
                        ><img
                          src="../assets/images/icons/heart-icon.svg"
                          class="icon"
                          alt="heart"
                        />Like</a
                      >
                      <a href="#"
                        ><img
                          src="../assets/images/icons/comment-icon.svg"
                          class="icon"
                          alt="Message"
                        />Comments</a
                      >
                      <a href="#"
                        ><img
                          src="../assets/images/icons/share-icon.svg"
                          class="icon"
                          alt="Message"
                        />Share</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="side-wrapper">
                <div class="campaign-wrapper">
                  <p class="heading dark-gray semi-bold">
                    {{ whoIs == "investor" ? "funds" : "My campaigns" }}
                  </p>
                  <div
                    v-if="userDetails.funds && userDetails.funds.length === 0"
                  >
                    <p>No fund has been created</p>
                  </div>
                  <div
                    v-if="
                      userDetails.myCampaigns &&
                      userDetails.myCampaigns.length === 0
                    "
                  >
                    <p>No campaign has been created</p>
                  </div>

                  <div
                    class="campaign-card"
                    v-for="fund in userDetails.funds"
                    :key="fund.id"
                  >
                    <div class="content-wrapper">
                      <p class="p semi-bold">{{ fund.fundName }}</p>
                      <p class="x-small">{{ fund.fundType }}</p>
                      <p class="x-small dark-gray">{{ fund.createdAt }}</p>
                    </div>
                    <div class="btn-wrapper">
                      <p>Raising</p>
                      <p class="p semi-bold">
                        ${{ formatNumberFilter(fund.fundValue) }}
                      </p>
                      <RouterLink
                        :to="`../investor/funds/${fund.id}`"
                        class="btn-style transparent"
                        >View</RouterLink
                      >
                    </div>
                  </div>

                  <div
                    class="btn-wrapper"
                    v-if="userDetails.fund && userDetails.fund == 3"
                  >
                    <RouterLink to="../investor/funds" class="underline small"
                      >View All></RouterLink
                    >
                  </div>

                  <div
                    class="btn-wrapper"
                    v-if="
                      userDetails.myCampaigns && userDetails.myCampaigns == 3
                    "
                  >
                    <RouterLink to="../investor/funds" class="underline small"
                      >View All></RouterLink
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-1 text-end">
          <div class="back-btn">
            <a href="#" class="icon"
              ><i class="fa fa-arrow-left icon"></i>Back</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
   
   <script setup>
import { defineComponent, ref, computed, onMounted } from "vue";
import InvestorDashboard from "@/components/investor/DashboardHeader.vue";
import enterprenuerDashboard from "@/components/entrepreneur/DashboardHeader.vue";

import { useErrorHandling } from "../helpers/errorLib";
import server from "@/services/server";
import { useRoute } from "vue-router";
import { getCountryCode } from "@/helpers/iso";
import { formatContent } from "@/filters/filter";
import { formatNumberFilter } from "../filters/filter.js";

const route = useRoute();
const { error, setError, clearError, handleStatusCodeError } =
  useErrorHandling();

const name = "viewProfileApp";
const isMenuActive1 = ref(false);
const whoIs = ref(route.query.userType);
const investorHeaderComponent = ref(null);
const enterprenuerHeaderComponent = ref(null);

const userDetails = ref([]);

const getAllUsers = async () => {
  server()
    .get(
      `/public/getUserByIdAndType/userId/${route.query.id}/userType/${route.query.userType}`
    )
    .then((response) => {
      userDetails.value = response.data.data;
    })
    .catch((err) => {
      if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
      } else {
        setError("An unexpected error occurred.");
      }
    });
};

const selecHeaderComponentToUse = () => {
  if (route.query.viewBy == "investor") {
    investorHeaderComponent.value = InvestorDashboard;
  } else {
    enterprenuerHeaderComponent.value = enterprenuerDashboard;
  }
};

onMounted(() => {
  selecHeaderComponentToUse();
  getAllUsers();
});
</script>
   