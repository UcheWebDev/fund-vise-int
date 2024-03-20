<template>
  <HeaderVIew></HeaderVIew>
  <section class="entrepreneur-sign-up">
    <div class="container small">
      <div class="row">
        <div class="col-xl-6 col-lg-5 col-md-6">
          <div class="signup-details">
            <div class="signup-header">
              <div class="img-wrapper">
                <img
                  src="../assets/images/entrepreneur-login-image-sm.svg"
                  alt="Sign Up image"
                />
              </div>
              <div class="content-wrapper">
                <h1>Hi Investor</h1>
                <p class="medium">Complete the form to login in</p>
              </div>
            </div>
            <div class="social-btn">
              <a @click="loginWithGoogle" class="btn-style transparent icon"
                ><img
                  src="../assets/images/icons/google-icon.svg"
                  alt="Google Icon"
                />Sign up with Google
              </a>
              <p>Or</p>
            </div>
            <div class="form">
              <form @submit="onSubmit">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter your email"
                    v-model="email"
                  />
                  <p class="small">{{ errors.email }}</p>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder=" Create a password"
                    v-model="password"
                  />
                  <p class="small">{{ errors.password }}</p>
                </div>

                <div class="login">
                  <p class="medium">Forgot password? <a href="#">Reset</a></p>
                </div>

                <div class="login">
                  <p class="medium">{{ error }}</p>
                </div>

                <div class="login">
                  <p class="medium">
                    Don’t have an account?
                    <router-link to="signup">Sign up</router-link>
                  </p>
                </div>

                <div class="signup-button">
                  <button class="btn-style" type="submit">
                    <SpinButton v-if="isLoadingRequest" />
                    <span v-else class="btn-text"> Sign In</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-7 col-md-6 text-end">
          <div class="signup-wrapper">
            <a href="#"
              ><img
                src="../assets/images/icons/arrow-left-icon.svg"
                alt="Arrow"
              />Back</a
            >
            <div class="signup-card">
              <div class="img-wrapper">
                <img
                  src="../assets/images/signup-dollar-image.svg"
                  alt="Sign up image"
                />
              </div>
              <div class="content-wrapper">
                <h3>Find Capital to Fuel Your Dreams</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <VerifyModal></VerifyModal>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import HeaderVIew from "@/components/HeaderView.vue";
import VerifyModal from "@/components/VerifyModal.vue";
import SpinButton from "@/components/SpinButton.vue";

import { formValidations } from "../helpers/formValidations";
import { loginValidationSchema } from "../helpers/validationSchema";
import { signUpPayload } from "../helpers/payloads";
import { useErrorHandling } from "../helpers/errorLib";
import { object } from "yup";
import { googleTokenLogin } from "vue3-google-login";
import server from "@/services/server";

const name = ref("InvestorLoginView");
const { errors, handleSubmit, defineField, resetForm } = formValidations(
  loginValidationSchema
);
const store = useStore();
const { error, setError, clearError, handleStatusCodeError } =
  useErrorHandling();
const router = useRouter();

const [email, emailAttrs] = defineField("email");
const [password, passwordAttrs] = defineField("password");
const isLoadingRequest = ref(false);
let isVisible = ref(false);

const loginWithGoogle = () => {
  googleTokenLogin({
    clientId:
      "978003966262-r6qs2v459i4kf23c46p6m53gb6pr3q50.apps.googleusercontent.com",
  }).then((response) => {
    if (response) {
      const accessToken = response.access_token;
      server()
        .post("/investors/auth/verifyGoogleAccessToken", {
          accessToken: accessToken,
        })
        .then((response) => {
          localStorage.setItem("token", response.data);
          router.push("/investor");
        })
        .catch((err) => {
          if (err.response && err.response.status) {
            handleStatusCodeError(err.response.status);
          } else {
            setError("An unexpected error occurred.");
          }
        });
    }
  });
};

const onSubmit = handleSubmit((values) => {
  isLoadingRequest.value = true;
  const payload = signUpPayload(email, password);
  store
    .dispatch("loginInvestor", payload)
    .then((response) => {
      isLoadingRequest.value = false;
      localStorage.setItem("token", response.data.token);
      router.push("/investor");
    })
    .catch((err) => {
      isLoadingRequest.value = false;
      if (Object.prototype.hasOwnProperty.call(err.response.data, "verify")) {
        setError(err.response.data.verify);
      } else if (
        Object.prototype.hasOwnProperty.call(err.response.data, "invalid")
      ) {
        setError(err.response.data.invalid);
      } else if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
      } else {
        setError("An unexpected error occurred.");
      }
    });
});

const closeModal = () => {
  isVisible.value = false;
};
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