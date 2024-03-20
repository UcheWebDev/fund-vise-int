<template>
  <InvestorDashboardHeader></InvestorDashboardHeader>
  <div class="dashboard my-live-campaign">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-4">
          <LiveListingSidebar ></LiveListingSidebar>
        </div>
        <div class="col-lg-9 col-md-8">
          <div class="my-campaign-detail-wrapper">
            <div class="row">
              <div class="col-lg-10 col-md-12">
                <div class="campaign-profile-wrapper">
                  <div class="img-wrapper">
                    <img src="../../assets/images/profile-1.png" alt="profile">
                  </div>
                  <div class="content-wrapper">
                    <div class="mpv">
                      <p class="large semi-bold">Food App <img src="../../assets/images/icons/elipses-gray.svg" class="icon" alt="Elipses"><img src="../../assets/images/icons/green-brackets-icon.svg" class="icon" alt="Elipses"><span>Lagos, Nigeria</span></p>
                      <p class="small">MPV  | Food & Cooking</p>
                      <a href="#" class="small"><img src="../../assets/images/icons/attachment-icon.svg" class="icon" alt="attachment">Visit website</a>
                    </div>
                    <div class="listed">
                      <p>Listed</p>
                      <p class="x-small">4wks ago</p>
                    </div>
                    <div class="status">
                      <p class="large semi-bold">Campaign Status</p>
                      <div class="form">
                        <div class="form-group">
                          <input type="checkbox">
                          <label for="Checkbox">Open</label>
                        </div>
                        <div class="form-group">
                          <input type="checkbox">
                          <label for="Checkbox">Close</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="verified-listing">
                    <div class="raising">
                      <p class="x-small">Raising </p>
                      <p class="semi-bold">$185k  <span>to</span> $250k</p>
                    </div>
                    <div class="equity">
                      <p class="x-small">Equity on offer </p>
                      <p class="semi-bold">20%</p>
                    </div>
                    <a href="#"><img src="../../assets/images/icons/secutyrt-icon.svg" class="icon" alt="Security">Verified Listing</a>
                  </div>
                </div>
                <div class="offers-received">
                  <p class="dark-gray">Offers Received</p>
                  <div class="table-responsive">
                    <table>
                      <tr>
                        <th><p>Investor</p></th>
                        <th><p>Fund</p></th>
                        <th><p>Equity</p></th>
                        <th><p>Date</p></th>
                      </tr>
                      <tr>
                        <td>
                          <p>Shebuel VC</p>
                          <p>Shebuel Investments CO.</p>
                        </td>
                        <td><p>$250k</p></td>
                        <td><p>25%</p></td>
                        <td><p>2wks ago</p></td>
                        <td><a href="#" class="btn-style" data-bs-target="#offerModal" data-bs-toggle="modal">View</a></td>
                      </tr>
                      <tr>
                        <td>
                          <p>Shebuel VC</p>
                          <p>Shebuel Investments CO.</p>
                        </td>
                        <td><p>$250k</p></td>
                        <td><p>25%</p></td>
                        <td><p>2wks ago</p></td>
                        <td><a href="#" class="btn-style">View</a></td>
                      </tr>
                      <tr>
                        <td>
                          <p>Shebuel VC</p>
                          <p>Shebuel Investments CO.</p>
                        </td>
                        <td><p>$250k</p></td>
                        <td><p>25%</p></td>
                        <td><p>2wks ago</p></td>
                        <td><a href="#" class="btn-style">View</a></td>
                      </tr>
                    </table>
                    <div class="view-all">
                      <a href="#" class="small">View All <img src="../../assets/images/icons/arrow-down-double.svg" alt="Arrow"></a>
                    </div>
                  </div>
                </div>
                <div class="product-overview">
                  <p class="semi-bold">Product Overview </p>
                  <p class="small">Lorem ipsum dolor sit amet consectetur. Felis ultricies vulputate ullamcorper vitae gravida.
                    Ac interdum auctor imperdiet at nulla pulvinar erat. Pellentesque volutpat sem varius sed eu facilisis enim.
                    Vitae sed maecenas sapien sit. Pellentesque volutpat sem varius sed eu facilisis enim. Vitae sed maecenas sapien sit.</p>
                  <div class="video-wrapper">
                    <img src="../../assets/images/video-image.png" alt="Video">
                  </div>
                </div>
                <div class="the-business">
                  <div class="content-wrapper">
                    <p class="semi-bold">The Business </p>
                    <div class="profit">
                      <div class="raising">
                        <p class="x-small">Number of Users</p>
                        <p class="semi-bold">25k</p>
                      </div>
                      <div class="equity">
                        <p class="x-small">Total revenue</p>
                        <p class="semi-bold">$26k</p>
                      </div>
                      <div class="equity">
                        <p class="x-small">Profit</p>
                        <p class="semi-bold">$2k</p>
                      </div>
                    </div>
                    <p class="small dark-gray">Lorem ipsum dolor sit amet consectetur. Felis ultricies vulputate ullamcorper vitae gravida.
                      Ac interdum auctor imperdiet at nulla pulvinar erat. Pellentesque volutpat sem varius sed eu facilisis enim.
                      Vitae sed maecenas sapien sit. Pellentesque volutpat sem varius sed eu facilisis enim. Vitae sed maecenas sapien sit.</p>
                  </div>
                  <div class="content-wrapper">
                    <p class="semi-bold">The Market  </p>
                    <p class="small dark-gray">Lorem ipsum dolor sit amet consectetur. Felis ultricies vulputate ullamcorper vitae gravida.
                      Ac interdum auctor imperdiet at nulla pulvinar erat. Pellentesque volutpat sem varius sed eu facilisis enim.
                      Vitae sed maecenas sapien sit. Pellentesque volutpat sem varius sed eu facilisis enim. Vitae sed maecenas sapien sit.</p>
                  </div>
                  <div class="content-wrapper">
                    <p class="semi-bold">Use of funds  (Maximum Raised) </p>
                    <p class="small dark-gray">Lorem ipsum dolor sit amet consectetur. Felis ultricies vulputate ullamcorper vitae gravida.
                      Ac interdum auctor imperdiet at nulla pulvinar erat. Pellentesque volutpat sem varius sed eu facilisis enim.
                      Vitae sed maecenas sapien sit. Pellentesque volutpat sem varius sed eu facilisis enim. Vitae sed maecenas sapien sit.</p>
                  </div>
                  <div class="content-wrapper">
                    <p class="semi-bold">Use of funds  (Minimum Raised) </p>
                    <p class="small dark-gray">Lorem ipsum dolor sit amet consectetur. Felis ultricies vulputate ullamcorper vitae gravida.
                      Ac interdum auctor imperdiet at nulla pulvinar erat. Pellentesque volutpat sem varius sed eu facilisis enim.
                      Vitae sed maecenas sapien sit. Pellentesque volutpat sem varius sed eu facilisis enim. Vitae sed maecenas sapien sit.</p>
                  </div>
                </div>
                <div class="team">
                  <p class="semi-bold">Team</p>
                  <div class="team-wrapper">
                    <div class="team-card">
                      <div class="img-wrapper">
                        <img src="../../assets/images/team-player-one.png" alt="Team">
                      </div>
                      <div class="content-wrapper">
                        <p class="semi-bold">John Marry</p>
                        <p class="x-small">Founder</p>
                        <a href="#"><img src="../../assets/images/icons/attachment-icon.svg"  alt="Attachment">Visit Profile </a>
                      </div>
                    </div>
                    <div class="team-card">
                      <div class="img-wrapper">
                        <img src="../../assets/images/team-player-two.png" alt="Team">
                      </div>
                      <div class="content-wrapper">
                        <p class="semi-bold">John Marry</p>
                        <p class="x-small">Co-Founder /CTO</p>
                        <a href="#"><img src="../../assets/images/icons/attachment-icon.svg"  alt="Attachment">Visit Profile </a>
                      </div>
                    </div>
                  </div>
                  <div class="btn-wrapper">
                    <a href="#" class="btn-style transparent">Delete Campaign</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-3 text-end">
                <div class="back">
                  <a href="#" class="underline"><i class="fa fa-arrow-left"></i>Back</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <OfferVIewModal></OfferVIewModal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LiveListingSidebar from "@/components/entrepreneur/LiveListingSidebar.vue";
import OfferVIewModal from "@/components/entrepreneur/OfferVIewModal.vue";
import InvestorDashboardHeader from "@/components/investor/DashboardHeader.vue";

export default defineComponent({
  name: 'InvestorFoodApp',
  components: {
    InvestorDashboardHeader,
    OfferVIewModal,
    LiveListingSidebar,
  },
  data(){
    return{
      isMenuActive1: false,
    }
  },
});
</script>
