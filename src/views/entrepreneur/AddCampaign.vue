<template>
  <DashboardHeader></DashboardHeader>
  <div class="add-campaign business-wrapper">
    <div class="container">
      <h1>Add Campaign</h1>
      <p class="gray">
        Create and publish a campaign listing for FREE, and start receiving
        direct offers from investors. <br />
        You can edit the campaign even once it is live.
      </p>
    </div>
    <div class="main-wrapper">
      <div class="container small">
        <ul class="steps nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              href="#"
              class="nav-link active"
              id="tab1"
              data-bs-toggle="tab"
              @click="Level1Tab(0)"
              data-bs-target="#about"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
              ><span>01</span> About Company</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              href="#"
              class="nav-link"
              id="tab2"
              data-bs-toggle="tab"
              @click="Level1Tab(1)"
              data-bs-target="#Investment"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
              ><span>02</span>Investment</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              href="#"
              class="nav-link"
              id="tab3"
              data-bs-toggle="tab"
              @click="Level1Tab(2)"
              data-bs-target="#Business"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
              ><span>03</span>Business</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              href="#"
              class="nav-link"
              id="tab4"
              data-bs-toggle="tab"
              @click="Level1Tab(3)"
              data-bs-target="#Team"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
              ><span>04</span>Team</a
            >
          </li>
        </ul>
        <Form @submit="nextStep" :validation-schema="currentSchema" keep-values>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade"
              :class="{ 'show active': currentStep === 0 }"
              id="about"
              role="tabpanel"
              aria-labelledby="tab1"
              v-if="currentStep === 0"
            >
              <div class="form">
                <div class="row">
                  <div class="col-md-6">
                    <div>
                      <div class="form-group">
                        <label for="name">Company Name</label>
                        <Field
                          name="name"
                          id="name"
                          class="form-control"
                          placeholder="Enter company name"
                        />
                      </div>
                      <p class="small"><ErrorMessage name="name" /></p>
                    </div>
                    <div>
                      <div class="form-group">
                        <label for="name">Industry</label>
                        <Field name="industry" as="select" class="form-control">
                          <option value="">Select industry</option>
                          <option
                            v-for="indus in industries"
                            :key="indus"
                            :value="indus"
                          >
                            {{ indus }}
                          </option>
                        </Field>
                        <i class="fa fa-angle-down"></i>
                      </div>
                      <p class="small"><ErrorMessage name="industry" /></p>
                    </div>
                    <div>
                      <div class="form-group">
                        <label for="name">Short Summary</label>
                        <Field
                          type="text"
                          name="about_company"
                          v-slot="{ field }"
                        >
                          <textarea
                            id="text"
                            cols="30"
                            rows="10"
                            class="form-control"
                            v-bind="field"
                            placeholder="Please write a short summary of your business"
                          ></textarea>
                        </Field>
                      </div>
                      <p class="small">
                        <ErrorMessage name="about_company" />
                      </p>
                    </div>
                    <div class="browse-wrapper">
                      <p class="large">Add Logo or Company Image</p>
                      <div class="browse">
                        <p class="gray">Drop files here to upload…</p>
                        <Field name="file" v-slot="{ handleChange }">
                          <input
                            type="file"
                            @change="handleFileChange"
                            @blur="handleChange"
                          />
                        </Field>
                      </div>
                      <div class="mt-4">
                        <p class="small"><ErrorMessage name="file" /></p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div>
                      <div class="form-group">
                        <label for="name">Stage</label>
                        <Field name="stage" as="select" class="form-control">
                          <option value="">Select industry</option>
                          <option v-for="sta in stages" :key="sta" :value="sta">
                            {{ sta }}
                          </option>
                        </Field>
                        <i class="fa fa-angle-down"></i>
                      </div>
                      <p class="small"><ErrorMessage name="stage" /></p>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div>
                          <div class="form-group">
                            <label for="name">Location (Country)</label>
                            <Field
                              name="country"
                              as="select"
                              class="form-control"
                              @change="getCities"
                              v-model="selectedCountry"
                            >
                              <option value="">Select country</option>
                              <option
                                v-for="cou in countryList"
                                :key="cou"
                                :value="cou"
                              >
                                {{ cou }}
                              </option>
                            </Field>
                            <i class="fa fa-angle-down"></i>
                          </div>

                          <p class="small"><ErrorMessage name="country" /></p>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div>
                          <div class="form-group">
                            <label for="name">Location (City)</label>
                            <Field name="city" as="select" class="form-control">
                              <option value="">Select city</option>
                              <option
                                v-for="cy in cityList"
                                :key="cy"
                                :value="cy"
                              >
                                {{ cy }}
                              </option>
                            </Field>
                            <i class="fa fa-angle-down"></i>
                          </div>
                          <p class="small"><ErrorMessage name="city" /></p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="form-group">
                        <label for="name">Website</label>
                        <Field
                          name="website"
                          id="name"
                          class="form-control"
                          placeholder="Enter company website"
                        />
                      </div>
                      <p class="small"><ErrorMessage name="website" /></p>
                    </div>
                  </div>
                </div>

                <div class="btn-wrapper">
                  <!--              <a href="#" @click="Level1Tab(3)"><i class="fa fa-arrow-left"></i>Back</a>-->
                  <button type="submit" class="btn-style black">
                    Next Step <i class="fa fa-arrow-right m-1"></i>
                  </button>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              :class="{ 'show active': currentStep === 1 }"
              id="Investment"
              role="tabpanel"
              aria-labelledby="tab2"
              v-if="currentStep === 1"
            >
              <div class="form">
                <div class="row">
                  <div class="col-md-6">
                    <div>
                      <div class="form-group">
                        <label for="name">Investment Round</label>
                        <Field name="round" as="select" class="form-control">
                          <option value="">Select city</option>
                          <option
                            v-for="rounds in investmentRounds"
                            :key="rounds"
                            :value="rounds"
                          >
                            {{ rounds }}
                          </option>
                        </Field>

                        <i class="fa fa-angle-down"></i>
                      </div>
                      <div>
                        <p class="small">
                          <ErrorMessage name="round" />
                        </p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div>
                          <div class="form-group">
                            <label for="name">Min Target</label>
                            <Field
                              name="min_target"
                              id="name"
                              class="form-control"
                              type="number"
                              placeholder=""
                            />
                            <p class="dark-gray">USD</p>
                          </div>
                          <p class="small">
                            <ErrorMessage name="min_target" />
                          </p>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div>
                          <div class="form-group">
                            <label for="name">Equity on offer</label>
                            <Field
                              name="equity_offer_min"
                              id="name"
                              class="form-control"
                              type="number"
                              placeholder=""
                            />
                            <p class="dark-gray">&</p>
                          </div>
                          <p class="small">
                            <ErrorMessage name="equity_offer_min" />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="form-group">
                        <label for="name">Use of funds (Min)</label>
                        <Field
                          type="text"
                          name="use_of_funds_min"
                          v-slot="{ field }"
                        >
                          <textarea
                            id="text"
                            cols="30"
                            rows="10"
                            class="form-control"
                            v-bind="field"
                            placeholder="Please explain what you will do if you raised the minimum fund target"
                          ></textarea>
                        </Field>
                      </div>
                      <p class="small">
                        <ErrorMessage name="use_of_funds_min" />
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-md-6">
                        <div>
                          <div class="form-group">
                            <label for="name">Max Target</label>
                            <Field
                              name="max_target"
                              id="name"
                              class="form-control"
                              placeholder=""
                              type="number"
                            />
                            <p class="dark-gray">USD</p>
                          </div>
                          <p class="small">
                            <ErrorMessage name="max_target" />
                          </p>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div>
                          <div class="form-group">
                            <label for="name">Equity on offer</label>
                            <Field
                              name="equity_offer_max"
                              id="name"
                              class="form-control"
                              placeholder=""
                              type="number"
                            />
                            <p class="dark-gray">&</p>
                          </div>
                          <p class="small">
                            <ErrorMessage name="equity_offer_max" />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="form-group">
                        <label for="name">Use of funds (Max)</label>
                        <Field
                          type="text"
                          name="use_of_funds_max"
                          v-slot="{ field }"
                        >
                          <textarea
                            id="text"
                            cols="30"
                            rows="10"
                            class="form-control"
                            v-bind="field"
                            placeholder="Please explain what you will do if you raised the maximum fund target"
                          ></textarea>
                        </Field>
                      </div>
                      <p class="small">
                        <ErrorMessage name="use_of_funds_max" />
                      </p>
                    </div>
                  </div>
                </div>

                <div class="btn-wrapper">
                  <a href="#" @click="Level1Tab(0)"
                    ><i class="fa fa-arrow-left"></i>Back</a
                  >
                  <button type="submit" class="btn-style black">
                    Next Step<i class="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              :class="{ 'show active': currentStep === 2 }"
              id="Business"
              role="tabpanel"
              aria-labelledby="tab3"
              v-if="currentStep === 2"
            >
              <div class="form">
                <div class="row">
                  <div class="col-md-6">
                    <div>
                      <div class="form-group">
                        <label for="name">Business opportunity</label>
                        <Field
                          type="text"
                          name="business_oppurtunity"
                          v-slot="{ field }"
                        >
                          <textarea
                            id="text"
                            cols="30"
                            rows="10"
                            class="form-control"
                            v-bind="field"
                            placeholder="Please write a detailed description of the business opportunity."
                          ></textarea>
                        </Field>
                      </div>
                      <p class="small">
                        <ErrorMessage name="business_oppurtunity" />
                      </p>
                    </div>
                    <div>
                      <div class="form-group">
                        <label for="name">Exit Strategy</label>
                        <Field
                          type="text"
                          name="exit_strategy"
                          v-slot="{ field }"
                        >
                          <textarea
                            id="text"
                            cols="30"
                            rows="10"
                            class="form-control"
                            v-bind="field"
                            placeholder="Please write a description on how you plan to exit this business."
                          ></textarea>
                        </Field>
                      </div>
                      <p class="small">
                        <ErrorMessage name="exit_strategy" />
                      </p>
                    </div>
                    <div>
                      <div class="form-group">
                        <label for="name">Notable Achievements</label>
                        <Field
                          type="text"
                          name="notable_achievments"
                          v-slot="{ field }"
                        >
                          <textarea
                            id="text"
                            cols="30"
                            rows="10"
                            class="form-control"
                            v-bind="field"
                            placeholder="Please share all notable achievements"
                          ></textarea>
                        </Field>
                      </div>
                      <p class="small">
                        <ErrorMessage name="notable_achievments" />
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div>
                      <div class="form-group">
                        <label for="textarea">Market Potential</label>
                        <Field
                          type="text"
                          name="market_potentials"
                          v-slot="{ field }"
                        >
                          <textarea
                            id="text"
                            cols="30"
                            rows="10"
                            class="form-control"
                            v-bind="field"
                            placeholder="Please write a description of the market"
                          ></textarea>
                        </Field>
                      </div>
                      <p class="small">
                        <ErrorMessage name="market_potentials" />
                      </p>
                    </div>
                    <div>
                      <div class="form-group">
                        <label for="textarea">Number of users</label>
                        <Field
                          name="number_of_users"
                          id="name"
                          class="form-control"
                          type="number"
                          placeholder=""
                        />
                      </div>
                      <p class="small">
                        <ErrorMessage name="number_of_users" />
                      </p>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div>
                          <div class="form-group">
                            <label for="name">Total Revenue</label>
                            <Field
                              name="total_revenue"
                              id="name"
                              class="form-control"
                              placeholder=""
                              type="number"
                            />
                            <p class="dark-gray">USD</p>
                          </div>
                          <p class="small">
                            <ErrorMessage name="total_revenue" />
                          </p>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div>
                          <div class="form-group">
                            <label for="name">Profit</label>
                            <Field
                              name="total_profit"
                              id="name"
                              class="form-control"
                              placeholder=""
                              type="number"
                            />
                            <p class="dark-gray">USD</p>
                          </div>
                          <p class="small">
                            <ErrorMessage name="total_profit" />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="form-group">
                        <label for="textarea">Pitch Video</label>
                        <Field
                          name="pitch_url"
                          id="name"
                          class="form-control"
                          placeholder="Paste your Youtube or Vimeo iframe embeded code here..."
                        />
                      </div>
                      <p class="small">
                        <ErrorMessage name="pitch_url" />
                      </p>
                    </div>
                    <div class="form-group">
                      <textarea
                        name="text"
                        id="text"
                        cols="30"
                        rows="10"
                        class="form-control"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="btn-wrapper">
                <a href="#" @click="Level1Tab(1)"
                  ><i class="fa fa-arrow-left"></i>Back</a
                >
                <button type="submit" class="btn-style black">
                  Next Step<i class="fa fa-arrow-right"></i>
                </button>
              </div>
            </div>
            <div
              class="tab-pane fade"
              :class="{ 'show active': currentStep === 3 }"
              id="Team"
              role="tabpanel"
              aria-labelledby="tab4"
              v-if="currentStep === 3"
            >
              <div class="form">
                <div class="row">
                  <div class="col-md-4">
                    <div>
                      <div class="form-group">
                        <label for="text">Name</label>
                        <Field
                          name="team_member_name"
                          id="name"
                          class="form-control"
                          placeholder="Enter team name"
                          v-model="teamMemberName"
                        />
                      </div>
                      <p class="small">
                        <ErrorMessage name="team_member_name" />
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div>
                      <div class="form-group">
                        <label for="text">Role</label>
                        <Field
                          name="team_role"
                          as="select"
                          class="form-control"
                          v-model="teamMemberRole"
                        >
                          <option value="">Select role</option>
                          <option
                            v-for="role in startupTeamRoles"
                            :key="role"
                            :value="role"
                          >
                            {{ role }}
                          </option>
                        </Field>
                        <i class="fa fa-angle-down"></i>
                      </div>
                      <p class="small">
                        <ErrorMessage name="team_role" />
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div>
                      <div class="form-group">
                        <label for="text">LinkedIn Profile Link</label>
                        <Field
                          name="team_member_linkedin"
                          id="name"
                          class="form-control"
                          placeholder="Enter linkedIn profile link"
                          v-model="teamMemberLinkedIn"
                        />
                      </div>
                      <p class="small">
                        <ErrorMessage name="team_member_linkedin" />
                      </p>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div>
                      <div>
                        <div class="form-group">
                          <label for="text">Detailed info</label>
                          <Field
                            type="text"
                            name="member_detailed_info"
                            v-slot="{ field }"
                            v-model="teamMemberDetailedInfo"
                          >
                            <textarea
                              id="text"
                              cols="30"
                              rows="10"
                              class="form-control"
                              v-bind="field"
                              placeholder="Please write more information about the team member"
                            ></textarea>
                          </Field>
                        </div>
                        <p class="small">
                          <ErrorMessage name="member_detailed_info" />
                        </p>
                      </div>
                      <div class="btn-wrapper">
                        <a href="#" @click="addTeamMember"
                          ><i class="fa fa-plus"></i>Add team</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <h3 class="h3">
                    Build your team
                    <img
                      src="../../assets/images/icons/info-circle.svg"
                      alt="info"
                    />
                  </h3>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="text">Role</label>
                      <select name="a" id="a" class="form-control">
                        <option value="a">
                          Select what role you’re looking for
                        </option>
                        <option value="a">...</option>
                      </select>
                      <i class="fa fa-angle-down"></i>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="text">Equity on offer</label>
                      <input type="text" class="form-control" />
                      <p>%</p>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div>
                      <div class="form-group">
                        <label for="text">Detailed info</label>
                        <textarea
                          name="a"
                          id="a"
                          cols="30"
                          rows="10"
                          class="form-control"
                          placeholder="Please describe what you are looking for and why someone should join your team."
                        ></textarea>
                      </div>
                      <div class="btn-wrapper">
                        <a href="#"><i class="fa fa-plus"></i>Add team</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="btn-wrapper">
                <a href="#" @click="Level1Tab(2)"
                  ><i class="fa fa-arrow-left"></i>Back</a
                >
                <button
                  type="submit"
                  v-if="currentStep === 3"
                  class="btn-style black"
                >
                  <SpinButton v-if="isLoadingRequest" />
                  <span v-else class="btn-text white-text">
                    Save & Publish <i class="fa fa-arrow-right"></i
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>
 
 <script setup>
import DashboardHeader from "@/components/entrepreneur/DashboardHeader.vue";
import SpinButton from "@/components/SpinButton.vue";

import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { ref, reactive, computed, defineComponent, onMounted } from "vue";
import { useField } from "vee-validate";

import {
  industries,
  getCountries,
  stages,
  fetchCities,
  investmentRounds,
  startupTeamRoles,
  campaignPayLoadkeys,
  formDataHandler,
} from "../../utils";

import { useErrorHandling } from "../../helpers/errorLib";
import { useStore } from "vuex";
import server from "@/services/server";

const store = useStore();

const isMenuActive1 = ref(false);
const name = "AddCampaign";
const activeTab1 = ref(0);
const countryList = ref([]);
const selectedCountry = ref("");
const cityList = ref([]);
const companyLogoImg = ref(null);
const userId = computed(() => store.getters.getEnteprenuer.id);
const CampaignPayloadHandler = new formDataHandler();
const isLoadingRequest = ref(false);

const teamMemberName = ref(null);
const teamMemberRole = ref(null);
const teamMemberLinkedIn = ref(null);
const teamMemberDetailedInfo = ref(null);

const teamMembersList = ref([]);

const currentStep = ref(0);
const schemas = [
  yup.object({
    name: yup.string().required(),
    stage: yup.string().required(),
    industry: yup.string().required(),
    about_company: yup.string().required(),
    country: yup.string().required(),
    city: yup.string().required(),
    website: yup.string().url().required(),
    file: yup
      .mixed()
      .required()
      .test("fileSize", "File size too large", (value) => {
        return value && value.size <= 1000000; // 1 MB
      })
      .test("fileType", "Invalid file type", (value) => {
        return value && ["image/jpeg", "image/png"].includes(value.type);
      }),
  }),
  yup.object({
    round: yup.string().required(),
    max_target: yup.number().required(),
    min_target: yup.number().required(),
    equity_offer_max: yup.number().required(),
    equity_offer_min: yup.number().required(),
    use_of_funds_max: yup.string().required(),
    use_of_funds_min: yup.string().required(),
  }),
  yup.object({
    business_oppurtunity: yup.string().required(),
    market_potentials: yup.string().required(),
    exit_strategy: yup.string().required(),
    notable_achievments: yup.string().required(),
    number_of_users: yup.string().required(),
    total_revenue: yup.number().required(),
    total_profit: yup.number().required(),
    pitch_url: yup.string().url().required(),
  }),
  yup.object({
    team_member_name: yup.string().required(),
    team_role: yup.string().required(),
    team_member_linkedin: yup.string().url().required(),
    member_detailed_info: yup.string().required(),
  }),
];

const currentSchema = computed(() => {
  return schemas[currentStep.value];
});

function nextStep(values) {
  if (currentStep.value === 3) {
    CampaignPayloadHandler.setDataHandlerKeys(campaignPayLoadkeys);
    CampaignPayloadHandler.addCampaignPayloadData(
      values,
      userId.value,
      teamMembersList.value
    );
    addCampaign();
    return;
  }

  currentStep.value++;
}

function prevStep() {
  if (currentStep.value <= 0) {
    return;
  }
  currentStep.value--;
}

const { error, setError, clearError, handleStatusCodeError } =
  useErrorHandling();

const fetchCountries = () => {
  getCountries()
    .then((data) => {
      countryList.value = data;
    })
    .catch((errStatus) => {
      handleStatusCodeError(errStatus);
    });
};

const getCities = (e) => {
  fetchCities(selectedCountry.value)
    .then((data) => {
      cityList.value = data;
    })
    .catch((errStatus) => {
      handleStatusCodeError(errStatus);
    });
};

const Level1Tab = (index) => {
  activeTab1.value += 1;
};

const handleFileChange = (event) => {
  const selectedFile = event.target.files[0];
  companyLogoImg.value = selectedFile;
};

const addCampaign = async () => {
  isLoadingRequest.value = true;
  server()
    .post(
      "/enterpreneur/roles/createCampaign",
      CampaignPayloadHandler.getPayload()
    )
    .then((response) => {
      isLoadingRequest.value = false;
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

const addTeamMember = () => {
  teamMembersList.value.push({
    name: teamMemberName.value,
    role: teamMemberRole.value,
    info: teamMemberDetailedInfo.value,
    linkedin: teamMemberLinkedIn.value,
  });
};

onMounted(async () => {
  await store
    .dispatch("getLoggedEnterprenuerProfile")
    .then((response) => {
      fetchCountries();
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
.white-text {
  color: white;
  line-height: 24px;
  font-size: 10px;
  font-family: "Sora", sans-serif;
  /* font-weight: 600; */
}
.btn-style .black span {
  background: #000000;
  color: #ffffff;
}

.btn-text {
  line-height: 24px;
  font-size: 10px;
  font-family: "Sora", sans-serif;
}
.btn-style .black span {
  background: #000000;
  color: #ffffff;
}

.black:hover .white-text {
  color: #000;
  line-height: 24px;
  font-size: 10px;
  font-family: "Sora", sans-serif;
  /* font-weight: 600; */
}
</style>