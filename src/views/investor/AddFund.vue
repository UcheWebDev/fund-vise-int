<template>
  <InvestorDashboardHeader></InvestorDashboardHeader>
  <div class="add-campaign add-funds">
    <div class="container">
      <h1>Add Fund</h1>
      <p class="gray">Create and publish a fund listing and start receiving applications.</p>
    </div>
    <div class="main-wrapper">
      <div class="container small">
        <ul class="steps">
          <li><p class="large bold"><span>01</span> About Fund</p></li>
          <li><p class="large bold"><span>02</span> Fund Value</p></li>
        </ul>
        <div class="form">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="name">Name of Fund</label>
                <input type="text" class="form-control" placeholder="Name of fund">
              </div>
              <div class="form-group">
                <label for="name">Type of Fund</label>
                <select name="one" id="one" class="form-control">
                  <option value="one">Type of fund</option>
                  <option value="one">...</option>
                </select>
                <i class="fa fa-angle-down"></i>
              </div>
              <div class="form-group">
                <label for="name">About Fund</label>
                <textarea name="text" id="text" cols="30" rows="10" class="form-control" placeholder="Please write a description on the fund."></textarea>
              </div>
              <div class="browse-wrapper">
                <p class="large">Add Fund Image</p>
                <div class="browse">
                  <p class="gray">Drop files here to upload…</p>
                  <a href="#">Browse files</a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="name">Location (Country)</label>
                <input type="text" class="form-control" placeholder="Enter country">
              </div>
              <div class="form-group">
                <label for="name">Location (City)</label>
                <input type="text" class="form-control" placeholder="Enter city">
              </div>
              <div class="form-group">
                <label for="name">Youtube Video</label>
                <input type="text" class="form-control" placeholder="Paste your Youtube or Vimeo iframe embeded code here...">
              </div>
              <div class="demo-image">
                <img src="../../assets/images/demo-image.svg" alt="sada">
              </div>
            </div>
          </div>
        </div>
        <div class="btn-wrapper">
          <RouterLink to="#"><i class="fa fa-arrow-left"></i>Back</RouterLink>
          <RouterLink to="/investor/about-funds" class="btn-style black">Next Step<i class="fa fa-angle-right"></i></RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InvestorDashboardHeader from "@/components/investor/DashboardHeader.vue";

export default defineComponent({
  name: 'AddFund',
  components: {
    InvestorDashboardHeader
  },
  data(){
    return{
      isMenuActive1: false,
    }
  },
});
</script>
