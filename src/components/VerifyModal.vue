<template>
  <div class="verify-email-modal">
    <div
      class="modal fade"
      id="myModal"
      ref="myModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content">
          <div class="modal-header">
            <a href="#" data-bs-dismiss="modal"
              ><img
                src="../assets/images/icons/cross-x-icon.svg"
                alt="Cross"
                @click="closeModal"
            /></a>
          </div>
          <div class="modal-body">
            <div class="verify-email">
              <h3>Verify your email</h3>
              <img src="../assets/images/envelop-image.svg" alt="Envelop" />
              <p>
                Hi {{ role }}! <br />
                You have received an email to verify your account, Kindly click
                the link in your email for confirmation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  defineComponent,
  defineProps,
  defineEmits,
  onMounted,
  ref,
  watch,
} from "vue";

const props = defineProps(["role", "isVisible"]);
const isVisible = ref(props.isVisible);
const modalRef = ref(null);

const emit = defineEmits(["closeModal"]);

const handleNewVisibleState = (newVal) => {
  if (newVal === true) {
    modalRef.value.classList.add("show");
    modalRef.value.style.display = "block";
    modalRef.value.style.background = "rgba(0, 0, 0, 0.5)";
    document.body.classList.add("modal-open");
  }
};

const closeModal = () => {
  if (modalRef.value) {
    modalRef.value.classList.remove("show");
    modalRef.value.style.display = "none";
    document.body.classList.remove("modal-open");
    emit("closeModal");
  }
};

onMounted(() => {
  modalRef.value = document.getElementById("myModal");
});

watch(
  () => props.isVisible,
  (newValue, oldValue) => {
    isVisible.value = newValue;
    handleNewVisibleState(newValue);
  }
);
</script>
