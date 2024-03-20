<template>
  <InvestorDashboardHeader></InvestorDashboardHeader>
  <div class="dashboard profile-main-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-11">
          <div class="profile-view-wrapper">
            <div class="thumbnail-image">
              <img
                src="../../assets/images/profile-bg-image.png"
                class="profile"
                alt="Profile"
              />
            </div>
            <div class="profile-image">
              <img
                src="../../assets/images/profile-picture.png"
                alt="Profile"
              />
            </div>
            <div class="row">
              <div class="col-md-7">
                <div class="content-wrapper">
                  <h2>
                    {{ getFullname }}
                    <img
                      src="../../assets/images/icons/star-blue-big.svg"
                      alt="star"
                    />
                  </h2>
                  <p class="small">
                    {{ accounType }}
                    <span class="m-1" :class="getCountryCode(country)"></span
                    >{{ city ? city : "*" }} , {{ country ? country : "*" }}
                  </p>
                  <a href="#"
                    ><img
                      src="../../assets/images/icons/bookmark-yellow-big.svg"
                      class="icon"
                      alt="bookmark"
                    />Premium</a
                  >
                  <div class="about">
                    <p class="semi-bold">About</p>
                    <p class="small gray">
                      {{ bio ? bio : "Bio has not been updated yet" }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-5 text-end">
                <div class="btn-wrapper">
                  <div class="social-icons">
                    <a href="#"
                      ><img
                        src="../../assets/images/icons/twitter-icon.svg"
                        alt="Twitter"
                    /></a>
                    <a href="#"
                      ><img
                        src="../../assets/images/icons/insta-icon.svg"
                        alt="instagram"
                    /></a>
                    <a href="#"
                      ><img
                        src="../../assets/images/icons/lickedin-icon.svg"
                        alt="linkedin"
                    /></a>
                    <a href="#"
                      ><img
                        src="../../assets/images/icons/facebook-icon.svg"
                        alt="facebook"
                    /></a>
                  </div>
                  <a
                    href="#"
                    data-bs-target="#editModal"
                    data-bs-toggle="modal"
                    class="btn-style black"
                    >Edit Profile</a
                  >
                </div>
                <div class="connections">
                  <img
                    src="../../assets/images/icons/three-profile.svg"
                    alt="profile"
                  />
                  <p class="small semi-bold">
                    {{ myNetwork ? myNetwork.length : 0 }} Connection
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <p class="semi-bold">Posts</p>
            <div class="col-md-8">
              <div class="main-body">
                <div v-if="myFeeds.length === 0">
                  <p>No post has been created by you</p>
                </div>
                
                <div
                  class="post-wrapper"
                  v-for="myFeed in myFeeds"
                  :key="myFeed"
                >
                  <div class="close"><i class="fa fa-x"></i></div>
                  <div class="profile">
                    <div class="img-wrapper">
                      <img
                        src="../../assets/images/profile-main-image.svg"
                        alt="Profile Picture"
                      />
                    </div>
                    <div class="content-wrapper">
                      <p class="bold">
                        {{ myFeed.publishedBy }}
                        <img
                          src="../../assets/images/icons/star-green-small.svg"
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
                          src="../../assets/images/icons/heart-icon.svg"
                          class="icon"
                          alt="heart"
                        />{{ myFeed.likes }}</a
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
                      <a href="#" @click="likePost(myFeed.id)"
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
            <div class="col-md-4">
              <div class="side-wrapper">
                <div class="campaign-wrapper">
                  <p class="heading dark-gray semi-bold">My Funds</p>
                  <div
                    class="campaign-card"
                    v-for="fund in myFunds"
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
                    v-if="myFunds && myFunds.length == 3"
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
  <EditProfile
    :countries="countryList"
    @getCities="getCitiesInCountry"
    @validateUser="validateUser"
    @catchProfileUpdateError="catchProfileUpdateError"
    :cities="cities"
  ></EditProfile>
</template>

<script setup>
import { defineComponent, ref, computed, onMounted } from "vue";
import EditProfile from "@/components/investor/EditProfile.vue";
import InvestorDashboardHeader from "@/components/investor/DashboardHeader.vue";

import { getCountryCode } from "@/helpers/iso";
import { formatContent } from "@/filters/filter";

import { useStore } from "vuex";
import { useErrorHandling } from "../../helpers/errorLib";
import server from "@/services/server";
import axios from "axios";
import { formatNumberFilter } from "../../filters/filter.js";

const store = useStore();
const { error, setError, clearError, handleStatusCodeError } =
  useErrorHandling();

const name = "InvestorProfile";
const isMenuActive1 = ref(false);
const myFeeds = ref([]);

const country = computed(() => store.getters.getInvestor.country);
const city = computed(() => store.getters.getInvestor.city);
const getFullname = computed(() => store.getters.getInvestor.fullname);
const accounType = computed(() => store.getters.getInvestor.accounType);
const userId = computed(() => store.getters.getInvestor.id);
const bio = computed(() => store.getters.getInvestor.bio);
const myNetwork = computed(() => store.getters.getInvestor.myNetwork);

const myFunds = computed(() => {
  const funds = store.getters.getInvestor.funds;
  const res = funds ? funds.slice(0, 3) : [];
  return res;
});

const getMyFeeds = () => {
  server()
    .get("/investors/roles/getFeeds")
    .then((response) => {
      const feedsResponse = response.data.data;
      const userFeeds = feedsResponse.filter(
        (item) =>
          item.investorId == userId.value && item.role == accounType.value
      );
      myFeeds.value = userFeeds;
    })
    .catch((err) => {
      if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
      } else {
        setError("An unexpected error occurred.");
      }
    });
};

const countryList = ref([]);
const cities = ref([]);
const countriesApiUrl = "https://countriesnow.space/api/v0.1/countries";
const citiesApiUrl = "https://countriesnow.space/api/v0.1/countries/cities";

const getCountries = async () => {
  try {
    const response = await axios.get(countriesApiUrl);
    const data = response.data.data;
    countryList.value = data.map((country) => country.country);
  } catch (err) {
    handleStatusCodeError(err.response.status);
  }
};

const getCitiesInCountry = async (country) => {
  try {
    const response = await axios.post(citiesApiUrl, {
      country: country,
    });
    cities.value = response.data.data;
  } catch (err) {
    if (err.response && err.response.status) {
      handleStatusCodeError(err.response.status);
    } else {
      setError("An unexpected error occurred.");
    }
  }
};

const validateUser = async () => {
  await store
    .dispatch("getLoggedInvestorProfile")
    .then(() => {
      getMyFeeds();
    })
    .catch((err) => {
      if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
      } else {
        setError("An unexpected error occurred.");
      }
    });
};

const catchProfileUpdateError = (message) => {
  if (message === "fieldError") {
    console.log("field");
    setError("cannot complete your profile update please check all fields");
  } else {
    console.log("unp");
    setError("an unexpected error occurred");
  }
};

onMounted(() => {
  validateUser();
  getCountries();
});
</script>
