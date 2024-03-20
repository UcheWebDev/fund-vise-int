<template>
  <div class="verify-email-modal listing-agreement-modal">
    <div
      class="modal fade"
      id="agreementModal"
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
                src="../../assets/images/icons/cross-x-icon.svg"
                alt="Cross"
                @click="closeModal()"
            /></a>
          </div>
          <div class="modal-body">
            <div class="content-wrapper">
              <h3 class="h3">
                By proceeding to view the details of this startup, you
                acknowledge and agree to the following terms:
              </h3>
              <ul>
                <li>
                  You understand that the information is confidential and
                  belongs to the startup and its founders.
                </li>
                <li>
                  You agree not to share or distribute any information to others
                  without the startup's permission.
                </li>
                <li>
                  You agree to use the information only for considering
                  investment opportunities with the startup.
                </li>
                <li>
                  You understand that sharing the information without permission
                  could harm the startup, and you could be responsible for any
                  damage caused by such sharing.
                </li>
              </ul>
            </div>
            <div class="form">
              <form @submit="onSubmit">
                <input type="checkbox" v-model="terms" />
                <button type="submit" class="btn-style m-1">
                  I agree to these terms and wish to proceed
                </button>
              </form>
            </div>
            <div class="err text-center mt-3">
              <p class="small">{{ errors.terms }}</p>
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
  ref,
  onMounted,
  watch,
} from "vue";

import { formValidations } from "../../helpers/formValidations";
import { acceptTermsValidationSchema } from "../../helpers/validationSchema";

const { errors, handleSubmit, defineField, setErrors } = formValidations(
  acceptTermsValidationSchema
);

const props = defineProps(["id", "isVisible"]);
const emit = defineEmits(["saveFunds", "closeModal"]);

const name = "ListingAgreementModal";
const modalRef = ref(null);
const isVisible = ref(props.isVisible);

const [terms, termsAttrs] = defineField("terms");

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

const onSubmit = handleSubmit((values) => {
  emit("saveFunds");
  closeModal();
});

onMounted(() => {
  modalRef.value = document.getElementById("agreementModal");
});

watch(
  () => props.isVisible,
  (newValue, oldValue) => {
    isVisible.value = newValue;
    handleNewVisibleState(newValue);
  }
);
</script>
