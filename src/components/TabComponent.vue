<template>
  <div class="drop-down">
    <div class="notification-header">
      <p>Notification</p>
      <i class="fa fa-x"></i>
    </div>
    <div class="btn-wrapper" id="myTab" role="tablist">
      <a class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="home-tab"
          data-bs-toggle="tab"
          data-bs-target="#home"
          type="button"
          role="tab"
          aria-controls="home"
          aria-selected="true"
          @click="changeTab(null)"
        >
          All
        </button>
      </a>
      <a class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#profile"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
          @click="changeTab('campaign')"
        >
          Campaigns
        </button>
      </a>
      <a class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="contact-tab"
          data-bs-toggle="tab"
          data-bs-target="#contact"
          type="button"
          role="tab"
          aria-controls="contact"
          aria-selected="false"
          @click="changeTab('requests')"
        >
          Request
        </button>
      </a>
      <a class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="fund-tab"
          data-bs-toggle="tab"
          data-bs-target="#fund"
          type="button"
          role="tab"
          aria-controls="fund"
          aria-selected="false"
          @click="changeTab('funds')"
        >
          Fund
        </button>
      </a>
    </div>

    <div class="date">
      <p>Today</p>
      <a href="#">Mark all as read</a>
    </div>

    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <div
          class="notification-card"
          v-for="notifyItem in filteredNotifications"
          :key="notifyItem"
        >
          <div class="img-wrapper">
            <img
              src="../assets/images/icons/profile-small-icon.svg"
              alt="profile"
            />
          </div>
          <div class="content-wrapper">
            <p>
              <strong>{{ notifyItem.name }}</strong>
              <span>{{ notifyItem.body }}</span>
            </p>
            <p>
              {{ notifyItem.createdAt }}<strong>.</strong
              >{{ notifyItem.category }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <div
          class="notification-card"
          v-for="notifyItem in filteredNotifications"
          :key="notifyItem"
        >
          <div class="img-wrapper">
            <img
              src="../assets/images/icons/profile-small-icon.svg"
              alt="profile"
            />
          </div>
          <div class="content-wrapper">
            <p>
              <strong>{{ notifyItem.name }}</strong>
              <span>{{ notifyItem.body }}</span>
            </p>
            <p>
              {{ notifyItem.createdAt }}<strong>.</strong
              >{{ notifyItem.category }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="contact"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        <div
          class="notification-card"
          v-for="notifyItem in filteredNotifications"
          :key="notifyItem"
        >
          <div class="img-wrapper">
            <img
              src="../assets/images/icons/profile-small-icon.svg"
              alt="profile"
            />
          </div>
          <div class="content-wrapper">
            <p>
              <strong>{{ notifyItem.name }}</strong>
              <span>{{ notifyItem.body }}</span>
            </p>
            <p>
              {{ notifyItem.createdAt }}<strong>.</strong
              >{{ notifyItem.category }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="fund"
        role="tabpanel"
        aria-labelledby="fund-tab"
      >
        <div
          class="notification-card"
          v-for="notifyItem in filteredNotifications"
          :key="notifyItem"
        >
          <div class="img-wrapper">
            <img
              src="../assets/images/icons/profile-small-icon.svg"
              alt="profile"
            />
          </div>
          <div class="content-wrapper">
            <p>
              <strong>{{ notifyItem.name }}</strong>
              <span>{{ notifyItem.body }}</span>
            </p>
            <p>
              {{ notifyItem.createdAt }}<strong>.</strong
              >{{ notifyItem.category }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, ref, onMounted, computed, defineProps } from "vue";

const NotificationsTab = ref("NotificationsTab");
const activeTab = ref(null);

const props = defineProps(["notification"]);

const filteredNotifications = computed(() => {
  if (!activeTab.value) {
    return props.notification;
  } else {
    return props.notification.filter(
      (item) => item.category === activeTab.value
    );
  }
});

const changeTab = (category) => {
  activeTab.value = category;
};
</script>