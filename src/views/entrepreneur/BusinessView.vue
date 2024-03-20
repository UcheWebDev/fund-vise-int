<template>
 <DashboardHeader></DashboardHeader>
  <div class="add-campaign business-wrapper">
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
            <div class="col-md-6">
              <div class="form-group">
                <label for="name">Business opportunity</label>
                <textarea name="text" id="text" cols="30" rows="10" class="form-control" placeholder="Please write a detailed description of the business opportunity."></textarea>
              </div>
              <div class="form-group">
                <label for="name">Exit Strategy</label>
                <textarea name="text" id="text" cols="30" rows="10" class="form-control" placeholder="Please write a description on how you plan to exit this business."></textarea>
              </div>
              <div class="form-group">
                <label for="name">Notable Achievements</label>
                <textarea name="text" id="text" cols="30" rows="10" class="form-control" placeholder="Please share all notable achievements"></textarea>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="textarea">Market Potential</label>
                <textarea name="one" id="one" cols="30" rows="10" class="form-control" placeholder="Please write a description of the market"></textarea>
              </div>
              <div class="form-group">
                <label for="textarea">Number of users</label>
                <input type="text" class="form-control">
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="name">Total Revenue</label>
                    <input type="text" class="form-control">
                    <p class="dark-gray">USD</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="name">Profit</label>
                    <input type="text" class="form-control">
                    <p class="dark-gray">USD</p>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="textarea">Pitch Video</label>
                <input type="text" class="form-control" placeholder="Paste your Youtube or Vimeo iframe embeded code here...">
              </div>
              <div class="form-group">
                <textarea name="text" id="text" cols="30" rows="10" class="form-control"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="btn-wrapper">
          <RouterLink to="#"><i class="fa fa-arrow-left"></i>Back</RouterLink>
          <RouterLink to="../entrepreneur/team" class="btn-style black">Next Step<i class="fa fa-arrow-right"></i></RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DashboardHeader from "@/components/entrepreneur/DashboardHeader.vue";

export default defineComponent({
  name: 'BusinessView',
  components: {
    DashboardHeader
  },
  data(){
    return{
      isMenuActive1: false,
    }
  },
});
</script>
