<template>
  <div class="verify-email-modal offer-view-modal">
    <div class="modal fade" id="offerModal">
      <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <a href="#" data-bs-dismiss="modal"
              ><img
                src="../../assets/images/icons/cross-x-icon.svg"
                alt="Cross"
            /></a>
          </div>
          <div class="modal-body">
            <div class="profile-wrapper">
              <div class="img-wrapper">
                <img
                  src="../../assets/images/profile-modal-image.svg"
                  alt="Profile"
                />
              </div>
              <div class="content-wrapper">
                <h3>Shebuel VC</h3>
                <p>Shebuel Investments CO.</p>
                <a href="#"
                  ><img
                    src="../../assets/images/icons/sheild-tick-icon.svg"
                    alt="Check"
                  />Verified Investor</a
                >
                <a href="#">View Profile</a>
              </div>
              <div class="date">
                <p class="dark-gray">2wks ago</p>
              </div>
            </div>
            <div class="about-investor">
              <p class="semi-bold">About Investor</p>
              <p class="small dark-gray">
                Lorem ipsum dolor sit amet consectetur. Felis ultricies
                vulputate ullamcorper vitae gravida. Ac interdum auctor
                imperdiet at nulla pulvinar erat. Pellentesque volutpat sem
                varius sed eu facilisis enim. Vitae sed maecenas sapien
                sit.Pellentesque volutpat sem varius sed eu facilisis enim.
                Vitae sed maecenas sapien sit.
              </p>
            </div>
            <div class="investor-offer">
              <p class="semi-bold">Investor Offer</p>
              <h3>$250k <span>for</span>25% <span>equity</span></h3>
            </div>
            <div class="offer-wrapper">
              <a href="#" class="message"
                ><img
                  src="../../assets/images/icons/message-icon-modal.svg"
                  alt="message"
                />Message Investor</a
              >
              <div class="btn-wrapper">
                <a href="#" class="btn-style red-transparent">Reject Offer</a>
                <a href="#" class="btn-style black">Accept Offer</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OfferVIewModal",
});
</script>