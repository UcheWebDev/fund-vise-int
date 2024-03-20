<template>
  <div class="sidebar">
    <div class="network-wrapper">
      <p class="heading dark-gray semi-bold">Add to your network</p>
      <div class="network-card">
        <div class="img-wrapper">
          <img src="../../assets/images/icons/men-profile-icon.svg" alt="Profile">
        </div>
        <div class="content-wrapper">
          <p class="semi-bold small">Justin Stone</p>
          <p class="small">Entrepreneur  | Everyday Inc.</p>
        </div>
        <div class="btn-wrapper">
          <a href="#" class="btn-style transparent">+ Connect</a>
        </div>
      </div>
      <div class="network-card">
        <div class="img-wrapper">
          <img src="../../assets/images/icons/men-profile-icon.svg" alt="Profile">
        </div>
        <div class="content-wrapper">
          <p class="semi-bold small">Justin Stone</p>
          <p class="small">Entrepreneur  | Everyday Inc.</p>
        </div>
        <div class="btn-wrapper">
          <a href="#" class="btn-style transparent">+ Connect</a>
        </div>
      </div>
      <div class="network-card">
        <div class="img-wrapper">
          <img src="../../assets/images/icons/men-profile-icon.svg" alt="Profile">
        </div>
        <div class="content-wrapper">
          <p class="semi-bold small">Justin Stone</p>
          <p class="small">Entrepreneur  | Everyday Inc.</p>
        </div>
        <div class="btn-wrapper">
          <a href="#" class="btn-style transparent">+ Connect</a>
        </div>
      </div>
      <div class="network-card">
        <div class="img-wrapper">
          <img src="../../assets/images/icons/men-profile-icon.svg" alt="Profile">
        </div>
        <div class="content-wrapper">
          <p class="semi-bold small">Justin Stone</p>
          <p class="small">Entrepreneur  | Everyday Inc.</p>
        </div>
        <div class="btn-wrapper">
          <a href="#" class="btn-style transparent">+ Connect</a>
        </div>
      </div>
      <div class="btn-wrapper">
        <a href="#" class="small">View all recommendations <i class="fa fa-angle-right"></i></a>
      </div>
    </div>
    <div class="top-sites">
      <p class="heading dark-gray semi-bold">Top sites for start ups</p>
      <div class="site-card">
        <div class="content-wrapper">
          <img src="../../assets/images/hubspot-image.svg" alt="Hubspot">
          <p class="x-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="btn-wrapper">
          <a href="#" class="btn-style transparent">Learn more</a>
        </div>
      </div>
      <div class="site-card">
        <div class="content-wrapper">
          <img src="../../assets/images/proof-image.svg" alt="Proof">
          <p class="x-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="btn-wrapper">
          <a href="#" class="btn-style transparent">Learn more</a>
        </div>
      </div>
      <div class="site-card">
        <div class="content-wrapper">
          <img src="../../assets/images/looka-image.svg" alt="Looka">
          <p class="x-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="btn-wrapper">
          <a href="#" class="btn-style transparent">Learn more</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RightSidebar',
  components: {
  },
  data(){
    return{
      isMenuActive1: false,
    }
  },
});
</script>

