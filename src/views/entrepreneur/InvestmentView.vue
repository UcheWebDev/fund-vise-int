<template>
 <DashboardHeader></DashboardHeader>
  <div class="add-campaign">
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
                <label for="name">Investment Round</label>
                <select name="one" id="one" class="form-control">
                  <option value="one">Select investment round</option>
                  <option value="one">...</option>
                </select>
                <i class="fa fa-angle-down"></i>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="name">Min Target</label>
                    <input type="text" class="form-control">
                    <p class="dark-gray">USD</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="name">Equity on offer</label>
                    <input type="text" class="form-control">
                    <p class="dark-gray">&</p>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="name">Use of funds (Min)</label>
                <textarea name="text" id="text" cols="30" rows="10" class="form-control" placeholder="Please explain what you will do if you raised the minimum fund target"></textarea>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="name">Max Target</label>
                    <input type="text" class="form-control">
                    <p class="dark-gray">USD</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="name">Equity on offer</label>
                    <input type="text" class="form-control">
                    <p class="dark-gray">&</p>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="name">Use of funds (Max)</label>
                <textarea name="text" id="text" cols="30" rows="10" class="form-control" placeholder="Please explain what you will do if you raised the maximum fund target"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="btn-wrapper">
          <RouterLink to="#"><i class="fa fa-arrow-left"></i>Back</RouterLink>
          <RouterLink to="../entrepreneur/business" class="btn-style black">Next Step<i class="fa fa-arrow-right"></i></RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DashboardHeader from "@/components/entrepreneur/DashboardHeader.vue";

export default defineComponent({
  name: 'InvestmentView',
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
