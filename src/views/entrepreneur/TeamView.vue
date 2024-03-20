<template>
 <DashboardHeader></DashboardHeader>
  <div class="add-campaign business-wrapper team-wrapper">
    <div class="container">
      <h1>Add Campaign</h1>
      <p class="gray">Create and publish a campaign listing for FREE, and start receiving direct offers from investors. <br>
        You can edit the campaign even once it is live.</p>
    </div>
    <div class="main-wrapper">
      <div class="container small">
        <ul class="steps">
          <li><p class="large bold"><span>01</span> About Company</p></li>
          <li><p class="large bold"><span>02</span> Investment</p></li>
          <li><p class="large bold"><span>03</span> Business </p></li>
          <li><p class="large bold"><span>04</span> Team</p></li>
        </ul>
        <div class="form">
          <div class="row">
            <div class="col-md-4">
              <div class="form-group">
                <label for="text">Name</label>
                <input type="text" class="form-control" placeholder="Enter team name">
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="text">Role</label>
                <select name="a" id="a" class="form-control">
                  <option value="a">Enter team role</option>
                  <option value="a">...</option>
                </select>
                <i class="fa fa-angle-down"></i>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="text">LinkedIn Profile Link</label>
                <input type="text" class="form-control" placeholder="Enter LinkedIn profile link">
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label for="text">Detailed info</label>
                <textarea name="a" id="a" cols="30" rows="10" class="form-control" placeholder="Please write more information about the team member"></textarea>
                <div class="btn-wrapper">
                  <a href="#"><i class="fa fa-plus"></i>Add team</a>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <h3 class="h3">Build your team <img src="../../assets/images/icons/info-circle.svg" alt="info"></h3>
            <div class="col-md-6">
              <div class="form-group">
                <label for="text">Role</label>
                <select name="a" id="a" class="form-control">
                  <option value="a">Select what role you’re looking for</option>
                  <option value="a">...</option>
                </select>
                <i class="fa fa-angle-down"></i>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="text">Equity on offer</label>
                <input type="text" class="form-control">
                <p>%</p>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <label for="text">Detailed info</label>
                <textarea name="a" id="a" cols="30" rows="10" class="form-control" placeholder="Please describe what you are looking for and why someone should join your team."></textarea>
                <div class="btn-wrapper">
                  <a href="#"><i class="fa fa-plus"></i>Add team</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="btn-wrapper">
          <RouterLink to="#"><i class="fa fa-arrow-left"></i>Back</RouterLink>
          <a href="#" class="btn-style black" data-bs-target="#successModal" data-bs-toggle="modal">Save & Publish<i class="fa fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  </div>
  <SuccessModal></SuccessModal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DashboardHeader from "@/components/entrepreneur/DashboardHeader.vue";
import SuccessModal from "@/components/entrepreneur/SuccessfulModal.vue";

export default defineComponent({
  name: 'TeamView',
  components: {
    SuccessModal,
    DashboardHeader
  },
  data(){
    return{
      isMenuActive1: false,
    }
  },
});
</script>
