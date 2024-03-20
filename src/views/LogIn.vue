<template>
  <HeaderVIew></HeaderVIew>
  <section class="entrepreneur-sign-up log-in">
    <div class="container small">
      <div class="row">
        <div class="col-xl-6 col-lg-5 col-md-6">
          <div class="signup-details">
            <div class="signup-header">
              <div class="content-wrapper">
                <h1>Login</h1>
                <p class="medium">Complete the form to Login</p>
              </div>
            </div>
            <div class="social-btn">
              <a href="#" class="btn-style transparent icon"><img src="../assets/images/icons/google-icon.svg" alt="Google Icon">Sign up with Google </a>
              <p>Or</p>
            </div>
            <div class="form">
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" placeholder="Enter your email">
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="email" class="form-control" placeholder=" Create a password">
              </div>
            </div>
            <div class="forgot-password">
              <p class="medium">Forgot password? <a href="#">Reset</a></p>
            </div>
            <div class="sign-up-btn">
              <p class="medium">Don’t have an account?<a href="#">Sign up</a></p>
            </div>
            <div class="signup-button" data-bs-target="#myModal4" data-bs-toggle="modal">
              <a href="#" class="btn-style">Login</a>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-7 col-md-6 text-end">
          <div class="signup-wrapper">
            <a href="#"><img src="../assets/images/icons/arrow-left-icon.svg" alt="Arrow">Back</a>
            <div class="signup-card">
              <div class="img-wrapper">
                <img src="../assets/images/signup-dollar-image.svg" alt="Sign up image">
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

<script lang="ts">
import {defineComponent} from 'vue';
import HeaderVIew from "@/components/HeaderView.vue";
import VerifyModal from "@/components/VerifyModal.vue";

export default defineComponent({
  name: 'LogIn',
  components: {VerifyModal, HeaderVIew},
});
</script>
