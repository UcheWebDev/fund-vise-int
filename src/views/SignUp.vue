<template>
  <HeaderVIew></HeaderVIew>
  <section class="sign-up">
    <div class="container small">
      <h1>Welcome, sign up as</h1>
      <div class="row">
        <div class="col-md-5 text-center">
          <div class="signup-card">
            <div class="img-wrapper">
              <img src="../assets/images/entrepreneur-login-image.svg" alt="Login Image">
            </div>
            <div class="content-wrapper">
              <p>Register as an entrepreneur. Create a campaign listing, Build your team, and start connecting with Investors</p>
            </div>
            <div class="btn-wrapper">
              <RouterLink to="entrepreneur/signup" class="btn-style">Entrepreneur</RouterLink>
            </div>
          </div>
        </div>
        <div class="col-md-2 text-center align-self-center">
          <div class="content-wrapper">
            <p class="large">Or</p>
          </div>
        </div>
        <div class="col-md-5 text-center">
          <div class="signup-card">
            <div class="img-wrapper">
              <img src="../assets/images/investor-login-image.svg" alt="Login Image">
            </div>
            <div class="content-wrapper">
              <p>Register as an entrepreneur. Create a campaign listing, Build your team, and start connecting with Investors</p>
            </div>
            <div class="btn-wrapper">
              <RouterLink to="investor/signup" class="btn-style">Investor</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderVIew from "@/components/HeaderView.vue";

export default defineComponent({
  name: 'SignUp',
  components: {HeaderVIew},
});
</script>
