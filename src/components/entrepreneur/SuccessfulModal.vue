<template>
  <div class="verify-email-modal success-modal">
    <div class="modal fade" id="successModal">
      <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <a href="#" data-bs-dismiss="modal"><img src="../../assets/images/icons/cross-x-icon.svg" alt="Cross"></a>
          </div>
          <div class="modal-body">
            <div class="verify-email">
              <h3>Successful</h3>
              <img src="../../assets/images/icons/check-circle-broken-icon.svg" alt="Check">
              <p>Hi Entrepreneur!
                <br> You have successfully created your campaign.</p>
              <a href="#" class="btn-style black">Done</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'successModal',
});
</script>
