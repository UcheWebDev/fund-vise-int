<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-6 align-self-center">
          <div class="main-logo">
            <a href="#">
              <img src="../assets/images/main-logo.svg" alt="Main Logo">
            </a>
          </div>
        </div>
        <div class="col-md-6 col-6 align-self-center text-end">
          <div class="hamburger" @click="isMenuActive = true">
            <i class="fa fa-bars"></i>
          </div>

          <div class="navbar-menu" :class="{'active' :isMenuActive}">
            <div class="close">
              <i class="fa fa-x" @click="isMenuActive = false"></i>
            </div>
            <ul class="menu">
              <li><a href="#">Resources</a></li>
              <li><a href="#">How it Works</a></li>
              <li><a href="#" class="btn-style transparent">Login</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderVIew',
  components: {
  },
  data() {
    return{
      isMenuActive: false,
    }
  }
});
</script>
