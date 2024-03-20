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
                <h3>{{ investorName ? investorName : "Investor Name" }}</h3>
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
                <p class="dark-gray">{{ offerCreated }}</p>
              </div>
            </div>
            <div class="about-investor">
              <p class="semi-bold">About Investor</p>
              <p class="small dark-gray">
                {{
                  investorBio
                    ? investorBio
                    : "This paragraph contains informations about the investor such as the bio data"
                }}
              </p>
            </div>
            <div class="investor-offer">
              <p class="semi-bold">Investor Offer</p>
              <h3>
                ${{ formatNumberFilter(offerValue) }} <span>for</span
                >{{ offerEquity }}% <span>equity</span>
              </h3>
            </div>
            <div class="offer-wrapper">
              <a href="#" class="message"
                ><img
                  src="../../assets/images/icons/message-icon-modal.svg"
                  alt="message"
                />Message Investor</a
              >
              <div class="btn-wrapper">
                <a
                  href="#"
                  class="btn-style red-b"
                  @click="
                    rejectCampaignOffer(campaingId, 'rejected', investorId)
                  "
                  ><SpinButton
                    v-if="isRejectLoadingRequest"
                    class="redspin-text"
                  />
                  <span v-else class="btn-text red-text">
                    Reject Offer
                  </span></a
                >
                <a
                  href="#"
                  class="btn-style black"
                  @click="
                    acceptCampaignOffer(campaingId, 'accepted', investorId)
                  "
                >
                  <SpinButton v-if="isAcceptLoadingRequest" class="spin-text" />
                  <span v-else class="btn-text white-text">
                    Accept Offer</span
                  > </a
                >
              </div>
            </div>
            <!-- optionally remove for toast-->
            <div>{{ error }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, defineProps, ref } from "vue";
import { formatNumberFilter } from "../../filters/filter.js";
import server from "../../services/server";
import { useErrorHandling } from "../../helpers/errorLib";

import SpinButton from "@/components/SpinButton.vue";

const name = "OfferVIewModal";
const { error, setError, clearError, handleStatusCodeError } =
  useErrorHandling();

const props = defineProps([
  "offers",
  "offerCreated",
  "investorName",
  "investorBio",
  "offerEquity",
  "offerValue",
  "campaingId",
  "investorId",
]);

const isAcceptLoadingRequest = ref(false);
const isRejectLoadingRequest = ref(false);

const acceptCampaignOffer = (id, offerStatus, investorId) => {
  setError("");
  isAcceptLoadingRequest.value = true;
  server()
    .put("/enterpreneur/roles/updateOffer", {
      campaings_id: id,
      offer_status: offerStatus,
      investorId: investorId,
    })
    .then((response) => {
      isAcceptLoadingRequest.value = false;
      console.log(response);
    })
    .catch((err) => {
      isAcceptLoadingRequest.value = false;
      if (err.response && err.response.status === 422) {
        const serverError = err.response.data.already;
        setError(serverError);
      } else if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
      } else {
        setError("An unexpected error occurred.");
      }
    });
};

const rejectCampaignOffer = (id, offerStatus, investorId) => {
  setError("");
  isRejectLoadingRequest.value = true;
  server()
    .put("/enterpreneur/roles/updateOffer", {
      campaings_id: id,
      offer_status: offerStatus,
      investorId: investorId,
    })
    .then((response) => {
      isRejectLoadingRequest.value = false;
      console.log(response);
    })
    .catch((err) => {
      isRejectLoadingRequest.value = false;
      if (err.response && err.response.status === 422) {
        const serverError = err.response.data.already;
        setError(serverError);
      } else if (err.response && err.response.status) {
        handleStatusCodeError(err.response.status);
      } else {
        setError("An unexpected error occurred.");
      }
    });
};
</script>

<style scoped>
.red-b:hover {
  background-color: #ff4d4d;
}
.red-text {
  color: #ff4d4d;
  line-height: 24px;
  font-size: 16px;
  font-family: "Sora", sans-serif;
  font-weight: 600;
}

.red-b:hover .red-text {
  color: #ffffff;
}

.red-b:hover .redspin-text {
  color: red; /* Set the color of the spinner to red when the button is hovered and has a white background */
}

.red-b {
  background: transparent;
  color: #ff4d4d;
  border-color: #ff4d4d;
  border-radius: 4px;
}

.white-text {
  color: white;
  line-height: 24px;
  font-size: 16px;
  font-family: "Sora", sans-serif;
  font-weight: 600;
}

.black:hover .white-text {
  color: black;
  line-height: 24px;
  font-size: 16px;
  font-family: "Sora", sans-serif;
  font-weight: 600;
}

/* .btn-text {
  color: #ffffff;
  line-height: 24px;
  font-size: 16px;
} */
.btn-style .black span {
  background: #000000;
  color: #ffffff;
}

/* .btn-style .black:hover {
  background: #000000;
  color: #000000;
} */
</style>
