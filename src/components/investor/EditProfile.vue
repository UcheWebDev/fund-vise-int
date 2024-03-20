<template>
  <div class="verify-email-modal success-modal edit-modal">
    <div class="modal fade" id="editModal">
      <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <a href="#" data-bs-dismiss="modal"
              ><img
                src="../../assets/images/icons/cross-x-icon.svg"
                alt="Cross"
            /></a>
          </div>
          <div class="modal-body">
            <div class="form">
              <h3>Edit Profile</h3>
              <div class="row">
                <div class="col-md-12">
                  <div class="bio-wrapper">
                    <div class="img-wrapper">
                      <img
                        src="../../assets/images/edit-profile-image.svg"
                        alt="profile"
                      />
                    </div>
                    <div class="form-group">
                      <label for="text">Bio</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="profileData.bio"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="name">First Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      v-model="profileData.firstname"
                    />
                  </div>
                  <div class="form-group">
                    <label for="name">Email Address</label>
                    <input
                      type="email"
                      class="form-control"
                      v-model="profileData.email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="name">Account Type</label>
                    <select
                      name="one"
                      id="one"
                      class="form-control"
                      v-model="accounType"
                    >
                      <option :value="accounType" disabled>
                        {{ accounType }}
                      </option>
                    </select>
                    <i class="fa fa-angle-down"></i>
                  </div>
                  <div class="form-group">
                    <label for="name">Country</label>
                    <select
                      name="one"
                      id="one"
                      class="form-control"
                      v-model="profileData.country"
                      @change="getCities"
                    >
                      <option :value="profileData.country">
                        {{
                          profileData.country ? profileData.country : "select"
                        }}
                      </option>
                      <option v-for="c in countries" :key="c.id" :value="c">
                        {{ c }}
                      </option>
                    </select>
                    <i class="fa fa-angle-down"></i>
                  </div>
                  <div class="form-group">
                    <label for="name">City</label>
                    <select
                      name="one"
                      id="one"
                      class="form-control"
                      v-model="profileData.city"
                    >
                      <option :value="profileData.city" disabled selected>
                        {{
                          profileData.city
                            ? profileData.city
                            : "select a country"
                        }}
                      </option>
                      <option v-for="city in cities" :key="city">
                        {{ city }}
                      </option>
                    </select>
                    <i class="fa fa-angle-down"></i>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="name">Last Name</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="profileData.lastname"
                    />
                  </div>
                  <div class="form-group">
                    <label for="name">Gender</label>
                    <select
                      name="one"
                      id="one"
                      class="form-control"
                      v-model="profileData.gender"
                    >
                      <option :value="profileData.gender" selected disabled>
                        {{ profileData.gender ? profileData.gender : "select" }}
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    <i class="fa fa-angle-down"></i>
                  </div>
                  <div class="form-group">
                    <label for="name">LinkedIn</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="profileData.linkedin"
                    />
                  </div>
                  <div class="form-group">
                    <label for="name">Twitter</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="profileData.twitter"
                    />
                  </div>
                  <div class="form-group">
                    <label for="name">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      disabled
                      placeholder="*********"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="details-wrapper">
              <div class="row">
                <div class="col-md-6 text-start">
                  <div class="content-wrapper">
                    <p class="medium-font semi-bold">Account Subscription</p>
                    <p class="large bold">
                      Premium Plan <span>(billed yearly)</span>
                    </p>
                    <div class="payment-detail">
                      <p class="medium-font semi-bold">
                        Payment Details <a href="#">Edit</a>
                      </p>
                      <p class="semi-bold">
                        <img
                          src="../../assets/images/icons/card-icon.svg"
                          alt="card"
                        />
                        **** **** **** 5234
                      </p>
                      <p class="gray semi-bold">MasterCard - Expires 04/26</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 text-end">
                  <div class="btn-wrapper">
                    <a href="#">Update plan</a>
                    <p class="large bold">$2,450.00</p>
                    <p class="gray medium">
                      Billed on the first of every month. <br />
                      Next billing on Nov 01, 2023
                    </p>
                    <a href="#" class="btn-style" @click="updateProfile">
                      <SpinButton v-if="isLoadingRequest" />
                      <span v-else class="btn-text">Save Changes</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  defineComponent,
  ref,
  defineProps,
  computed,
  defineEmits,
  onMounted,
} from "vue";

import { useStore } from "vuex";
import { useErrorHandling } from "../../helpers/errorLib";

import SpinButton from "@/components/SpinButton.vue";
import server from "@/services/server";

const { error, setError, clearError, handleStatusCodeError } =
  useErrorHandling();
const store = useStore();

const props = defineProps(["countries", "cities", "profileDatas"]);
const emits = defineEmits(["getCities", "validateUser"]);

const name = "EditProfile";

const selectedCountry = ref(null);
const selectedCity = ref(null);
const selectedGender = ref(null);

const accounType = computed(() => store.getters.getInvestor.accounType);
const userId = computed(() => store.getters.getInvestor.id);

const profileData = ref({});
const isLoadingRequest = ref(false);

const getCities = () => {
  emits("getCities", profileData.value.country);
};

const updateProfile = () => {
  isLoadingRequest.value = true;
  server()
    .put("/investors/roles/updateProfileInformations", profileData.value)
    .then(() => {
      isLoadingRequest.value = false;
      emits("validateUser");
    })
    .catch((err) => {
      isLoadingRequest.value = false;
      if (err.response && err.response.status) {
        emits("catchProfileUpdateError", "fieldError");
      } else {
        emits("catchProfileUpdateError", "unexpectedError");
      }
    });
};

const fetchUserProfile = async () => {
  try {
    const response = await server().get("/investors/roles/profile");
    Object.assign(profileData.value, response.data.data);
  } catch (err) {
    if (err.response && err.response.status) {
      handleStatusCodeError(err.response.status);
    } else {
      setError("An unexpected error occurred.");
    }
  }
};

onMounted(() => {
  fetchUserProfile();
});
</script>

<style scoped>
.btn-text {
  color: #ffffff;
  line-height: 24px;
  font-size: 16px;
  font-family: "Sora", sans-serif;
  font-weight: 600;
}

.btn-style:hover {
  background: #ffffff;
  color: #000000;
}

.btn-text:hover {
  color: #000000;
}
</style>