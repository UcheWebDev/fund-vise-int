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
                <label for="name">Total Fund Value</label>
                <input type="text" class="form-control" placeholder="Total fund value">
              </div>
              <div class="form-group">
                <label for="name"> How many business are you looking to fund?</label>
                <select name="one" id="one" class="form-control">
                  <option value="one">No. of business</option>
                  <option value="one">...</option>
                </select>
                <i class="fa fa-angle-down"></i>
              </div>
              <div class="form-group">
                <label for="name">Is there any specific criteria applicants must have in order to apply to this fund?</label>
                <textarea name="text" id="text" cols="30" rows="10" class="form-control" placeholder="Enter criteria"></textarea>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="name">Funding per business</label>
                <input type="text" class="form-control" placeholder="Funding per business">
              </div>
              <div class="form-group">
                <label for="name">Average percentage taken</label>
                <input type="text" class="form-control" placeholder="Average percentage taken">
              </div>
            </div>
          </div>
        </div>
        <div class="btn-wrapper">
          <RouterLink to="#"><i class="fa fa-arrow-left"></i>Back</RouterLink>
          <RouterLink to="#" data-bs-target="#successModal" data-bs-toggle="modal" class="btn-style black">Save & Publish<i class="fa fa-angle-right"></i></RouterLink>
        </div>
      </div>
    </div>
  </div>
  <SuccessModal></SuccessModal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InvestorDashboardHeader from "@/components/investor/DashboardHeader.vue";
import SuccessModal from "@/components/entrepreneur/SuccessfulModal.vue";

export default defineComponent({
  name: 'AboutFunds',
  components: {
    SuccessModal,
    InvestorDashboardHeader
  },
  data(){
    return{
      isMenuActive1: false,
    }
  },
});
</script>
