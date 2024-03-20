<template>
  <DashboardHeader></DashboardHeader>
  <div class="dashboard profile-main-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-xl-9 col-lg-9">
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
                    <p class="small gray mt-3">
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
                  <p class="heading dark-gray semi-bold">My Campaigns</p>
                  <div
                    class="no-campaing"
                    v-if="myCampaigns && !myCampaigns.length"
                  >
                    <div class="content-wrapper">
                      <p>No campaign created</p>
                    </div>
                  </div>
                  <div
                    class="campaign-card"
                    v-for="myCampaign in myCampaigns"
                    :key="myCampaign"
                  >
                    <div class="content-wrapper">
                      <p class="p semi-bold">{{ myCampaign.compayName }}</p>
                      <p class="x-small">{{ myCampaign.campaignIndustry }}</p>
                      <p class="x-small dark-gray">
                        {{ myCampaign.createdAt }}
                      </p>
                    </div>
                    <div class="btn-wrapper">
                      <p>Raising</p>
                      <p class="p semi-bold">
                        ${{ formatNumberFilter(myCampaign.maxTarget) }}
                      </p>
                      <RouterLink
                        :to="`../entrepreneur/campaign/${myCampaign.id}`"
                        class="btn-style transparent"
                        >View</RouterLink
                      >
                    </div>
                  </div>

                  <div
                    class="btn-wrapper"
                    v-if="myCampaigns && myCampaigns.length == 3"
                  >
                    <RouterLink
                      to="../entrepreneur/campaigns"
                      class="underline small"
                      >View All></RouterLink
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 text-end">
          <div class="verify-identity">
            <p>
              <img
                src="../../assets/images/icons/verify-check.svg"
                alt="verify check icon"
                class="icon"
              />Verify your identity
            </p>
            <div class="content-wrapper">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                quam eu quam interdum euismod nec vel lectus.
              </p>
            </div>
            <a href="#" class="btn-style">Verify with Persona</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <EditProfile
    :countries="countryList"
    @getCities="getCitiesInCountry"
    @validateUser="validateUser"
    :cities="cities"
  ></EditProfile>
</template>
  
  <script setup>
import { defineComponent, ref, computed, onMounted } from "vue";
import EditProfile from "@/components/entrepreneur/EditProfile.vue";
import DashboardHeader from "@/components/entrepreneur/DashboardHeader.vue";

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

const isMenuActive1 = ref(false);
const name = ref("ConnectInvestors");
const myFeeds = ref([]);

const country = computed(() => store.getters.getEnteprenuer.country);
const getFullname = computed(() => store.getters.getEnteprenuer.fullname);
const accounType = computed(() => store.getters.getEnteprenuer.accounType);
const userId = computed(() => store.getters.getEnteprenuer.id);
const bio = computed(() => store.getters.getEnteprenuer.bio);
const myNetwork = computed(() => store.getters.getEnteprenuer.myNetwork);

const myCampaigns = computed(() => {
  const allCampaigns = store.getters.getEnteprenuer.myCampaigns;
  const sidebarCampaigns = allCampaigns ? allCampaigns.slice(0, 3) : [];
  return sidebarCampaigns;
});

const city = computed(() => {
  const city = store.getters.getEnteprenuer.city;
  return city;
});

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

const getMyFeeds = () => {
  server()
    .get("/enterpreneur/roles/getFeeds")
    .then((response) => {
      const feedsResponse = response.data.data;
      const userFeeds = feedsResponse.filter(
        (item) =>
          item.enterpreneurId == userId.value && item.role == accounType.value
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

const likePost = (id) => {
  server()
    .put("/enterpreneur/roles/likePost", {
      feeds_id: id,
      liker_fullname: getFullname.value,
    })
    .then((response) => {
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

const validateUser = async () => {
  await store
    .dispatch("getLoggedEnterprenuerProfile")
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

onMounted(() => {
  validateUser();
  getCountries();
});
</script>