<template>
  <div class="profile-modal">
    <div class="offcanvas offcanvas-end" tabindex="-1"  id="myModal" aria-labelledby="offcanvasRightLabel">
      <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
<!--            <a href="/" data-bs-dismiss="offcanvas">x</a>-->
          </div>
          <!-- Modal body -->
          <div class="modal-body">
            <div class="profile-header">
              <img src="../../assets/images/profile-for-modal.svg" alt="profile">
              <a href="#"><img src="../../assets/images/icons/bookmark-yellow-icon.svg" alt="bookmark">Premium</a>
            </div>
            <div class="content-wrapper">
              <h3>Ann Bamdey <img src="../../assets/images/icons/star-green-modal.svg" alt=""></h3>
              <p>Entrepreneur | Founder Up Talk </p>
              <RouterLink to="/entrepreneur/profile" class="btn-style transparent">View Profile</RouterLink>
            </div>
            <ul class="primary-menu">
              <li>
                <RouterLink to="../../entrepreneur/campaigns"><img src="../../assets/images/icons/signal-icon-modal.svg" alt="Home">My Campaigns</RouterLink>
              </li>
              <li>
                <RouterLink to="../../entrepreneur/funds"><img src="../../assets/images/icons/signal-icon-dollar-modal.svg" alt="Live">Live Funds</RouterLink>
              </li>
              <li>
                <RouterLink to="../../entrepreneur/saved"><img src="../../assets/images/icons/bookmark-modal.svg" alt="connect">Saved Funds</RouterLink>
              </li>
              <li>
                <RouterLink to="../../entrepreneur/team"><img src="../../assets/images/icons/team-modal.svg" alt="funds">My Team</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileModal',
  data(){
    return{
      isMenuActive: false,
    }
  }
}
</script>
