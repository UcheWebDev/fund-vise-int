<template>
  <HeaderVIew></HeaderVIew>
  <section class="entrepreneur-sign-up get-started investor-get-started">
    <div class="container">
      <div class="confirmation-message">
        <div class="content-wrapper">
          <img
            src="../../assets/images/icons/check-circle-icon.svg"
            alt="Check"
          />
          <p class="large margin">Email Verification Successful</p>
        </div>
        <div class="btn-wrapper">
          <i class="fa fa-x"></i>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-6 col-lg-5 col-md-6">
          <div class="signup-details">
            <div class="signup-header">
              <div class="content-wrapper">
                <h1>Welcome, Let’s get started</h1>
                <p class="medium">Complete the form to set up you account</p>
              </div>
            </div>
            <form @submit="onSubmit">
              <div class="form">
                <div class="form-group">
                  <label for="email">First name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="firstname"
                    placeholder="Enter your first name"
                  />
                  <p class="small">{{ errors.firstname }}</p>
                </div>
                <div class="form-group">
                  <label for="password">Last name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your last name"
                    v-model="lastname"
                  />
                  <p class="small">{{ errors.lastname }}</p>
                </div>

                <div class="signup-button">
                  <button class="btn-style" type="submit">
                    <SpinButton v-if="isLoadingRequest" />
                    <span v-else class="btn-text"> Continue</span>
                  </button>
                </div>
                <div class="back-btn">
                  <a href="#" class="btn-style black"
                    ><i class="fa fa-arrow-left icon"></i>Back</a
                  >
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-xl-6 col-lg-7 col-md-6 text-end">
          <div class="signup-wrapper">
            <RouterLink to="/investor/signup"
              ><img
                src="../../assets/images/icons/arrow-left-icon.svg"
                alt="Arrow"
              />Back</RouterLink
            >
            <div class="signup-card">
              <div class="content-wrapper">
                <h2 class="gray">Saas Listing</h2>
                <h1 class="gray">$1.2m</h1>
              </div>
              <div class="growth">
                <img
                  src="../../assets/images/icons/growth-icon.svg"
                  alt="Growth"
                />
                <h3 class="h3">120% Growth</h3>
              </div>
              <h3>Find the perfect investors</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <VerifyModal></VerifyModal>
</template>

<script setup>
import { defineComponent, ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

import HeaderVIew from "@/components/HeaderView.vue";
import VerifyModal from "@/components/VerifyModal.vue";
import SpinButton from "@/components/SpinButton.vue";

import { formValidations } from "../../helpers/formValidations";
import { updateDetailsValidationSchema } from "../../helpers/validationSchema";
import { useErrorHandling } from "../../helpers/errorLib";
import { updateProfilePayload } from "../../helpers/payloads";

const name = ref("InvestorGetStarted");
//libs
const route = useRoute();
const store = useStore();
const router = useRouter();
const { error, setError, clearError, handleStatusCodeError } =
  useErrorHandling();
const { errors, handleSubmit, defineField, resetForm } = formValidations(
  updateDetailsValidationSchema
);

// props
const isLoadingRequest = ref(false);
const token = ref(route.query.authToken);

// form fields
const [firstname, firstnameAttrs] = defineField("firstname");
const [lastname, lastnameAttrs] = defineField("lastname");

onMounted(() => {
  localStorage.setItem("token", token.value);
});

const onSubmit = handleSubmit((values) => {
  isLoadingRequest.value = true;
  const payload = updateProfilePayload(firstname, lastname);
  store
    .dispatch("updateInvestorProfileInformations", payload)
    .then((response) => {
      isLoadingRequest.value = false;
      resetForm();
      router.push("/investor");
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
</script>

<style scoped>
.btn-text {
  color: #ffffff;
  line-height: 24px;
  font-size: 16px;
}

.btn-style:hover {
  background: #000000;
}
</style>
